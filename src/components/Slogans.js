import React, {Component} from 'react';
import '../css/Slogans.css';
import united from '../images/united.png'
import atmosphere from '../images/atmosphere.png'
import inviting from '../images/inviting.png'

class Slogans extends Component {
    render() {
        return (

            <div className='testimonialMainContainer'>
                <div className='united'>
                    <div className='infoContainer'>
                        <img src={united} alt='United' className='logos'/>
                        <div className='titles'>United</div>
                        <div className='desc'>
                            We look after each other and fight together as one
                        </div>
                    </div>
                </div>
                <div className='atmosphere'>
                    <div className='infoContainer'>
                        <img src={atmosphere} alt='United' className='logos'/>
                            <div className='titles'>Atmosphere</div>
                        <div className='desc'>
                        We are positive, encouraging and competitive
                    </div>
                    </div>
                </div>
                <div className='inviting'>
                    <div className='infoContainer'>
                        <img src={inviting} alt='United' className='logos'/>
                        <div className='titles'>Inviting</div>
                        <div className='desc'>
                            Everyone is welcome and invited
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slogans;