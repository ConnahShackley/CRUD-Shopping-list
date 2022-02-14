import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;


// import './App.css'

// const App = () => {
//   return (
//     <div className='main'>
//       <h1>leons sight</h1>
//       <h2>welcome</h2>
//       <Movies favMovie="fellowship of the ring" released="2001" genre="fantasy" />
//       <Movies favMovie="the two towers" released="2002" genre="fantasy" />
//       <Movies favMovie="blade runner" released="1982" genre="sci-fi" /> 
//     </div>
//   )
// }

// const Movies = (props) => {
//   return (
//     <div className='movie'>
//       <h3>a movie i like is {props.favMovie}</h3>
//       <h4>this was released in {props.released}</h4>
//       <Genre genre={props.genre}/>
//     </div>
//   )
// }

// const Genre = (props) => {
//   return <p className='text'>genre: {props.genre}</p>
// }

