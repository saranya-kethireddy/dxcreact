
import './App.css';

import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';



function App() {
  return (
    <div className="App">

      <ParentComponent/>
      <EventBind/>

    </div>
  );
}

export default App;
