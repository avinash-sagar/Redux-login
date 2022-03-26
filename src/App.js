
import './App.css';
import Login from './components/Login';
import {useSelector} from "react-redux"
import { selectUser } from './redux/userSlice';
import Logout from './components/Logout';
function App() {

  const user = useSelector(selectUser)
  return (
    <div className="App">
      {
        user ? <Logout/> : <Login/> 
      }
     
        
    </div>
  );
}

export default App;
