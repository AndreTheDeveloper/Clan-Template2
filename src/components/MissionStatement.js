import React, {Component} from 'react';
import "../css/MissionStatement.css"

class MissionStatement extends Component {
    render() {
        return (
            <div className='mainMissionStatementContainer'>
                <div className='missionStatementTitle'>
                    Mission Statement
                </div>
                <div className='missionStatementContainer'>
                    <div className='missionStatement'>
                        "To clear content and fight fires"
                    </div>
                </div>
            </div>
        );
    }
}

export default MissionStatement;