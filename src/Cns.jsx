import React  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
//import ResponsiveAppBar from "./Appbar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link } from "react-router-dom";

function Cns(){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    const [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    
    const data =[
        {
            
            question:"Which is not an objective of network security?",
            answers:[
                {
                    text:"identification",
                    correct:false,
                },
                {
                    text:"authentication",
                    correct:false,
                },
                {
                    text:" access control",
                    correct:false,
                },
                {
                    text:" lock",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"The process of transforming plain text into unreadable text.",
            answers:[
                {
                    text:" decryption",
                    correct:false,
                },
                {
                    text:"encryption",
                    correct:true,
                },
                {
                    text:" network security",
                    correct:false,
                },
                {
                    text:"information hiding",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"A small program that changes the way a computer operates.?",
            answers:[
                {
                    text:"worm",
                    correct:false,
                },
                {
                    text:"trojan",
                    correct:false,
                },
                {
                    text:" virus",
                    correct:true,
                },
                {
                    text:"bomb",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is data encryption standard (DES)?",
            answers:[
                {
                    text:"stream cipher",
                    correct:false,
                },
                {
                    text:"bit cipher",
                    correct:false,
                },
                {
                    text:"byte cipher",
                    correct:false,
                },
                {
                    text:"block cipher",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Rail Fence Technique is an example of?",
            answers:[
                {
                    text:"substitution",
                    correct:false,
                },
                {
                    text:"ceaser cipher ",
                    correct:false,
                },
                {
                    text:" product cipher",
                    correct:false,
                },
                {
                    text:"transposition",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"The sub key length at each round of DES is?",
            answers:[
                {
                    text:"32",
                    correct:false,
                },
                {
                    text:"64",
                    correct:false,
                },
                {
                    text:"48",
                    correct:false,
                },
                {
                    text:"56",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Interception is an attack on",
            answers:[
                {
                    text:"availability",
                    correct:false,
                },
                {
                    text:"confidentiality",
                    correct:true,
                },
                {
                    text:" integrity",
                    correct:false,
                },
                {
                    text:"authenticity",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"The Plaintext for the Ciphertext 00100010, given that the key is 1111111111 is",
            answers:[
                {
                    text:"1100111",
                    correct:false,
                },
                {
                    text:"1010",
                    correct:false,
                },
                {
                    text:"1001000",
                    correct:false,
                },
                {
                    text:"1001100",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"In Asymmetric key Cryptography, although RSA can be used to encrypt and decrypt actual messages, it is very slow if the message is",
            answers:[
                {
                    text:" short",
                    correct:false,
                },
                {
                    text:"long",
                    correct:true,
                },
                {
                    text:" flat",
                    correct:false,
                },
                {
                    text:"thin",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Computation of the discrete logarithm is the basis of the cryptographic system",
            answers:[
                {
                    text:"symmetric cryptography",
                    correct:false,
                },
                {
                    text:" asymmetric cryptography",
                    correct:false,
                },
                {
                    text:"diffie-hellman key exchange",
                    correct:true,
                },
                {
                    text:"secret key cryptography",
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
export default Cns;