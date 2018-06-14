import React from 'react';
import Autosuggest from 'react-autosuggest';
import Axios from 'axios';

let tags = [];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    return tags.data.filter(tag => regex.test(tag.name));
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}

export class SearchComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };

        this.loadTags = this.loadTags.bind(this);
    }

    componentWillMount() {
        this.loadTags();
    }

    async loadTags() {
        Axios.get('/tag_suggestion')
            .then(function (response) {
                if (response.data.length > 0) {
                    tags = {data: response.data};
                    console.log(tags);
                } else
                    tags = {data: [{name: 'beaded'},{name: 'bell'},{name: 'black'},{name: 'boiled'}]}
            })
            .catch(function (error) {
                const dataTemp = [{name: 'beaded'},{name: 'bell'},{name: 'black'},{name: 'boiled'}];
                tags = {data: dataTemp};
                console.log(error);
            });
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onKeyDown = (event) => {
        if(event.keyCode===13) {
            this.props.setSearch(event.target.value)
            console.log(event.target.value);
        }
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search..",
            value,
            onChange: this.onChange,
            onKeyDown: this.onKeyDown
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}>

            </Autosuggest>
        );
    }
}