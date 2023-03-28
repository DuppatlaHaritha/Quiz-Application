import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Wt(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:" What are variables used in JavaScript programs",
            answers:[
                {
                    text:"Varying randomly",
                    correct:false,
                },
                {
                    text:"Storing numbers, dates, and other values",
                    correct:true,
                },
                {
                    text:"Used as header files",
                    correct:false,
                },
                {
                    text:"none of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Identify the incorrect HTML tag among the following?",
            answers:[
                {
                    text:"< input>",
                    correct:false,
                },
                {
                    text:"<select>",
                    correct:false,
                },
                {
                    text:"< list>",
                    correct:true,
                },
                {
                    text:"< textarea>",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"A website is a ___  cookie.",
            answers:[
                {
                    text:"volatile",
                    correct:false,
                },
                {
                    text:"transient",
                    correct:true,
                },
                {
                    text:"in transient",
                    correct:false,
                },
                {
                    text:"non-volatile",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"How many sizes of headers are available in HTML by default?",
            answers:[
                {
                    text:"5",
                    correct:false,
                },
                {
                    text:"1",
                    correct:false,
                },
                {
                    text:"3",
                    correct:false,
                },
                {
                    text:"6",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Which attribute is used to provide a unique name to an HTML element?",
            answers:[
                {
                    text:"id",
                    correct:true,
                },
                {
                    text:"class",
                    correct:false,
                },
                {
                    text:"type",
                    correct:false,
                },
                {
                    text:"None",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Which of the following properties is used to change the font of text?",
            answers:[
                {
                    text:"font-family",
                    correct:true,
                },
                {
                    text:"font-size",
                    correct:false,
                },
                {
                    text:"text-align",
                    correct:false,
                },
                {
                    text:"None",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is Document Object Model(DOM)?",
            answers:[
                {
                    text:"a coding style",
                    correct:false,
                },
                {
                    text:"Specification",
                    correct:false,
                },
                {
                    text:"a parser",
                    correct:true,
                },
                {
                    text:"All of the mentioned",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Identify the total standard color names that HTML supports.",
            answers:[
                {
                    text:"30",
                    correct:false,
                },
                {
                    text:"70",
                    correct:false,
                },
                {
                    text:"140",
                    correct:false,
                },
                {
                    text:"120",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Identify the tag which is used to define a concept in HTML.",
            answers:[
                {
                    text:"<p>",
                    correct:false,
                },
                {
                    text:"<def>",
                    correct:true,
                },
                {
                    text:"<marquee>",
                    correct:false,
                },
                {
                    text:"< pre>",
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
export default Wt;