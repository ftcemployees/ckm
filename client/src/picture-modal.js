import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        maxWidth              : '65%',
        maxHeight             : '90%',
        width                 : '65%',
        height                : '90%',
        position              : 'relative',
        overflow              : 'hidden',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export class PictureModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onAfterOpen={this.props.afterOpenModal}
                onRequestClose={this.props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <section className="pic_main_section">
                    <i className="left" onClick={()=>this.props.prevPic()}></i>
                    <div className="modal_content">
                        <p className="picName">{this.props.picView.id}</p>

                        <div className="picFrame">

                            <img className="picView" src={'img/' + this.props.picView.id + '.jpg'} alt="1"/>

                        </div>

                        <br/>
                        { this.props.picView.category &&
                            <p className="picDescription">
                                Category: {this.props.picView.category}
                            </p>
                        }
                        { this.props.picView.gender &&
                            <p className="picDescription">
                                Gender: {this.props.picView.gender}
                            </p>
                        }
                        { this.props.picView.item &&
                            <p className="picDescription">
                                Item: {this.props.picView.item}
                            </p>
                        }
                        { this.props.picView.style &&
                            <p className="picDescription">
                                Style: {this.props.picView.style}
                            </p>
                        }
                        { this.props.picView.era &&
                            <p className="picDescription">
                                Era: {this.props.picView.era}
                            </p>
                        }
                        { this.props.picView.description &&
                            <p className="picDescription">
                                Description: {this.props.picView.description}
                            </p>
                        }
                        { this.props.picView.branding &&
                            <p className="picDescription">
                                Branding: {this.props.picView.branding}
                            </p>
                        }
                        { this.props.picView.measurement &&
                            <p className="picDescription">
                                Measurement: {this.props.picView.measurement}
                            </p>
                        }
                        { this.props.picView.history &&
                            <p className="picDescription">
                                History: {this.props.picView.history}
                            </p>
                        }
                        <br/>
                    </div>
                    <i className="right" onClick={()=>this.props.nextPic()}></i>
                </section>
            </Modal>
        );
    }
}