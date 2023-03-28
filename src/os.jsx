import React, { useCallback, useEffect }  from "react";
import { useState } from "react";
import "./pyth.css"
import Trivia from "./Tivia";
import ResponsiveAppBar from "./Ac";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Timer from "./timer";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Avatar, useEventCallback } from "@mui/material";
import Subject from "./subject";
//import Options from "./subsub";
import { LaptopWindows } from "@mui/icons-material";
import axios from "axios";
import Dbqu from "./dbqu";

function Os({subj,attempt}){
    const [questionNumber, setQuestionNumber]= useState(1);
    const [stop, setStop] = useState(false);
    //const [className,setClassName]=useState();
    //const [selectedAnswer, setSelectedAnswer]= useState(true);
    let [score,setScore]= useState(0);
    const [nQuestions, setNquestions] = useState(0);
    const [option, setOption] = useState(true);
    
    let hell=JSON.parse(localStorage.getItem("datas"));
    
    let emai={
        "email":hell[2]
    }
    axios.post('http://localhost/php-react/register-login-php/letscore.php',emai).then((result)=>{
        console.log(result.data);
        
        localStorage.setItem("scoree",JSON.stringify(result.data.score))
        localStorage.setItem("attempts",JSON.stringify(result.data.attempts))
    })
    
    let scores={
        "attempts":attempt+Number(JSON.parse(localStorage.getItem("attempts"))),
        "score":score +Number(JSON.parse(localStorage.getItem("scoree"))),
        "email":hell[2]
    }
    let data;
    let subn;
    //localStorage.setItem("data",[JSON.stringify(data)]);
    //console.log(subj);
    
    switch(subj){
        case "OS":
            subn={"subject":"os"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            //console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              //console.log(data);
              //console.log(subn);
            
        
            
            break;
        case "PPS":
            // data=JSON.parse(localStorage.getItem("ppsque"));
            // console.log(data);
            subn={"subject":"pps"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "DMS":
            subn={"subject":"dms"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
            // data=JSON.parse(localStorage.getItem("Dmsque"));
            // console.log(data);
            // break;
        case "CD":
            // data=JSON.parse(localStorage.getItem("Cdque"));
            // console.log(data);
            subn={"subject":"cd"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "DS":
            // data=JSON.parse(localStorage.getItem("Dsque"));
            // console.log(data);
            subn={"subject":"ds"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "COA":
            // data=JSON.parse(localStorage.getItem("Coaque"));
            // console.log(data);
            subn={"subject":"coa"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "CPP":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"cpp"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "OOP":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"oop"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "DBMS":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"dbms"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "CG":
            // data=JSON.parse(localStorage.getItem("Cgque"));
            // console.log(data);
            subn={"subject":"cg"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "DAA":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"daa"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "CN":
            // data=JSON.parse(localStorage.getItem("Cnque"));
            // console.log(data);
            subn={"subject":"cn"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "WT":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"wt"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "FLAT":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"flat"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "ML":
            // data=JSON.parse(localStorage.getItem("Mlque"));
            // console.log(data);
            subn={"subject":"ml"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "SE":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"se"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "DA":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"da"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "AI":
            // data=JSON.parse(localStorage.getItem("Aique"));
            // console.log(data);
            subn={"subject":"ai"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
        case "CNS":
            // data=JSON.parse(localStorage.getItem(""));
            // console.log(data);
            subn={"subject":"cns"}
            axios.post('http://localhost/php-react/register-login-php/quest.php',subn).then((result)=>{
            console.log([result.data[0]]);
            localStorage.setItem("data",JSON.stringify(result.data[0]));
        })
              data=JSON.parse(localStorage.getItem("data"));
              console.log(data);
              console.log(subn);
            break;
    }
    const Home = () =>{
        console.log(localStorage.getItem("scoree"));
        setStop(true)
        
        if (setStop){
            axios.post('http://localhost/php-react/register-login-php/scores.php',scores).then((result)=>{
                console.log(result.data)
            })
            
        }
    }
    
    const Home1 = () =>{
        window.location.reload();
    }
    
    
    
    
    
    return(
      
        <>
          
          <div className="pyth">
            <div className="pyth">
                <div className="main">
                    {stop ? (
                        <>
                           <div className="result">
                              <lord-icon
                              src="https://cdn.lordicon.com/ivhjpjsw.json" 
                              trigger="loop"
                              style={{width:"150px",height:"150px"}}>

                              </lord-icon>
                              <h1 className="endText">Your Score is : {score} outof {nQuestions}</h1>
                              <div className="homeb">
                                <div onClick={Home1}>
                                    <lord-icon src="https://cdn.lordicon.com/gmzxduhd.json" ></lord-icon>
                                    <Link style={{ textDecoration: 'none' }}>Home</Link>
                                    
                                </div>
                                <div>
                                    
                                </div>
                              </div>
                              {/* <div><Link to="/OS" style={{ textDecoration: 'none' }}>Re Play</Link></div> */}
                           </div>
                       </>
                    ) : (
                      <>       
                        <div className="top ">
                            <div className="timer">
                                <Timer
                                data={data}
                                setStop={setStop}
                                questionNumber={questionNumber} 
                                nQuestions={nQuestions}
                                setNquestions={setNquestions}
                                setQuestionNumber={setQuestionNumber}
                                scores={scores}
                                 />
                            </div>
                            <div className="quit" onClick={Home}>
                                Quit
                            </div>
            
                        </div>
                        <div className="bottom fixed">
                            <Dbqu
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
            </div>
        </>
        
         
    )
}
export default Os;