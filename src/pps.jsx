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
            
            question:"C variable cannot start with which of the following option ?" ,
            answers:[
                {
                    text:"An alphabet",
                    correct:false,
                },
                {
                    text:"A number",
                    correct:false,
                },
                {
                    text:"A special other than underscore",
                    correct:false,
                },
                {
                    text:"Both (b) And (c)",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:" statement printf(“%d”, 10 ? 0 ? 5 : 1 : 12); will print? ",
            answers:[
                {
                    text:"0",
                    correct:false,
                },
                {
                    text:"12",
                    correct:false,
                },
                {
                    text:"10",
                    correct:false,
                },
                {
                    text:"1",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"What is the correct initialization of an array?",
            answers:[
                {
                    text:"int n{}={2,4,12,5,45,5};",
                    correct:false,
                },
                {
                    text:"int num[6]={2,4,12,5,45,5};",
                    correct:true,
                },
                {
                    text:"int n{6}={2,4,12};",
                    correct:false,
                },
                {
                    text:"int n(6)={2,4,12,5,45,5};",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"What is the built in library function to compare two strings?",
            answers:[
                {
                    text:"string_cmp()",
                    correct:false,
                },
                {
                    text:"strcmp()",
                    correct:true,
                },
                {
                    text:"equals()",
                    correct:false,
                },
                {
                    text:"str_compare()",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Which of the following is a logical OR operator?",
            answers:[
                {
                    text:"&",
                    correct:false,
                },
                {
                    text:"&&",
                    correct:false,
                },
                {
                    text:"||",
                    correct:true,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"In the given below statement, what does the “pf” indicate? int(*pf)()",
            answers:[
                {
                    text:"pf is a pointer of a function which return int",
                    correct:true,
                },
                {
                    text:"pf is a pointer",
                    correct:false,
                },
                {
                    text:"pf is a function pointer",
                    correct:false,
                },
                {
                    text:"None of the above",
                    correct:false,
                },
            ],
            
        },
        {
            
            question:"Function fopen() with the mode 'r+' tries to open the file for __",
            answers:[
                {
                    text:"reading and adding new content ",
                    correct:false,
                },
                {
                    text:"only for reading",
                    correct:false,
                },
                {
                    text:"it wokrs only for directories",
                    correct:false,
                },
                {
                    text:"reading and writing",
                    correct:true,
                },
            ],
            
        },
        {
            
            question:"Libray function getch() belongs to which header file?",
            answers:[
                {
                    text:"stdio.h",
                    correct:false,
                },
                {
                    text:"conio.h",
                    correct:true,
                },
                {
                    text:"stdlib.h",
                    correct:false,
                },
                {
                    text:"stdlibio.h",
                    correct:false,
                },
            ],
            
        },
        {
           
            question:"Members of a union are accessed as________________.",
            answers:[
                {
                    text:". union-name.member",
                    correct:false,
                },
                {
                    text:"Both a & b",
                    correct:true,
                },
                {
                    text:" union-pointer->member",
                    correct:false,
                },
                {
                    text:"None of the mentioned",
                    correct:false,
                },
            ],
            
        },
        
        {
            
            question:"How will you free the allocated memory?",
            answers:[
                {
                    text:"free(var-name);",
                    correct:false,
                },
                {
                    text:" delete(var-name);",
                    correct:true,
                },
                {
                    text:"dalloc(var-name);",
                    correct:false,
                },
                {
                    text:"remove(var-name);",
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