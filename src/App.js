
import './App.css';

import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';



function App() {
  return (
    <div className="App">

      <UserGreeting/>
      <ParentComponent/>
      <EventBind/>

    </div>
  );
}

export default App;
