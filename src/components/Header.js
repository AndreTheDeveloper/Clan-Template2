import React, {Component} from 'react';
import '../css/Header.css'


class Header extends Component {
    render() {
        return (
            <div className='headerTextContainer'>
                <div className='headerText'>
                    <a href='#about'>About</a>
                </div>
                <div className='headerText'>
                    <a href='#news'>News</a>
                </div>
                <div className='headerText'>
                    <a href='#events' >Events</a>
                </div>
                <div className='headerText'>
                    <a href='https://discord.gg/PnHUt9ghpZ'> Discord </a>
                </div>
            </div>
        );
    }
}

export default Header;