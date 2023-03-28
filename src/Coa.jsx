import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Coa(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"Which of the following is a type of architecture used in the computers nowadays?",
            answers:[
                {
                    text:"Microarchitecture",
                    correct:false,
                },
                {
                    text:"Harvard Architecture",
                    correct:false,
                },
                {
                    text:"Von-Neumann Architecture",
                    correct:true,
                },
                {
                    text:" System Design",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the architecture is power efficient?",
            answers:[
                {
                    text:" RISC",
                    correct:true,
                },
                {
                    text:"ISA",
                    correct:false,
                },
                {
                    text:" IANA",
                    correct:false,
                },
                {
                    text:"  CISC",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:" The small extremely fast, RAM’s all called as ____?",
            answers:[
                {
                    text:"Heaps",
                    correct:true,
                },
                {
                    text:"Accumulators",
                    correct:false,
                },
                {
                    text:" Stacks",
                    correct:false,
                },
                {
                    text:"Cache",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"In order to read multiple bytes of a row at the same time, we make use of __",
            answers:[
                {
                    text:" Memory extension",
                    correct:false,
                },
                {
                    text:"Cache",
                    correct:false,
                },
                {
                    text:"Shift register",
                    correct:false,
                },
                {
                    text:" Latch",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"The data is transferred over the RAMBUS as ___",
            answers:[
                {
                    text:"Blocks",
                    correct:false,
                },
                {
                    text:"Swing voltages",
                    correct:true,
                },
                {
                    text:" Bits",
                    correct:false,
                },
                {
                    text:"Packets",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following circuit convert the binary data into a decimal?",
            answers:[
                {
                    text:"Decoder",
                    correct:false,
                },
                {
                    text:"Encoder",
                    correct:false,
                },
                {
                    text:"Code converter",
                    correct:true,
                },
                {
                    text:"Multiplexer",           
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following memory unit communicates directly with the CPU?",
            answers:[
                {
                    text:"Auxiliary memory",
                    correct:false,
                },
                {
                    text:"Main memory",
                    correct:true,
                },
                {
                    text:"Secondary memory",
                    correct:false,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is a group of bits that tells the computer to perform a particular operation?",
            answers:[
                {
                    text:"Accumulator",
                    correct:false,
                },
                {
                    text:"Register",
                    correct:false,
                },
                {
                    text:"Instruction code",
                    correct:true,
                },
                {
                    text:" None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The status bit is also called as_",
            answers:[
                {
                    text:"Unsigned bit",
                    correct:false,
                },
                {
                    text:"Signed bit",
                    correct:false,
                },
                {
                    text:"Flag bit",
                    correct:true,
                },
                {
                    text:" none of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is equal to 4 bits?",
            answers:[
                {
                    text:"Byte",
                    correct:false,
                },
                {
                    text:"Nibble",
                    correct:true,
                },
                {
                    text:"Record",
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
export default Coa;