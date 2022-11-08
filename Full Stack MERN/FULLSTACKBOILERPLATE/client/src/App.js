import axios from 'axios'
import './App.css';

function App() {

axios.get("http://localhost:8000/api/books/test")
  .then(res => console.log(res))
  .catch(err => console.error(err))





  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
