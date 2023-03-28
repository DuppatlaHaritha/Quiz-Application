import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Da(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"Data Analytics uses _ to get insights from data?",
            answers:[
                {
                    text:"Statistical figures",
                    correct:false,
                },
                {
                    text:"Numerical aspects",
                    correct:false,
                },
                {
                    text:"Statistical methods",
                    correct:true,
                },
                {
                    text:"None of the mentioned above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The process of quantifying data is referred to as _?",
            answers:[
                {
                    text:"Decoding",
                    correct:false,
                },
                {
                    text:"Structure",
                    correct:false,
                },
                {
                    text:"Enumeration",
                    correct:true,
                },
                {
                    text:"Coding",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_ are used when we want to visually examine the relationship between two quantitative variables",
            answers:[
                {
                    text:"Bar graph",
                    correct:true,
                },
                {
                    text:"Scatterplot",
                    correct:false,
                },
                {
                    text:"Line graph",
                    correct:false,
                },
                {
                    text:"Pie chart",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Least Square Method uses _.",
            answers:[
                {
                    text:"Linear polynomial",
                    correct:false,
                },
                {
                    text:"Linear regression",
                    correct:true,
                },
                {
                    text:"Linear sequence",
                    correct:false,
                },
                {
                    text:"None of the mentioned above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Alternative Hypothesis is also called as?",
            answers:[
                {
                    text:"Null Hypothesis",
                    correct:false,
                },
                {
                    text:"Research Hypothesis",
                    correct:true,
                },
                {
                    text:"Simple Hypothesis",
                    correct:false,
                },
                {
                    text:"None of the mentioned above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_ refers to the ability to turn your data useful for business",
            answers:[
                {
                    text:"Value",
                    correct:true,
                },
                {
                    text:"Variety",
                    correct:false,
                },
                {
                    text:"Velocity",
                    correct:false,
                },
                {
                    text:"None of the mentioned above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"A good data analytics solution includes a viable self-service _",
            answers:[
                {
                    text:"Data mining",
                    correct:false,
                },
                {
                    text:"Data wrangling",
                    correct:true,
                },
                {
                    text:"Data warehouse",
                    correct:false,
                },
                {
                    text:"None of the mentioned above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_ is the cyclical process of collecting and analyzing data during a research study?",
            answers:[
                {
                    text:"Extremis Analysis",
                    correct:false,
                },
                {
                    text:"Constant analysis",
                    correct:false,
                },
                {
                    text:"Interim Analysis",
                    correct:true,
                },
                {
                    text:"All of the mentioned above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"_ are the basic building blocks of qualitative data",
            answers:[
                {
                    text:"Categories",
                    correct:true,
                },
                {
                    text:"Data chunk",
                    correct:false,
                },
                {
                    text:"Numeric figures",
                    correct:false,
                },
                {
                    text:"None of the mentioned above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The Process of describing the data that is huge and complex to store and process is known as _.",
            answers:[
                {
                    text:"Analytics mining",
                    correct:false,
                },
                {
                    text:"Data cleaning",
                    correct:false,
                },
                {
                    text:"Big data",
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
export default Da;