import logo from './logo.svg';

import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>

    </div>
  );
}

export default App;
