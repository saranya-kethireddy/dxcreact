
import './App.css';

import EventBind from './components/EventBind';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Table from './components/Table';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';



function App() {
  return (
    <div className="App">

      
      <Stylesheet enabled = {true}/>
      <Table/>

      <UserGreeting/>
      <ParentComponent/>
      <EventBind/>
      <NameList/>

    </div>
  );
}

export default App;
