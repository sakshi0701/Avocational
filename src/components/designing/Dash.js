import React, { Component } from 'react'
import Display from './design/Display'
import Setting from './design/Setting'
import { connect } from 'react-redux';
import { storage } from "../../firebase";
import { saveDesign } from "./store/actions/saveDesignAction";

class Dash extends Component {

    state = {
        tshirtColor: "black",
        upperText: "Upper Text",
        lowerText: "Lower Text",
        textimg: '',
        url: '',
        textSize: 52,
        textColor: "white"
    }

    handleTshirtColor = (e) => {
        this.setState({ tshirtColor: e.target.id });
    }

    handleUpperText = (e) => {
        this.setState({ upperText: e.target.value })
    }

    handleLowerText = (e) => {
        this.setState({ lowerText: e.target.value })
    }

    handleTextSize = (e) => {
        this.setState({ textSize: e.target.value })
    }

    formatText() {
        const size = this.state.textSize;
        return parseInt(size);
    }

    handleTextColor = (e) => {
        this.setState({ textColor: e.target.value })
    }

    handleImgUpload = (e) => {
        if (e.target.files[e]) {
            const image = (e.target.files[0]);
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('change_state',
                (snapshot) => {
                    console.log(snapshot);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({ url });
                    })
                }
            )
        }
    }

    handleSaveDesign = (e) => {
        if(e.target.id === 'saveDesign') {
            this.props.saveDesign(this.state)
        }
    }

    render() {
        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col-lg-8">
                        <Display
                            display={this.state}
                            textFormat={this.formatText()} />
                    </div>
                    <div className="col-lg-4">
                        <Setting
                            color={this.handleTshirtColor}
                            upperText={this.handleUpperText}
                            lowerText={this.handleLowerText}
                            uploadImage={this.handleImgUpload}
                            textSize={this.handleTextSize}
                            textColor={this.handleTextColor}
                            saveDesign={this.handleSaveDesign} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveDesign: (design) => dispatch(saveDesign(design))
    }
}

export default connect(null, mapDispatchToProps)(Dash)
