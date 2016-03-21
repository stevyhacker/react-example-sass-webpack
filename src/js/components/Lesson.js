import React from "react";

export default class Lesson extends React.Component {

    render() {
        return (
            <div className="lesson-item">
                <hr/>
                <div className="lesson-content">
                    <p className="lesson-id"> {this.props.id}</p>
                    <p className="lesson-name">  {this.props.name} </p>
                    <p className="lesson-time"> {this.props.time} </p>
                </div>
            </div>
        );
    }
}