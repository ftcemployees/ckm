import React from 'react';
import axios from 'axios';

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
        this.state = {
            imgs: [
                {
                    src: 'img/1.jpeg',
                    className: 'img-upload'
                },
                {
                    src: 'img/2.jpg',
                    className: 'img-upload'
                },
                {
                    src: 'img/3.jpg',
                    className: 'img-upload'
                },
                {
                    src: 'img/4.jpg',
                    className: 'img-upload'
                }
            ]
        }
        this.handleImageSelect = this.handleImageSelect.bind(this);
        this.sendUpload = this.sendUpload.bind(this);
    }

    sendUpload(e) {
        e.preventDefault();
        const files = document.getElementsByClassName('file-selector')[0].files;
        console.log(files);
        let formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
        console.log(formData);
        axios.post('/new-item', formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
        const listOfImgs = this.state.imgs.map((img) =>
            <img src={img.src} className={img.className} />
        );
        return (
            <div>
                <label className="upload-lable">
                    <input type="file" className="file-selector" onChange={this.handleImageSelect} accept="image/*" multiple /><br />
                    <span>Cool Lable</span>
                </label>
                <button onClick={this.sendUpload}>Upload to the server</button>
                <div className="divBox" id="imgContainer">
                    {listOfImgs}
                </div>
            </div>
        )
    }
}