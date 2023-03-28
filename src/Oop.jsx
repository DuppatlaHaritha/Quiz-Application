import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";
import { TroubleshootTwoTone } from "@mui/icons-material";

function Oop(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"Who developed object-oriented programming ",
            answers:[
                {
                    text:"Adele Goldberg",
                    correct:false,
                },
                {
                    text:"Dennis Ritchie",
                    correct:false,
                },
                {
                    text:"Alan Kay",
                    correct:true,
                },
                {
                    text:"Andrea Ferro",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which feature of OOPS derives the class from another class?",
            answers:[
                {
                    text:"Inheritance",
                    correct:TroubleshootTwoTone,
                },
                {
                    text:"Data hiding",
                    correct:false,
                },
                {
                    text:"Encapsulation",
                    correct:false,
                },
                {
                    text:"Polymorphism",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following feature is also known as run-time binding or late binding?",
            answers:[
                {
                    text:"Dynamic typing",
                    correct:false,
                },
                {
                    text:"Dynamic loading",
                    correct:false,
                },
                {
                    text:"Dynamic binding",
                    correct:true,
                },
                {
                    text:"Data hiding",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which member of the superclass is never accessible to the subclass?",
            answers:[
                {
                    text:"Public member",
                    correct:false,
                },
                {
                    text:"Protected member",
                    correct:false,
                },
                {
                    text:"Private member",
                    correct:true,
                },
                {
                    text:"All of the mentioned",
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
export default Oop;