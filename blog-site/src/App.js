import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Settings/>

    </div>
  );
}

export default App;
