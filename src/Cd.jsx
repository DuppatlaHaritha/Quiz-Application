import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Pps(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"_ of an algorithm is the amount of time required for it to execute?" ,
            answers:[
                {
                    text:"Time complexity",
                    correct:true,
                },
                {
                    text:"Space complexity",
                    correct:false,
                },
                {
                    text:"Compiling time",
                    correct:false,
                },
                {
                    text:"Best case",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_ is the maximum amount of time an algorithm takes to execute a specific set of inputs.",
            answers:[
                {
                    text:"Running time",
                    correct:false,
                },
                {
                    text:" Average case time complexity",
                    correct:false,
                },
                {
                    text:"Worst case time complexity",
                    correct:true,
                },
                {
                    text:"Best case time complexity",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"For converting recursive algorithm to non-recursive algorithm, store the values of all _ parameters in the stack.",
            answers:[
                {
                    text:" Negative",
                    correct:false,
                },
                {
                    text:" Global",
                    correct:false,
                },
                {
                    text:" Pass by reference",
                    correct:false,
                },
                {
                    text:"Pass by value",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"The recursive versions of binary search use a _ structure.",
            answers:[
                {
                    text:" Branch and bound",
                    correct:false,
                },
                {
                    text:"Dynamic programming",
                    correct:false,
                },
                {
                    text:" Divide and conquer",
                    correct:true,
                },
                {
                    text:"Simple recursive",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Prim’s algorithm starts constructing a minimum spanning tree from _.",
            answers:[
                {
                    text:"An arbitary root vertex",
                    correct:true,
                },
                {
                    text:"The shortest arc",
                    correct:false,
                },
                {
                    text:" The left most vertex",
                    correct:true,
                },
                {
                    text:"The right most vertex",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_ is a concept wherein larger solutions for problems are found based upon the solution of a number of smaller problems.",
            answers:[
                {
                    text:"Decrease and conquer",
                    correct:true,
                },
                {
                    text:"Divide and conquer",
                    correct:false,
                },
                {
                    text:"Branch and bound",
                    correct:false,
                },
                {
                    text:"Backtracking",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The number of key comparisons in the worst case while forming a heap is using an array of n elements is _.",
            answers:[
                {
                    text:"nlog2(n+1)",
                    correct:false,
                },
                {
                    text:"2(nlog(n+1))",
                    correct:false,
                },
                {
                    text:"2(n-1)log2(n+1)",
                    correct:false,
                },
                {
                    text:"2(n-log2(n+1))",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Each slot of the bucket array in separate chaining stores _.",
            answers:[
                {
                    text:"Records",
                    correct:false,
                },
                {
                    text:"A pointer to a linked list",
                    correct:true,
                },
                {
                    text:"Hash key values",
                    correct:false,
                },
                {
                    text:" Both b & c",
                    correct:false,
                },
            ],
            
        },
        {
           
            question:"An algorithm that defines every operation exclusively is called _ algorithm.",
            answers:[
                {
                    text:"NP-hard",
                    correct:false,
                },
                {
                    text:"Deterministic",
                    correct:true,
                },
                {
                    text:"Non-deterministic",
                    correct:false,
                },
                {
                    text:"NP-complete",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"_ is a sequence of data elements connected to each other where every element has a link field referring to the location of the next element.",
            answers:[
                {
                    text:"Array",
                    correct:false,
                },
                {
                    text:" Stack",
                    correct:false,
                },
                {
                    text:" List",
                    correct:true,
                },
                {
                    text:" Queue",
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
export default Pps;