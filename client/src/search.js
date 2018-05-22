import React from 'react';
import Autosuggest from 'react-autosuggest';
import Axios from 'axios';

let tags = [
    {
        name: 'C',
        year: 1972
    }
    // {
    //     name: 'C#',
    //     year: 2000
    // },
    // {
    //     name: 'C++',
    //     year: 1983
    // },
    // {
    //     name: 'Clojure',
    //     year: 2007
    // },
    // {
    //     name: 'Elm',
    //     year: 2012
    // },
    // {
    //     name: 'Go',
    //     year: 2009
    // },
    // {
    //     name: 'Haskell',
    //     year: 1990
    // },
    // {
    //     name: 'Java',
    //     year: 1995
    // },
    // {
    //     name: 'Javascript',
    //     year: 1995
    // },
    // {
    //     name: 'Perl',
    //     year: 1987
    // },
    // {
    //     name: 'PHP',
    //     year: 1995
    // },
    // {
    //     name: 'Python',
    //     year: 1991
    // },
    // {
    //     name: 'Ruby',
    //     year: 1995
    // },
    // {
    //     name: 'Scala',
    //     year: 2003
    // }
];

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
        console.log("Egg");
        Axios.get('/tag_suggestion')
            .then(function (response) {
                // console.log(response);
                tags = {data: response.data};
                // tags = response.data.map((item, index) => {
                //     console.log(index + ' || ' + item);
                //     tags += item;
                // })
                console.log(tags);
            })
            .catch(function (error) {
                console.log("here2");
                const dataTemp = [{name: 'beaded'},{name: 'bell'},{name: 'black'},{name: 'boiled'}];
                tags = [{data: dataTemp}];
                console.log(error);
            });
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
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
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps} />
        );
    }
}