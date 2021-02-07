import { NavBar } from './nav/Nav'
import { Header } from './main/Header'
import { About } from './main/About'
import { Process } from './main/Process'
import { Work } from './main/Work'
import { Resume } from './main/Resume'

export const Home = () => {
    return (
        <div className="App">

            <NavBar />
            <Header />
            <About />
            <Process />
            <Work />
            <Resume />

        </div>
    );
}