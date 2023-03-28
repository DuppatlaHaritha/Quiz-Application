//import { AppBar } from '@mui/material';
import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Greet from './Greet';
//import Home from './Home';
//import Pyth from './pyth';
//import Trivia from './tivia';
//import Tem from './temp';
import ResponsiveAppBar from './Appbar';
import Login from './login';
import DashBoard from './dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Hey from './component/Play';
import SignUp from './sp ';
import Os from './os';
import Cg from './Cg';
import Cn from './Cn';
import Coa from './Coa';
import Da from './Da';
import Daa from './Daa';
import Dms from './Dms';
//import Trivia from './Tivia ';
import Cns from './Cns';
import Dbms from './Dbms';
import Ds from './Ds';
import Flat from './Flat';
import Ml from './Ml';
import Oop from './Oop';
import Se from './Se';
import Cd from './Cd';
import Pps from './pps';
import Wt from './Wt';
import Ai from './Ai';
import Subject from './subject';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Scorecard from './scorecard';


class App extends Component{
  render(){
    return (
      <>
        {/* <div className='fixed-top'><ResponsiveAppBar/></div> */}
        <BrowserRouter>
          <Routes>
             
             <Route path='/' element={<SignUp/>} />
             <Route path='/subject' element={<Subject/>}/>
             <Route path='/OS' element={<Os/>} />
             <Route path='/home' element={<DashBoard/>} />
             <Route path='/CG' element={<Cg/>} />
             <Route path='/CN' element={<Cn/>} />
             <Route path='/CNS' element={<Cns/>} />
             <Route path='/COA' element={<Coa/>} />
             <Route path='/WT' element={<Wt/>} />
             <Route path='/Ds' element={<Ds/>} />
             <Route path='/CD' element={<Cd/>} />
             <Route path='/DA' element={<Da/>} />
             <Route path='/DAA' element={<Daa/>} />
             <Route path='/DBMS' element={<Dbms/>} />
             <Route path='/signup' element={<SignUp/>} />
             <Route path='/FLAT' element={<Flat/>} />
             <Route path='/ML' element={<Ml/>} />
             <Route path='/AI' element={<Ai/>} />
             <Route path='/OOP' element={<Oop/>} />
             <Route path='/PPS' element={<Pps/>} />
             <Route path='/Dms' element={<Dms/>} />
             <Route path='/SE' element={<Se/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/scorecard' element={<Scorecard/>} />

          </Routes>
      
      
        </BrowserRouter>
        

       
      </>

    );
  }
}

export default App;
