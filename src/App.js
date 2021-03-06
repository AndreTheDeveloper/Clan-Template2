import Header from "./components/Header";
import MainTitle from "./components/MainTitle";
import MissionStatement from "./components/MissionStatement";
import Slogans from "./components/Slogans";
import About from "./components/About";
import News from "./components/News";
import Events from "./components/Events";



function App() {
    return (
            <div>
                <Header />
                <MainTitle />
                <Slogans />
                <MissionStatement />
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
    );
}

export default App;