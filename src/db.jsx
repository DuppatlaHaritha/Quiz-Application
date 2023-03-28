import React from "react";
import "./pyth.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Pyth from "./pyth";
//import Os from "./os";
//import { BrowserRouter as Router, Switch, 
//    Route, Redirect, Navigate,} from "react-router-dom";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

function DashBoard(){
    //const navigate = useNavigate()


    return(
        <>
            <div className="quizin wrapper">
                <div className="container cont ">
                    <div className="row subjects fixed">
                        
                        <div className="col-sm-12 col-lg-3 p-5 m-sm-3 bg-primary text-white subject pps" >
                            <Link to="/PPS" style={{ textDecoration: 'none' }}>
                              <a className="text-white text-decoration-none">Programming for problem solving</a>
                            </Link>
                        </div>
                            
                    
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-secondary text-white subject dms">
                            <Link to="/Dms" style={{ textDecoration: 'none' }}>
                              <a className="text-white text-decoration-none">Discrete Mathematical Structure</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-success text-white subject cd">
                            <Link to="/CD" style={{ textDecoration: 'none' }}>  
                              <a  className="text-white text-decoration-none">Compiler Design</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-info text-white subject ds" >
                            <Link to="/Ds" style={{ textDecoration: 'none'} }>
                              <a href="#" className="text-white text-decoration-none"></a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-danger text-white subject coa">
                            <Link to="/COA" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Computer Organization & Architecture</a>
                              </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject os">
                            <Link to="/OS" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Operating System</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject oop">
                            <Link to="/OOP" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Object Oriented Programming</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject dbms">
                            <Link to="/OS" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Database Management System</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cg">
                            <Link to="/CG" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Computer Graphics</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject daa">
                            <Link to="/OS" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Design And Analysis of Algorithms</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cn">
                            <Link to="/CN" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Computer Network</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject wt">
                            <Link to="/WT" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Web Technologies</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject flat">
                            <Link to="/FLAT" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Formal Languages & Automata Theory</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ml">
                            <Link to="/ML" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Machine Learning</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject se">
                            <Link to="/SE" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Software Engineering</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject da">
                            <Link to="/DA" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Data Analytics</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ai">
                            <Link to="/AI" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Artifical Intelligence</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cns">
                            <Link to="/CNS" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Cryptography And Network Security</a>
                            </Link>
                        </div>
                    </div>
            </div>  </div>
        </>
    )
    
}
export default DashBoard;