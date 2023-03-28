import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from "@mui/material";

function Os(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"____ is a software development activity that is not a part of software processes.?",
            answers:[
                {
                    text:" Validation",
                    correct:false,
                },
                {
                    text:"Specification",
                    correct:false,
                },
                {
                    text:"Development",
                    correct:false,
                },
                {
                    text:"Dependence",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"CASE stands for",
            answers:[
                {
                    text:"Computer-Aided Software Engineering",
                    correct:true,
                },
                {
                    text:" Control Aided Science and Engineering",
                    correct:false,
                },
                {
                    text:"Cost Aided System Experiments",
                    correct:false,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Attributes of good software is ___?",
            answers:[
                {
                    text:"Development",
                    correct:false,
                },
                {
                    text:"Maintainability & functionality",
                    correct:true,
                },
                {
                    text:"Functionality",
                    correct:false,
                },
                {
                    text:"Maintainability",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"____ software development team has no permanent leader?",
            answers:[
                {
                    text:"Controlled Centralized (CC)",
                    correct:false,
                },
                {
                    text:"Controlled decentralized (CD)",
                    correct:false,
                },
                {
                    text:"Democratic decentralized (DD)",
                    correct:true,
                },
                {
                    text:"None of the mentioned",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"____ is not suitable for accommodating any change?",
            answers:[
                {
                    text:"RAD Model",
                    correct:false,
                },
                {
                    text:" Waterfall Model",
                    correct:true,
                },
                {
                    text:"Build & Fix Model",
                    correct:false,
                },
                {
                    text:"Prototyping Model",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Quality Management is known as ___",
            answers:[
                {
                    text:"SQI",
                    correct:false,
                },
                {
                    text:" SQA",
                    correct:true,
                },
                {
                    text:"SQM",
                    correct:false,
                },
                {
                    text:" SQA and SQM",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"______ is an indirect measure of software development process",
            answers:[
                {
                    text:"Cost",
                    correct:false,
                },
                {
                    text:" Effort Applied",
                    correct:false,
                },
                {
                    text:" Efficiency",
                    correct:true,
                },
                {
                    text:"All of the mentioned",           
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_____ specification is also known as SRS document",
            answers:[
                {
                    text:"white-box",
                    correct:false,
                },
                {
                    text:"grey-box",
                    correct:false,
                },
                {
                    text:" black-box",
                    correct:true,
                },
                {
                    text:"none of the mentioned",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Software Debugging is known as _______",
            answers:[
                {
                    text:"identifying the task to be computerized",
                    correct:false,
                },
                {
                    text:" creating program code",
                    correct:false,
                },
                {
                    text:"creating the algorithm",
                    correct:false,
                },
                {
                    text:"finding and correcting errors in the program code",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"The agile software development model is built based on ____" ,
            answers:[
                {
                    text:"Linear Development",
                    correct:false,
                },
                {
                    text:"Incremental Development",
                    correct:false,
                },
                {
                    text:"Iterative Development",
                    correct:false,
                },
                {
                    text:"Both Incremental and Iterative Development",
                    correct:true,
                },
            ],
            
        },
       
        

        
    ]
    
    
    
    return(

        <>
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
                             
                           </div>
                       </>
                    ) : (
                      <>       
                        <div className="top">
                            <div className="timer">
                                <Timer
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
                        <div className="bottom">
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
        </>
        
         
    )
}
export default Os;