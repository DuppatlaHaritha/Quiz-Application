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

function Dms(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"Power set of empty or Null set has exactly ___ subset.",
            answers:[
                {
                    text:"One",
                    correct:true,
                },
                {
                    text:"Two",
                    correct:false,
                },
                {
                    text:"Zero",
                    correct:false,
                },
                {
                    text:"Three",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"If n(A) = 20 and n(B) = 30 and n(A U B) = 40 then n(A ∩ B) is?",
            answers:[
                {
                    text:"20",
                    correct:false,
                },
                {
                    text:"30",
                    correct:false,
                },
                {
                    text:"40",
                    correct:false,
                },
                {
                    text:"10",
                    correct:true,
                },
            ],
            
        },
        {
        
            question:" The cardinality of the Power set of the set {1, 5, 6} is______",
            answers:[
                {
                    text:"5",
                    correct:false,
                },
                {
                    text:"8",
                    correct:true,
                },
                {
                    text:"6",
                    correct:false,
                },
                {
                    text:"10",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Canonical forms for a boolean expression has ___ types.",
            answers:[
                {
                    text:"Three types",
                    correct:false,
                },
                {
                    text:"Four types",
                    correct:false,
                },
                {
                    text:"Two types",
                    correct:true,
                },
                {
                    text:"Five types",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is the complexity of the bubble sort algorithm?",
            answers:[
                {
                    text:"O(n2)",
                    correct:true,
                },
                {
                    text:"O(n)",
                    correct:false,
                },
                {
                    text:"O(log n)",
                    correct:false,
                },
                {
                    text:"O(n log n)",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"A ____ is an ordered collection of objects",
            answers:[
                {
                    text:"Relation",
                    correct:false,
                },
                {
                    text:"Function",
                    correct:false,
                },
                {
                    text:"Set",
                    correct:true,
                },
                {
                    text:"Proposition",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is the Cartesian product of A = {1, 2} and B = {a, b}?",
            answers:[
                {
                    text:"{(1, a), (1, b), (2, a), (b, b)}",
                    correct:false,
                },
                {
                    text:"{(1, 1), (2, 2), (a, a), (b, b)}",
                    correct:false,
                },
                {
                    text:"{(1, a), (2, a), (1, b), (2, b)}",
                    correct:true,
                },
                {
                    text:"{(1, 1), (a, a), (2, a), (1, b)}",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Two sets are called disjoint if there _____ is the empty set.",
            answers:[
                {
                    text:"Complement",
                    correct:false,
                },
                {
                    text:" Union",
                    correct:false,
                },
                {
                    text:"Difference",
                    correct:false,
                },
                {
                    text:" Intersection",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Which of the following two sets are disjoint?",
            answers:[
                {
                    text:"{1, 3, 5} and {2, 4, 6}",
                    correct:true,
                },
                {
                    text:" {1, 3, 5} and {2, 3, 4}",
                    correct:false,
                },
                {
                    text:" {1, 2, 3} and {1, 2, 3}",
                    correct:false,
                },
                {
                    text:"{1, 3, 5} and {1, 3, 6}",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:" If n(A)=20 and n(B)=30 and n(A U B) = 40 then n(A ∩ B) is?",
            answers:[
                {
                    text:"20",
                    correct:false,
                },
                {
                    text:" 30",
                    correct:false,
                },
                {
                    text:"40",
                    correct:false,
                },
                {
                    text:"10",
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
export default Dms;