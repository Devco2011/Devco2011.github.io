import { NavBar } from './nav/Nav'
import { Header } from './main/Header'
import { About } from './main/About'
import { Process } from './main/Process'
import { Work } from './main/Work'

export const Home = () => {
    return (
        <div className="App">

            <NavBar />
            <Header />
            <About />
            <Process />
            <Work />

        </div>
    );
}