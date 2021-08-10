import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greet';
import {Named} from './components/Named';
import Welcome from './components/Welcome';
import FunctionOne from './components/FunctionOne';
import ClassOne from './components/ClassOne';

function App() {
  return (
    <div className="App">
      <h1>Welcome to ReactJS</h1>
      <Greeting />
      <Greeting />
      <Greeting />
      <Named />
      <Welcome />
      <FunctionOne />
      <ClassOne />
    </div>
  );
}

export default App;
