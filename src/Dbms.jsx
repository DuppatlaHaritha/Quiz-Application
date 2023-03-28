import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Dbms(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"The minimal set of super key is called",
            answers:[
                {
                    text:" Primary key",
                    correct:false,
                },
                {
                    text:"Secondary key",
                    correct:false,
                },
                {
                    text:"Candidate key",
                    correct:true,
                },
                {
                    text:"Foreign key",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The model for a ___ resembles the hierarchical model in many respects.",
            answers:[
                {
                    text:"Network database",
                    correct:true,
                },
                {
                    text:" Relational database",
                    correct:false,
                },
                {
                    text:" Distributed database",
                    correct:false,
                },
                {
                    text:"Hierarchical database",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"In SQL, which command is used to remove a stored function from the database?",
            answers:[
                {
                    text:"REMOVE FUNCTION",
                    correct:false,
                },
                {
                    text:"DELETE FUNCTION",
                    correct:false,
                },
                {
                    text:" DROP FUNCTION",
                    correct:true,
                },
                {
                    text:"ERASE FUNCTION",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"In a relational schema, each tuple is divided into fields called",
            answers:[
                {
                    text:" Relations",
                    correct:false,
                },
                {
                    text:"Domains",
                    correct:true,
                },
                {
                    text:" Queries",
                    correct:false,
                },
                {
                    text:"All of the above",
                    correct:false,
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
                              style={{width:"150px",height:"150px"}}
                              >
                              </lord-icon>
                              <h1 className="endText">Your Score is : {score} outof {nQuestions}</h1>
                              <div className="homeb">
                                <div>
                                    <lord-icon src="https://cdn.lordicon.com/gmzxduhd.json" className="icon"></lord-icon>
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
export default Dbms;