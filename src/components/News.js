import React, {Component} from 'react';
import '../css/News.css'

class News extends Component {
    render() {
        return (
            <div className='mainNewsContainer'>
                <div className='newsTitle'>
                    News
                </div>
                <div className='newsInfoContainer'>
                    <div className='newsInfo'>
                        New World has been finally released! We are actively looking for new members to join, so if
                        interested join the discord and say hello!
                    </div>
                </div>
            </div>
        );
    }
}

export default News;