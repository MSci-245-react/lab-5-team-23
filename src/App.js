import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter.js';
import IncrementByAmount from './features/counter/incrementByAmount.js';

function App() {
    return (
      <div style={{ margin: '10px' }}>
        <Counter/>
        <IncrementByAmount/>

      </div>
  );
}

export default App;
