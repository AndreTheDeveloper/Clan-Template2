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
                        New Worlds second beta is from September 9 until September 12 and will be
                        open to everyone. Applications for the beta will be available on September 8 via
                        steam on the game's page.
                    </div>
                </div>
            </div>
        );
    }
}

export default News;