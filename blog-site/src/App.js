import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Write/>

    </div>
  );
}

export default App;
