import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Cn(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"Choose the port number of FTP. ",
            answers:[
                {
                    text:"23",
                    correct:false,
                },
                {
                    text:"21",
                    correct:true,
                },
                {
                    text:"110",
                    correct:false,
                },
                {
                    text:"143",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Identify among the following the network device used to connect two dis-similar types of networks.",
            answers:[
                {
                    text:"Switch",
                    correct:false,
                },
                {
                    text:"Hub",
                    correct:false,
                },
                {
                    text:"Bridge",
                    correct:false,
                },
                {
                    text:"Gateway",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"The arrangement where all data pass through a central computer is known as",
            answers:[
                {
                    text:"Ring topology",
                    correct:false,
                },
                {
                    text:"Mesh topology",
                    correct:false,
                },
                {
                    text:"Star topology",
                    correct:true,
                },
                {
                    text:"Bus topology",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"What is required to use a Simple Network Management System? ",
            answers:[
                {
                    text:"Servers ",
                    correct:false,
                },
                {
                    text:"Protocols",
                    correct:false,
                },
                {
                    text:"Rules",
                    correct:true,
                },
                {
                    text:"IP",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Identify the layer which is responsible for data translating.",
            answers:[
                {
                    text:"Network",
                    correct:false,
                },
                {
                    text:"Datalink",
                    correct:false,
                },
                {
                    text:"Presentation",
                    correct:true,
                },
                {
                    text:"Application",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Who keeps the private key in asymmetric key cryptography? ",
            answers:[
                {
                    text:"Sender",
                    correct:false,
                },
                {
                    text:"Receiver",
                    correct:true,
                },
                {
                    text:"Both Sender and Receiver",
                    correct:false,
                },
                {
                    text:" None",           
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is the collection of the hyperlinked document on the internet known as?",
            answers:[
                {
                    text:"HTML",
                    correct:false,
                },
                {
                    text:"Email",
                    correct:false,
                },
                {
                    text:"WWW",
                    correct:true,
                },
                {
                    text:"Internet",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Identify among the following which is mainly used to host web site.",
            answers:[
                {
                    text:"Mail server",
                    correct:false,
                },
                {
                    text:"Webserver",
                    correct:true,
                },
                {
                    text:"Database server",
                    correct:false,
                },
                {
                    text:"None",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is the number of layers in the OSI model?",
            answers:[
                {
                    text:"2 layers",
                    correct:false,
                },
                {
                    text:"4 layers",
                    correct:false,
                },
                {
                    text:"7 layers",
                    correct:true,
                },
                {
                    text:"9 layers",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Identify the device used to boost up a weak signal.",
            answers:[
                {
                    text:"Modem ",
                    correct:false,
                },
                {
                    text:"Repeater",
                    correct:true,
                },
                {
                    text:"Switch",
                    correct:false,
                },
                {
                    text:"Router",
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
export default Cn;