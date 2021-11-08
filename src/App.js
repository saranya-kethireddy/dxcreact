import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

 

function App() {
  return (
    <div className="App">
      <Greet name = "saranya"  college = "IIT">
      <p> this is the children property</p>
    </Greet>
    <Greet name = "Amar" college = "Oxford"/>
    <Greet name ="reddy"/>

    <Welcome/>

    </div>
  );
}

export default App;
