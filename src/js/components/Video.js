import React from "react";

export default class Video extends React.Component {

    render() {

        var videoUrl = "http://www.youtube.com/embed/" + this.props.id;

        return (
            <div className="video">
                <iframe id="player" type="text/html" width="100%" height="500"
                        src={videoUrl}
                        frameborder="0"></iframe>
                <p className="description"> {this.props.description} </p>
            </div>
        );
    }
}