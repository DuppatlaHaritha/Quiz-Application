import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Daa(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:" When does page fault occur?",
            answers:[
                {
                    text:"The page is present in memory",
                    correct:false,
                },
                {
                    text:"The deadlock occurs",
                    correct:false,
                },
                {
                    text:"The page does not present in memory",
                    correct:true,
                },
                {
                    text:"The buffering occurs",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which type of Programming does Python support?",
            answers:[
                {
                    text:"object-oriented programming",
                    correct:false,
                },
                {
                    text:"structured programming",
                    correct:false,
                },
                {
                    text:"functional programming",
                    correct:false,
                },
                {
                    text:"all of the mentioned",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Is Python case sensitive when dealing with identifiers?",
            answers:[
                {
                    text:"no",
                    correct:false,
                },
                {
                    text:"machine dependent",
                    correct:false,
                },
                {
                    text:"yes",
                    correct:true,
                },
                {
                    text:"none of the mentioned",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is used to define a block of code in Python language?",
            answers:[
                {
                    text:"Brackets",
                    correct:false,
                },
                {
                    text:"Indentation",
                    correct:false,
                },
                {
                    text:"Key",
                    correct:false,
                },
                {
                    text:"All of the mentioned",
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
export default Daa;