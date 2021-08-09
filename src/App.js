import Header from "./components/Header";
import MainTitle from "./components/MainTitle";
import Slogans from "./components/Slogans";
import About from "./components/About";
import News from "./components/News";
import Events from "./components/Events";
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
    return (
        <Router>
            <div>
                <Header />
                <MainTitle />
                <Slogans />
                <div id='about'>
                    <About />
                </div>
                <div id='news'>
                    <News  />
                </div>
                <div id="events">
                    <Events />
                </div>
            </div>
        </Router>
    );
}

export default App;