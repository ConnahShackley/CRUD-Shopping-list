// IMPORTING USE STATE FROM RECT
import './App.css';
import { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([])
  const [inputText, setInputText] = useState("")


// \\\ ADD HANDLER FUNCTION - DUPLICATING ARRAY ///
  const addHandler = () => {
    if  (inputText == "") {
      alert("Please insert some text")
    } else {

    let storedItems =[ ...items]
    storedItems.push(inputText)
    setItems(storedItems)

  }

// \\\REMOVE HANDLER FUNCTION ///
  }
  const removeHandler = (index) => {
    let storedItems = [...items]
    // splice is used to modify the contents of an array by removing or adding new elements.
    storedItems.splice(index,1)
    setItems(storedItems)
  }

// \\\ USER VISUALS ///
    return (
    <div className = "all">
    <div className = "header" >
    <h1>WEEK 6 TO-DO LIST!</h1>
    </div>

    {items.map((item, index)=> {
      return ( 
        <div class = "box">
          <h1 key={index}>{item} </h1>
          <button className = "button" onClick = {() => removeHandler(index)}>Delete</button>
          <button className = "button" onClick = {() => removeHandler(index)}>Done</button>
  
        </div>
      )
    })}

      <div className = "box">
     <button className = "button" onClick = { addHandler }>Add the item to your list</button>
     </div>
     <div className = "box">
        { <p> Insert some text into the box below to add an item to your list...</p>}
        <input onChange = {(event) => setInputText(event.target.value) } />
     </div>
  </div>
 ) 
}
export default App


























































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


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

