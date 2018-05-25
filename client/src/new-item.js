import React from 'react';
import ImageUploader from 'react-images-upload';

export class NewItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { picture1: '',
                        picture2: ''};
        this.handleImageSelect = this.handleImageSelect.bind(this);

    }

    handleImageSelect(e) {
        var preview1 = document.querySelector('#asd'); //selects the query named img
        var preview3 = document.getElementsByName('#asd3'); //selects the query named img
        var file    = document.querySelector('input[type=file]').files; //sames as here
        var reader  = new FileReader();

        reader.onloadend = function () {
            preview1.src =  reader.result;
            preview1.src = reader.result;
        }

        if (file) {
            console.log(file[0]);
            reader.readAsDataURL(file[0]); //reads the data as a URL
        } else {
            preview1.src = "";
        }
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.handleImageSelect} multiple/><br />

                <div class="divBox">
                    <img id="asd" src={this.state.picture1} height="200" alt="Image preview..." />
                    <img id="asd3" src={this.state.picture2} height="200" alt="Image preview..." />
                </div>
            </div>
        )
    }
}