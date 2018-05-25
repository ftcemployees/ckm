import React from 'react';
import ImageUploader from 'react-images-upload';

function createImage(src, width, height, alt, id, className, appendMethod) {
    let newImg = document.createElement('IMG');
    newImg.setAttribute('src', src);
    newImg.setAttribute('id', id);
    newImg.setAttribute('class', className);
    newImg.setAttribute('width', width);
    newImg.setAttribute('height', height);
    newImg.setAttribute('alt', alt);
    appendMethod.appendChild(newImg);
}

export class NewItem extends React.Component{
    constructor(props){
        super(props);
        this.handleImageSelect = this.handleImageSelect.bind(this);

    }

    handleImageSelect(input) {
        if (input.target.files){
            const imgContainer = document.getElementById('imgContainer');
            // remove all uploaded pictures
            while (imgContainer.firstChild) {
                imgContainer.removeChild(imgContainer.firstChild);
            }
            for (let i = 0; i < input.target.files.length; i++){
                const reader = new FileReader();
                reader.onload = function(e) {
                    createImage(e.target.result, 220, 230, 'Picture ', 'img-' + i, 'img-upload', imgContainer);
                }
                reader.readAsDataURL(input.target.files[i]);

            }
        }
    }

    render() {
        return (
            <div>
                <label class="upload-lable">
                    <input type="file" onChange={this.handleImageSelect} accept="image/*" multiple /><br />
                    <span>Cool Lable</span>
                </label>
                <div className="divBox" id="imgContainer">


                </div>
            </div>
        )
    }
}