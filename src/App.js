import {useEffect,Fragment} from 'react';
import './App.css';
 import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import Addbtn from './components/layout/Addbtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModel from './components/techs/AddTechModel';
import TechListModel from './components/techs/TechListModel';
import store from './store';
import {Provider} from 'react-redux';




const App = () => {
 
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (

    <Provider store={store}>
    <Fragment>
    <Searchbar/>
    <div className='container'>
    <Addbtn/>
    <AddLogModal/>
    <EditLogModal/>
    <AddTechModel/>
    <TechListModel/>
    <Logs/>
    </div>
    </Fragment>
    </Provider>
  );
}

export default App;
