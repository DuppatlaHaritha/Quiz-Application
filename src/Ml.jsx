import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Ml(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"What characterize unlabeled examples in machine learning____",
            answers:[
                {
                    text:"there is plenty of confusing knowledge there is prior knowledge",
                    correct:true,
                },
                {
                    text:"there is prior knowledge",
                    correct:false,
                },
                {
                    text:"there is no confusing knowledge",
                    correct:false,
                },
                {
                    text:"there is no prior knowledge",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is the best machine learning method?",
            answers:[
                {
                    text:"accuracy",
                    correct:false,
                },
                {
                    text:"scalable",
                    correct:false,
                },
                {
                    text:"fast",
                    correct:false,
                },
                {
                    text:"All of above",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"You are given seismic data and you want to predict next earthquake , this is an example of________",
            answers:[
                {
                    text:"supervised learning",
                    correct:true,
                },
                {
                    text:"unsupervised learning",
                    correct:false,
                },
                {
                    text:"reinforcement learning",
                    correct:false,
                },
                {
                    text:"dimensionality reduction",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"What do you mean by a hard margin?",
            answers:[
                {
                    text:"the svm allows very low error in classification",
                    correct:true,
                },
                {
                    text:"the svm allows high amount of error in classification",
                    correct:false,
                },
                {
                    text:"None of above",
                    correct:false,
                },
                {
                    text:"All of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Support Vector Machine is_______",
            answers:[
                {
                    text:"geometric model",
                    correct:true,
                },
                {
                    text:"probabilistic model",
                    correct:false,
                },
                {
                    text:"logical model",
                    correct:false,
                },
                {
                    text:"None",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:" In simple term, machine learning is_______",
            answers:[
                {
                    text:"prediction to answer a query",
                    correct:false,
                },
                {
                    text:"training based on historical data",
                    correct:false,
                },
                {
                    text:"All of above",
                    correct:true,
                },
                {
                    text:"None of above",           
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is a good test dataset characteristic?",
            answers:[
                {
                    text:"is representative of the dataset as a whole",
                    correct:false,
                },
                {
                    text:"large enough to yield meaningful results",
                    correct:false,
                },
                {
                    text:"All of above",
                    correct:true,
                },
                {
                    text:"None of above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"A measurable property or parameter of the data-set is_______",
            answers:[
                {
                    text:"training data",
                    correct:false,
                },
                {
                    text:"test data",
                    correct:false,
                },
                {
                    text:"feature",
                    correct:true,
                },
                {
                    text:"validation data",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The effectiveness of an SVM depends upon______",
            answers:[
                {
                    text:"kernel parameters",
                    correct:false,
                },
                {
                    text:"selection of kernel",
                    correct:true,
                },
                {
                    text:"soft margin parameter",
                    correct:false,
                },
                {
                    text:" All of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Prediction is______",
            answers:[
                {
                    text:"discipline in statistics used to find projections in multidimensional data",
                    correct:false,
                },
                {
                    text:"value entered in database by expert",
                    correct:false,
                },
                {
                    text:"the result of application of specific theory or rule in a specific case",
                    correct:true,
                },
                {
                    text:"independent of data",
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
export default Ml;