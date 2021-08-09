import React, {Component} from 'react';
import '../css/Events.css'

class Events extends Component {
    render() {
        return (
            <div className='mainEventsContainer'>
                <div className='eventsTitle'>Events</div>
                <div className='events'>
                    <div className='eventsGridContainer'>
                        <div className='headings eventType'>Event Type</div>
                        <div className='headings eventDate'>Event Date</div>
                        <div className='headings eventLocation'>Event Location</div>
                    </div>
                    <div className='eventsGridContainer'>
                        <div className='eventInfo eventType'>Game Launch</div>
                        <div className='eventInfo eventDate'>Sept 28, 2021</div>
                        <div className='eventInfo eventLocation'>Everywhere</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;