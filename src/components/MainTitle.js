import React, {Component} from 'react';
import '../css/MainTitle.css'
import MainImage from '../background/fslbackground1080p.png'


class MainTitle extends Component {
    render() {
        return (
            <div className='mainTitleContainer'>
                <img src={MainImage} alt='FSL background'/>
                <div className='titleTextContainer'>
                    <div className='titleText'>
                        FireSquad Legion
                    </div>
                </div>
            </div>
        );
    }
}

export default MainTitle;