import React, {Component} from 'react';
import '../css/About.css'

class About extends Component {
    render() {
        return (
            <div className='aboutContainer'>
                <div className='aboutTitle'>About</div>
                <div className='aboutInfoContainer'>
                <div className='aboutInfo'>
                    We are a new company with a simple goal. To expand. FireSquad Legion is a company within
                    New World that is aligned with the Syndicate faction. Though we primarily function within
                    New World, we will be expanding into other team based games in the future. We are based in
                    North America with players from both Canada and the USA and we don't discriminate!
                    (except for DownNDirty, he will judge you if you aren't from the US ;) ).
                    We are always open to new ideas and concepts as we are a new company so don't be shy.
                    FireSquad Legion is a company that is interested in a variety of activities like crafting,
                    dungeon running, and Syndicate grinding. We are also looking to expand into the PvP
                    scenario with scheduled events as wars between factions and other PvP events occur in the
                    future. Because PvP events in New World heavily rely on teamwork and coordination we need
                    you! However, if you are tired of playing alone and want a friendly buddy or two to help
                    you on your journey just click that discord button and say hello! I promise we don't bite.
                </div>
                </div>
            </div>
        );
    }
}

export default About;