import {useReducer} from "react"
import './App.css';



function reducer(state,action){
  switch(action.type){
    case 'increment':
      return state+1 ;
      case 'decrement':
        return state-1;
        default:
          throw new Error();
  }

}
function App() {

  const [number, dispatch] = useReducer(reducer,0)
  return (
    <div className="App">
     <h1>Count : {number}</h1>
     <button className="btn" onClick={() => dispatch({type:'increment'})}>Increment +</button><br></br><br></br>
     <button className="btn" onClick={()=>dispatch({type:'decrement'})}>Decrement -</button>
    </div>
  );
}

export default App;
