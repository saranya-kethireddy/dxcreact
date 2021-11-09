import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick';



function App() {
  return (
    <div className="App">

      <ClassClick/>
      <FunctionClick/>
      <Counter />
      <Message />
      <Greet name="saranya" college="IIT">
        <p> this is the children property</p>
      </Greet>
      <Greet name="Amar" college="Oxford">
        <button>click me</button>
      </Greet>
      <Greet />



      <Welcome name="amar" alias="dasuru" />

    </div>
  );
}

export default App;
