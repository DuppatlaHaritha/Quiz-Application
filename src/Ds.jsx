import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Ds(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"Heap is an example of?",
            answers:[
                {
                    text:"complete binary tree",
                    correct:true,
                },
                {
                    text:"spanning tree",
                    correct:false,
                },
                {
                    text:"sparse tree",
                    correct:false,
                },
                {
                    text:"binary search tree",
                    correct:false,
                },
            ],
            
        },
        {
        
            question:"Which of the following usees FIFO method",
            answers:[
                {
                    text:"Queue",
                    correct:true,
                },
                {
                    text:"Stack",
                    correct:false,
                },
                {
                    text:"Hash Table",
                    correct:false,
                },
                {
                    text:" Binary Search Tree",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Prefix notation is alsow known as?",
            answers:[
                {
                    text:" Reverse Polish Notation",
                    correct:false,
                },
                {
                    text:"Reverse Notation",
                    correct:false,
                },
                {
                    text:" Polish Reverse Notation",
                    correct:false,
                },
                {
                    text:"Polish Notation",
                    correct:true,
                },
            ],
            
        },
        
        {
            
            question:" Which one of the below is not divide and conquer approach?",
            answers:[
                {
                    text:"Insertion Sort",
                    correct:false,
                },
                {
                    text:"Merge Sort",
                    correct:true,
                },
                {
                    text:"Shell Sort",
                    correct:false,
                },
                {
                    text:"Heap Sort",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is an example of dynamic programming approach?",
            answers:[
                {
                    text:" Fibonacci Series",
                    correct:false,
                },
                {
                    text:" Tower of Hanoi",
                    correct:false,
                },
                {
                    text:"Dijkstra Shortest Path",
                    correct:false,
                },
                {
                    text:"All of the above",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"A circular linked list can be used for?",
            answers:[
                {
                    text:" Stack",
                    correct:false,
                },
                {
                    text:"Queue",
                    correct:false,
                },
                {
                    text:"Both Stack & Queue",
                    correct:true,
                },
                {
                    text:"Neither Stack or Queue",
                    correct:false,
                },
            ],
            
        },
        {
           
            question:"Minimum number of queues required for priority queue implementation?",
            answers:[
                {
                    text:"5",
                    correct:false,
                },
                {
                    text:"4",
                    correct:false,
                },
                {
                    text:"3",
                    correct:false,
                },
                {
                    text:"2",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Stack is used for?",
            answers:[
                {
                    text:"CPU Resource Allocation",
                    correct:false,
                },
                {
                    text:"Breadth First Traversal",
                    correct:false,
                },
                {
                    text:" Recursion",
                    correct:false,
                },
                {
                    text:" None of the above",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"What data structure is used for breadth first traversal of a graph?",
            answers:[
                {
                    text:" queue",
                    correct:false,
                },
                {
                    text:" stack",
                    correct:false,
                },
                {
                    text:" list",
                    correct:false,
                },
                {
                    text:" none of the above",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"In order traversal of binary search tree will produce −",
            answers:[
                {
                    text:"unsorted list",
                    correct:false,
                },
                {
                    text:"reverse of input",
                    correct:false,
                },
                {
                    text:"sorted list",
                    correct:true,
                },
                {
                    text:" none of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is a hash table?",
            answers:[
                {
                    text:"A structure that maps values to keys",
                    correct:false,
                },
                {
                    text:" A structure that maps keys to values",
                    correct:true,
                },
                {
                    text:" A structure used for storage",
                    correct:false,
                },
                {
                    text:"A structure used to implement stack and queue",
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
export default Ds;