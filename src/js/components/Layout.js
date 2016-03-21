import React from "react";
import $ from "jquery";

import Video from "./Video";
import Title from "./Title";
import LessonContent from "./LessonContent";


export default class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: "",
            title: ""
        }
    }

    componentDidMount() {
        var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=instrumental&type=video&maxResults=9&key=AIzaSyB16ezA9q7ea_i_mhbDAP3SbKqGBCZT2Lk' + '&callback=?';
        console.log(url);
        var self = this;
        $.getJSON(url, function (result) {
            var responseString = JSON.stringify(result, '', 2);
            // console.log(responseString);

            var videoListItems = result.items.map(function (item) {
                return {
                    //Video json item parsing
                    id: item.id.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    published: item.snippet.publishedAt,
                    thumbnail: item.snippet.thumbnails.medium.url,
                    thumbnailLarge: item.snippet.thumbnails.high.url,
                    url: "http://youtube.com/watch?v=" + item.id.videoId
                };
            });
            const video = videoListItems[0];
            console.log(video)
            self.setState({video});
        });

        // var lessons = [{
        //     "id": 1,
        //     "name": "LiveZ",
        //     "time": "3:42 AM"
        // }, {
        //     "id": 2,
        //     "name": "Flipstorm",
        //     "time": "3:10 PM"
        // }, {
        //     "id": 3,
        //     "name": "Yozio",
        //     "time": "10:28 PM"
        // }, {
        //     "id": 4,
        //     "name": "Mita",
        //     "time": "4:20 AM"
        // }, {
        //     "id": 5,
        //     "name": "Topicblab",
        //     "time": "1:40 PM"
        // }, {
        //     "id": 6,
        //     "name": "Brainlounge",
        //     "time": "2:39 AM"
        // }, {
        //     "id": 7,
        //     "name": "Mydeo",
        //     "time": "6:06 PM"
        // }, {
        //     "id": 8,
        //     "name": "Latz",
        //     "time": "6:08 PM"
        // }, {
        //     "id": 9,
        //     "name": "Jabbertype",
        //     "time": "11:48 PM"
        // }, {
        //     "id": 10,
        //     "name": "Youfeed",
        //     "time": "3:59 PM"
        // }, {
        //     "id": 11,
        //     "name": "Eamia",
        //     "time": "6:36 PM"
        // }, {
        //     "id": 12,
        //     "name": "Bluezoom",
        //     "time": "3:04 PM"
        // }, {
        //     "id": 13,
        //     "name": "Cogidoo",
        //     "time": "11:09 PM"
        // }, {
        //     "id": 14,
        //     "name": "Dabfeed",
        //     "time": "7:24 AM"
        // }, {
        //     "id": 15,
        //     "name": "Twitterwire",
        //     "time": "3:09 AM"
        // }, {
        //     "id": 16,
        //     "name": "Quinu",
        //     "time": "12:42 PM"
        // }, {
        //     "id": 17,
        //     "name": "Mycat",
        //     "time": "4:02 AM"
        // }, {
        //     "id": 18,
        //     "name": "Muxo",
        //     "time": "7:28 PM"
        // }, {
        //     "id": 19,
        //     "name": "Buzzdog",
        //     "time": "4:54 PM"
        // }, {
        //     "id": 20,
        //     "name": "Bubblemix",
        //     "time": "4:58 PM"
        // }, {
        //     "id": 21,
        //     "name": "Dabfeed",
        //     "time": "10:40 PM"
        // }, {
        //     "id": 22,
        //     "name": "Voomm",
        //     "time": "11:58 PM"
        // }];
        // this.setState({lessons});

    }

    render() {
        var video = this.state.video;
        var date = "";
        if (video) {
            date = "Objavljen: " + video.published.substring(0, 10);
        }

        return (
            <div>
                <Title date={date} videoTitle={video.title}/>
                <Video id={video.id} url={video.url} thumbnail={video.thumbnailLarge}
                       description={video.description}/>
                <LessonContent lessons={this.state.lessons}/>
            </div>
        );
    }
}