
import './App.css';

import EventBind from './components/EventBind';
import NameList from './components/NameList';
import ParentComponent from './components/ParentComponent';
import Table from './components/Table';
import UserGreeting from './components/UserGreeting';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'



function App() {
  return (
    <div className="App">

      <h1 className = {styles.success}>success</h1>
      <h1 className = 'error'>error</h1>

      <Inline/>
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
