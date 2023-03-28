import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar ";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from "@mui/material";
import Subject from "./subject";
//import Options from "./subsub";
import { LaptopWindows } from "@mui/icons-material";

function Os({subj}){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    const [option, setOption] = useState(true);
    
    let data;
    //localStorage.setItem("data",[JSON.stringify(data)]);
    console.log(subj);
    
    switch(subj){
        case "OS":
            data=JSON.parse(localStorage.getItem("Osqd"));
            console.log(data);
            break;
        case "PPS":
            data=JSON.parse(localStorage.getItem("ppsque"));
            console.log(data);
            break;
        case "DMS":
            data=JSON.parse(localStorage.getItem("Dmsque"));
            console.log(data);
            break;
        case "CD":
            data=JSON.parse(localStorage.getItem("Cdque"));
            console.log(data);
            break;
        case "DS":
            data=JSON.parse(localStorage.getItem("Dsque"));
            console.log(data);
            break;
        case "COA":
            data=JSON.parse(localStorage.getItem("Coaque"));
            console.log(data);
            break;
        case "CPP":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "OOP":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "DBMS":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "CG":
            data=JSON.parse(localStorage.getItem("Cgque"));
            console.log(data);
            break;
        case "DAA":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "CN":
            data=JSON.parse(localStorage.getItem("Cnque"));
            console.log(data);
            break;
        case "WT":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "FLAT":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "ML":
            data=JSON.parse(localStorage.getItem("Mlque"));
            console.log(data);
            break;
        case "SE":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "DA":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
        case "AI":
            data=JSON.parse(localStorage.getItem("Aique"));
            console.log(data);
            break;
        case "CNS":
            data=JSON.parse(localStorage.getItem(""));
            console.log(data);
            break;
    }
    
    
    
    
    return(
      
        <>
          
          <div className="pyth">
            <div className="pyth">
                <div className="main">
                    {stop ? (
                        <>
                           <div className="result">
                              <lord-icon
                              src="https://cdn.lordicon.com/ivhjpjsw.json" 
                              trigger="loop"
                              style={{width:"150px",height:"150px"}}>

                              </lord-icon>
                              <h1 className="endText">Your Score is : {score} outof {nQuestions}</h1>
                              <div className="homeb">
                                <div>
                                    <lord-icon src="https://cdn.lordicon.com/gmzxduhd.json" ></lord-icon>
                                    <Link to="/home" style={{ textDecoration: 'none' }}>Home</Link>
                                    
                                </div>
                                <div>
                                    
                                </div>
                              </div>
                              <div><Link to="/OS" style={{ textDecoration: 'none' }}>Re Play</Link></div>
                           </div>
                       </>
                    ) : (
                      <>       
                        <div className="top ">
                            <div className="timer">
                                <Timer
                                data={data}
                                setStop={setStop}
                                questionNumber={questionNumber} 
                                nQuestions={nQuestions}
                                setNquestions={setNquestions}
                                setQuestionNumber={setQuestionNumber}
                                 />
                            </div>
                            <div className="quit" onClick={() => setStop(true)}>
                                Quit
                            </div>
            
                        </div>
                        <div className="bottom fixed">
                            <Trivia
                              data={data}
                              questioNumber={questionNumber}
                              setStop={setStop}
                              setScore={setScore}
                              score={score}
                              nQuestions={nQuestions}
                              setNquestions={setNquestions}
                              //question={question}
                              setQuestionNumber={setQuestionNumber}
                            />
                     
                        </div>
                    </>
                        )}
                </div>
            </div>
            </div>
        </>
        
         
    )
}
export default Os;