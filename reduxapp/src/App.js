import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
//useselector humeri current state ko get kr ke dega
import { increase, decrease } from './Action/Index';
import { increment, decrement } from './reduxToolKit/CounterSlice';

//ye code purani redux ka h

function App() {
  //state.Inc_dec se mai initial state get krahi hu
  // const myState = useSelector((state) => state.Inc_dec);
  // const dispatch = useDispatch()

  const myState = useSelector((state) => state.Counter.count);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Welcome To React Redux</h1>

      {/* <input type='text' value={myState} /><br /><br />
      <button onClick={() => dispatch(increase())} className='btn btn-primary'>Add</button>
      <button onClick={() => dispatch(decrease())} className='btn btn-danger'>Min</button> */}




      <h1>REDUX TOOL KIT</h1>
      <input type='text' value={myState} /><br/><br/>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>


    </div>
  );


  
}

export default App;
