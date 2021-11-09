
import './App.css';

import EventBind from './components/EventBind';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';



function App() {
  return (
    <div className="App">

      <UserGreeting/>
      <ParentComponent/>
      <EventBind/>
      <NameList/>

    </div>
  );
}

export default App;
