import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Flat(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"The logic of pumping lemma is a good example of",
            answers:[
                {
                    text:"Pigeon-hole principle",
                    correct:true,
                },
                {
                    text:"Divide-and-conquer technique",
                    correct:false,
                },
                {
                    text:"Recursion",
                    correct:false,
                },
                {
                    text:" Iteration",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Context-free grammar can be recognized by",
            answers:[
                {
                    text:"Finite state automation",
                    correct:false,
                },
                {
                    text:"2-way linear bounded automata",
                    correct:false,
                },
                {
                    text:"Push down automata ",
                    correct:false,
                },
                {
                    text:"Both (b) and (c)",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"The concept of grammar is much used in this part of the compiler",
            answers:[
                {
                    text:" Lexical analysis",
                    correct:false,
                },
                {
                    text:" Parser",
                    correct:true,
                },
                {
                    text:" Code generation",
                    correct:false,
                },
                {
                    text:"Code optimization",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Set of regular languages over a given alphabet set is closed under",
            answers:[
                {
                    text:"Union",
                    correct:false,
                },
                {
                    text:" Complementation",
                    correct:false,
                },
                {
                    text:" Intersection",
                    correct:false,
                },
                {
                    text:"All of the mentioned",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Context free grammar is not closed under",
            answers:[
                {
                    text:"Product",
                    correct:false,
                },
                {
                    text:"Union",
                    correct:false,
                },
                {
                    text:"Complementation ",
                    correct:true,
                },
                {
                    text:" Kleene Star",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Context free language are closed under",
            answers:[
                {
                    text:"Union, intersection",
                    correct:false,
                },
                {
                    text:"Union, Kleene closure",
                    correct:true,
                },
                {
                    text:" Intersection, complement",
                    correct:false,
                },
                {
                    text:" Complement, Kleene closure",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"A given grammar is called ambiguous if",
            answers:[
                {
                    text:" Two or more productions have the same non-terminal on the left hand side",
                    correct:false,
                },
                {
                    text:" A derivation tree has more than one associated sentence",
                    correct:false,
                },
                {
                    text:"There is a sentence with more than one derivation tree corresponding to it",
                    correct:true,
                },
                {
                    text:" Brackets are not present in the grammar",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Recursive languages are",
            answers:[
                {
                    text:"A proper superset of CFL",
                    correct:true,
                },
                {
                    text:" Always recognized by PDA",
                    correct:false,
                },
                {
                    text:" Are also called type 0 languages",
                    correct:false,
                },
                {
                    text:"Always recognized by FSA",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"CFG can be recognized by a",
            answers:[
                {
                    text:"push-down automata",
                    correct:false,
                },
                {
                    text:"2-way linear bounded automata",
                    correct:false,
                },
                {
                    text:"Both (a) and (b)",
                    correct:true,
                },
                {
                    text:" None of these",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Recursively enumerable languages are not closed under",
            answers:[
                {
                    text:"Union",
                    correct:false,
                },
                {
                    text:" Complementation",
                    correct:true,
                },
                {
                    text:"Concatenation",
                    correct:false,
                },
                {
                    text:"Homomorphism",
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
export default Flat;