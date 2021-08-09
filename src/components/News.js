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
                        New World currently got pushed back until September 28
                    </div>
                </div>
            </div>
        );
    }
}

export default News;