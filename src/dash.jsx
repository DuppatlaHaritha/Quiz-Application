import React, { useState } from "react";
import "./pyth.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import pyth from "./pyth.css" 
import Os from "./os";
import ResponsiveAppBar from "./Appbar";
//import { BrowserRouter as Router, Switch, 
//    Route, Redirect, Navigate,} from "react-router-dom";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function DashBoard( add,setAdd){
    //const navigate = useNavigate()
    const [qui, setQui] = useState(true);
    const [subj,setSubj] = useState("");
    let sub;
    const handlesubos = () => {
        setSubj("OS")
        setQui(false)
        
    }
    const handlesubds = () => {
        setSubj("DS")
        setQui(false)
        
    }
    const handlesubpps = () => {
        setSubj("PPS")
        setQui(false)
        
    }
    const handlesubml = () => {
        setSubj("ML")
        setQui(false)
        
    }
    const handlesubai = () => {
        setSubj("AI")
        setQui(false)
        
    }
    const handlesubcn = () => {
        setSubj("CN")
        setQui(false)
        
    }
    const handlesubdms = () => {
        setSubj("DMS")
        setQui(false)
        
    }
    const handlesubacd = () => {
        setSubj("CD")
        setQui(false)
        
    }
    const handlesubcoa = () => {
        setSubj("COA")
        setQui(false)
        
    }
    const handlesuboop = () => {
        setSubj("OOP")
        setQui(false)
        
    }
    const handlesubdbms = () => {
        sub="DBMS"
        setQui(false)
        
    }
    const handlesubcg = () => {
        setSubj("CG")
        setQui(false)
        
    }
    const handlesubdaa = () => {
        setSubj("DAA")
        setQui(false)
        
    }
    const handlesubwt = () => {
        setSubj("WT")
        setQui(false)
        
    }
    const handlesubflat = () => {
        setSubj("FLAT")
        setQui(false)
        
    }
    const handlesubse = () => {
        setSubj("SE")
        setQui(false)
    }
        
    const handlesubda = () => {
        setSubj("DA")
        setQui(false)
        
    }
    const handlesubacns = () => {
        setSubj("CNS")
        setQui(false)
        
    }


    return(
        <>
        <div className='fixed-top'><ResponsiveAppBar/></div>
          {qui ? (
            <div className="quizin wrapper style={'padding-left:20px'}">
                <div className="container cont ">
                    <div className="row subjects fixed mr-20">
                        
                        <div className="col-sm-12 col-lg-3 p-5 m-3 bg-primary text-white subject python" onClick={handlesubpps} >
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a className="text-white text-decoration-none">Programming for problem solving</a>
                            </Link>
                        </div>
                            
                    
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-secondary text-white subject dms" onClick={handlesubdms}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a className="text-white text-decoration-none">Discete Mathematical Structures</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-success text-white subject cd" onClick={handlesubacd}>
                            <Link to="" style={{ textDecoration: 'none' }}>  
                              <a href="#" className="text-white text-decoration-none">Compiler Design</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-info text-white subject ds" onClick={handlesubds} >
                            <Link to="" style={{ textDecoration: 'none'} }>
                              <a href="#" className="text-white text-decoration-none">Data Structures</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-danger text-white subject coa" onClick={handlesubcoa}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Computer Organization & Architecture</a>
                              </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject os" value="Os" onClick={handlesubos}>
                            <Link to="" style={{ textDecoration: 'none' }} >
                              <a href="#" className="text-white text-decoration-none">Operating System</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject oop" onClick={handlesuboop}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Object Oriented Programming</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject dbms" onClick={handlesubdbms}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Database Management System</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cg" onClick={handlesubcg}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Computer Graphics</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject daa" onClick={handlesubdaa}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Design And Analysis of Algorithms</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cn" onClick={handlesubcn}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Computer Network</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject wt" onClick={handlesubwt}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Web Technologies</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject flat" onClick={handlesubflat}>
                            <Link to="/DS" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Formal Languages & Automata Theory</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ml" onClick={handlesubml}>
                            <Link to="/ML" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Machine Learning</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject se" onClick={handlesubse}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#" className="text-white text-decoration-none">Software Engineering</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject da" onClick={handlesubda}>
                            <Link  style={{ textDecoration: 'none' }}>
                              <a href="#" className="text-white text-decoration-none">Data Analytics</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject ai" onClick={handlesubai}>
                            <Link to="" style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Artifical Intelligence</a>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-xl-3 p-5 m-3 bg-dark text-white subject cns" onClick={handlesubacns}>
                            <Link  style={{ textDecoration: 'none' }}>
                               <a href="#php" className="text-white text-decoration-none">Cryptography And Network Security</a>
                            </Link>
                        </div>
                    </div>
            </div>  </div>):
            (
                <Os
                  subj={subj} 
                />
            )}
        </>
    )
    
}
