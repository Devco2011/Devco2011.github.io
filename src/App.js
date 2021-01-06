import logo from './logo.svg';
import { NavBar } from './nav/Nav'
import { Header } from './main/Header'
import { About } from './main/About'


function App() {
  return (
    <div className="App">

      <NavBar />
      <Header />
      <About />
      <About />


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <body>
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </body>
      </header> */}
    </div>
  );
}

export default App;
