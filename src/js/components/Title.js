import React from "react";

export default class Title extends React.Component {

    render() {
        return (
            <div>
                <h2>{this.props.videoTitle}</h2>
                <h4>{this.props.date}</h4>
            </div>
        );
    }
}