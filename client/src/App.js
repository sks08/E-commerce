import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
   // Any package we have to import in app.js so that we can use in  any child components. 
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
function App() {
  return (
    <div className="App">
     
     <Navbar/>
     
     <BrowserRouter>
        
        <Route path='/' component={Homescreen} exact/>
        <Route path='/product/:id' component={Productdescscreen}/>

      </BrowserRouter>
     
        
    </div>
  );
}

export default App;
