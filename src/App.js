
import './App.css';


import './appStyles.css'
import PortalDemo from './components/portals/PortalDemo';

import FrParentInput from './components/refs/FrParentInput';
import Input from './components/refs/Input';



function App() {
  return (
    <div className="App">
     <FrParentInput/>
     <PortalDemo/>

    </div>
  );
}

export default App;
