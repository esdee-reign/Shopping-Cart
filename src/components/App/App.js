import './App.css';
import Homepage from '../Homepage/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faCartPlus)

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
