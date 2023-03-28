import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Cg(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"The deflection system of the CRT consistsof_____deflection plates.",
            answers:[
                {
                    text:"vertical",
                    correct:false,
                },
                {
                    text:"horizontal",
                    correct:false,
                },
                {
                    text:"a and b",
                    correct:true,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"On a black and white system with one bit per pixel , the frame buffer is called a____.",
            answers:[
                {
                    text:"bitmap",
                    correct:true,
                },
                {
                    text:" pixmap",
                    correct:false,
                },
                {
                    text:"bitpixmap",
                    correct:false,
                },
                {
                    text:" pixbitmap",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The size of frame buffer(video memory )depends on_____.",
            answers:[
                {
                    text:" resolution only",
                    correct:false,
                },
                {
                    text:"number of different colors only",
                    correct:false,
                },
                {
                    text:"both (b) and(c)",
                    correct:true,
                },
                {
                    text:"computer byte",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"In winding number method if net winding is zero then point is ----------otherwise it is inside. ",
            answers:[
                {
                    text:"outside",
                    correct:true,
                },
                {
                    text:"inside",
                    correct:false,
                },
                {
                    text:" colorful",
                    correct:false,
                },
                {
                    text:"none of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_____ is basic change in shape & size of object.",
            answers:[
                {
                    text:"transformation",
                    correct:true,
                },
                {
                    text:"deformation",
                    correct:false,
                },
                {
                    text:"illumination",
                    correct:false,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:" ---- projection preserves relative proportion of object but does not produce the realistic view",
            answers:[
                {
                    text:"serial parallel",
                    correct:false,
                },
                {
                    text:"serial, perspective",
                    correct:false,
                },
                {
                    text:"parallel, perspective",
                    correct:true,
                },
                {
                    text:"none of these",           
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"In _ transformation,we get Z(new)=Z(old).",
            answers:[
                {
                    text:"about xaxis",
                    correct:false,
                },
                {
                    text:"about y axis",
                    correct:true,
                },
                {
                    text:" about zaxis",
                    correct:false,
                },
                {
                    text:"none of these",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following algorithm can be used for circle generation?",
            answers:[
                {
                    text:"bresenham\s algorithm",
                    correct:false,
                },
                {
                    text:"mid-point algorithm",
                    correct:false,
                },
                {
                    text:" both a and b",
                    correct:true,
                },
                {
                    text:"none of these",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Is 0011 valid region code / outcode used in Line Clipping algorithm?",
            answers:[
                {
                    text:" yes",
                    correct:false,
                },
                {
                    text:"no",
                    correct:true,
                },
                {
                    text:" cannot say",
                    correct:false,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The complex graphics operations are",
            answers:[
                {
                    text:"selection",
                    correct:false,
                },
                {
                    text:"clipping",
                    correct:true,
                },
                {
                    text:"shear",
                    correct:false,
                },
                {
                    text:"None of the mentioned",
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
export default Cg;