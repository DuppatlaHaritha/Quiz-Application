import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Ai(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"What is the main aim of Artificial Intelligence?",
            answers:[
                {
                    text:"To solve real-world issues",
                    correct:false,
                },
                {
                    text:" To explain different sorts of intelligence",
                    correct:true,
                },
                {
                    text:"To solve artificial problems",
                    correct:false,
                },
                {
                    text:"To obtain information about scientific causes",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:" __ is the informed search method.",
            answers:[
                {
                    text:"Memory Bound Heuristic Search",
                    correct:true,
                },
                {
                    text:"A * Search",
                    correct:false,
                },
                {
                    text:"Best First Search ",
                    correct:false,
                },
                {
                    text:"All of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"__ is a component of AI. ",
            answers:[
                {
                    text:" Training",
                    correct:false,
                },
                {
                    text:"Designing",
                    correct:false,
                },
                {
                    text:" Learning ",
                    correct:true,
                },
                {
                    text:"Puzzling",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"__ are the compositions for Artificial Intelligence Agents.",
            answers:[
                {
                    text:"Only Program",
                    correct:false,
                },
                {
                    text:"Only Architecture",
                    correct:false,
                },
                {
                    text:"Both Program and Architecture",
                    correct:true,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"__ environment is considered strategic. ",
            answers:[
                {
                    text:"Partial ",
                    correct:true,
                },
                {
                    text:"Stochastic",
                    correct:false,
                },
                {
                    text:"Deterministic",
                    correct:false,
                },
                {
                    text:"Rational",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Single propositional symbol created by…",
            answers:[
                {
                    text:"Composition sentences",
                    correct:false,
                },
                {
                    text:" Atomic sentences",
                    correct:true,
                },
                {
                    text:"Complex sentences",
                    correct:false,
                },
                {
                    text:" None of these",           
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Informed search strategy also called…",
            answers:[
                {
                    text:" Simple search",
                    correct:false,
                },
                {
                    text:" Online search",
                    correct:false,
                },
                {
                    text:"Heuristic search",
                    correct:true,
                },
                {
                    text:"None of these",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Factoring means….",
            answers:[
                {
                    text:" Removal of redundant literal",
                    correct:false,
                },
                {
                    text:" Removal of redundant variable",
                    correct:true,
                },
                {
                    text:" Addition of redundant variable",
                    correct:false,
                },
                {
                    text:"Addition of redundant literal",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Graphic interfaces were first used in a Xerox product commonly known as……",
            answers:[
                {
                    text:"InterLISP",
                    correct:false,
                },
                {
                    text:" Ethernet",
                    correct:false,
                },
                {
                    text:" Smalltalk",
                    correct:true,
                },
                {
                    text:"ZetaLISP",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is the technique developed by A.M. Turing for deciding whether a computer could or could not express artificial Intelligence.",
            answers:[
                {
                    text:"Logarithm ",
                    correct:false,
                },
                {
                    text:"Algorithm",
                    correct:false,
                },
                {
                    text:"Boolean Algebra",
                    correct:false,
                },
                {
                    text:"Turing Test",
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
                              src="https://cdn.lordicon.com/ivhjpjsw.json">
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
export default Ai;