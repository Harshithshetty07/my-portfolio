
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className=" container-fluid ">
      <div className='row'>
        <div className='side__one col-2 w-25 '>
        <SideBar/>
        </div>
        <div className='col '>
        <DashBoard/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
