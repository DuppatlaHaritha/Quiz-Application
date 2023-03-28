import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./pyth.css";
//import Aique from './questionsjson/Aique.json'
import Cdque from './questionsjson/Cdque.json'
//import Cgque from './questionsjson/Cgque.json'
//import Seque from './questionsjson/Seque.json'
//import Cnque from './questionsjson/Cnque.json'
//import Cnsque from './questionsjson/Cnsque.json'
import Dmsque from './questionsjson/Dmsque.json'
//import Dbmsque from './questionsjson/Dbmsque.json'
//import Daaque from './questionsjson/Daaque.json'
//import Daque from './questionsjson/Daque.json'
import ppsque from './questionsjson/ppsque.json'
import Dsque from './questionsjson/Dsque.json'
//import Mlque from './questionsjson/Mlque.json'
import Coaque from './questionsjson/Coaque.json'
import Osqd from './questionsjson/Osqd.json'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';






export default function Subject(data) {
  //const datahey="";
  //localStorage.setItem("Osqd",JSON.stringify(Osqd))
  //localStorage.setItem("Cdque",JSON.stringify(Cdque))
  //localStorage.setItem("ppsque",JSON.stringify(ppsque))
  //localStorage.setItem("Dmsque",JSON.stringify(Dmsque))
  //localStorage.setItem("Dsque",JSON.stringify(Dsque))
  //localStorage.setItem("Coaque",JSON.stringify(Coaque))
  let dta;
  let subjec;
  let dtas;
  const [add, setAdd] = useState(false);
  const [datas, setDatas] = useState({
    subject:"",
    question:"",
    op1:"",
    c1:"",
    op2:"",
    c2:"",
    op3:"",
    c3:"",
    op4:"",
    c4:""

  })
  const handleChange=(e)=>{
    setDatas({...datas, [e.target.name]:e.target.value});
  }
  const subject="hey"
  const heelo= useNavigate();
  const handlesubmit = (e) =>{
    e.preventDefault();
    setAdd(true)
    if (datas.question === "" || datas.op1 === "" || datas.op2 === "" || datas.op3 === "" || datas.op4 === ""){
      alert("Please enter question and answers")
    }
    else{
      const senddata={
        subject:datas.subject,
        question:datas.question,
        answer1:datas.op1,
        c1:datas.c1,
        answer2:datas.op2,
        c2:datas.c2,
        answer3:datas.op3,
        c3:datas.c3,
        answer4:datas.op4,
        c4:datas.c4,
      }
      //datahey=senddata["subject"];
      
      console.log(senddata);
      dta={
        "question":senddata.question,
        "answers":[
          {"text":senddata.answer1,
          "correct":Boolean(senddata.c1)},
          {"text":senddata.answer2,
          "correct":Boolean(senddata.c2)},
          {"text":senddata.answer3,
          "correct":Boolean(senddata.c3)},
          {"text":senddata.answer4,
          "correct":Boolean(senddata.c4)}
        ]
      };
      dtas={
        question:senddata.question,
        option1:senddata.answer1,
        ans1:Boolean(senddata.c1),
        option2:senddata.answer2,
        ans2:Boolean(senddata.c2),
        option3:senddata.answer3,
        ans3:Boolean(senddata.c3),
        option4:senddata.answer4,
        ans4:Boolean(senddata.c4)
      }
      console.log(dtas);
      subjec=senddata.subject;
      console.log(subjec);
      console.log(dta);
      
      switch(subjec){
        case "OS":
          data=JSON.parse(localStorage.getItem("Osqd"));
          data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/os.php',dtas);
          localStorage.setItem("Osqd",JSON.stringify(data));
          
          break;
        case "Dms":
          data=JSON.parse(localStorage.getItem("Dmsque"));
          data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/Dms.php',dtas);
          localStorage.setItem("Dmsque",JSON.stringify(data));
          break;
        case "PPS":
          data=JSON.parse(localStorage.getItem("ppsque"));
          data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/pps.php',dtas);
          localStorage.setItem("ppsque",JSON.stringify(data));
          break;
        case "DS":
          data=JSON.parse(localStorage.getItem("Dsque"));
          data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/Ds.php',dtas);
          localStorage.setItem("Dsque",JSON.stringify(data));
          break;
        case "CD":
          data=JSON.parse(localStorage.getItem("Cdque"));
          data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/Cd.php',dtas);
          localStorage.setItem("Cdque",JSON.stringify(data));
          break;
        case "COA":
          data=JSON.parse(localStorage.getItem("Coaque"));
          data.unshift(dta);
          axios.post('http://localhost/php-react/register-login-php/Coa.php',dtas);
          localStorage.setItem("Coaque",JSON.stringify(data));
          break;
        case "OOP":
          data=JSON.parse(localStorage.getItem(""));
          data.unshift(dta);
          localStorage.setItem("",JSON.stringify(data));
          break;
        case "DBMS":
          data=JSON.parse(localStorage.getItem(""));
          data.unshift(dta);
          localStorage.setItem("",JSON.stringify(data));
          break;
        case "CG":
          data=JSON.parse(localStorage.getItem("Cgque"));
          data.unshift(dta);
          localStorage.setItem("Cgque",JSON.stringify(data));
          break;
        case "DAA":
          data=JSON.parse(localStorage.getItem(""));
          data.unshift(dta);
          localStorage.setItem("",JSON.stringify(data));
          break;
        case "CN":
          data=JSON.parse(localStorage.getItem("Cnque"));
          data.unshift(dta);
          localStorage.setItem("Cnque",JSON.stringify(data));
          break;
        case "WT":
          data=JSON.parse(localStorage.getItem(""));
          data.unshift(dta);
          localStorage.setItem("",JSON.stringify(data));
          break;
        case "FLAT":
          data=JSON.parse(localStorage.getItem(""));
          data.unshift(dta);
          localStorage.setItem("",JSON.stringify(data));
          break;
        case "AI":
          data=JSON.parse(localStorage.getItem("Aique"));
          data.unshift(dta);
          localStorage.setItem("Aique",JSON.stringify(data));
          break;
          
          
      }
      
      
      console.log(data); 
      window.location.reload();   
      //heelo("/home")
    }
    
    //<div><h1>{dta[0].question}</h1></div>
    
    }
    /*const que=dta.question;
    const an1=dta.op1;
    const an2=dta.op2;
    const an3=dta.op3;
    const an4=dta.op4;*/
    
  
  return (
    <>
    
    
    <form onSubmit={handlesubmit}>
    <div className='container bg-primary fixed'>
    <div className='sub container bg-secondary fixed'>
    <div className='questions'>
      <h1 className='p-1 m-5'>ADDING QUESTIONS</h1>
      <div className='col-12 m-1'>
        <label htmlFor="subject" ><b> Select a subject </b></label>
        <select name="subject" onChange={handleChange}>
          <option value="select">select</option>
          <option value="OS">Operating System</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="CD">Compiler Design</option>
          <option value="Dms">Discete Mathematical Structures</option>
          <option value="PPS">Programming for problem solving</option>
          <option value="DS">Data Structures</option>
          <option value="COA">Computer Organization & Architecture</option>
          <option value="OOP">Object Oriented Programming</option>
          <option value="DBMS">Database Management System</option>
          <option value="CG">Computer Graphics</option>
          <option value="DAA">Design And Analysis of Algorithms</option>
          <option value="CN">Computer Network</option>
          <option value="WT">Web Technologies</option>
          <option value="FLAT">Formal Languages & Automata Theory</option>
          <option value="ML">Machine Learning</option>
        </select>
      </div>
      <div>
        <div className='' >
          <div className='q1 row'>
            <label htmlFor="question" ><b>Question</b></label>
            <input type="text" name="question" onChange={handleChange} value={data.question} className='col-l-8' />
          </div>
        </div>
        
        
          
      </div>
      <div className='m-1'>
        <label htmlFor="option1"><b>Option1</b></label>
        <div className='q1 row'>
        <input type="text" name="op1" onChange={handleChange} value={data.op1} />
        
        <select name="c1"  onChange={handleChange} value={data.c1}>
         
          <option  value="false">false</option>
          <option  value="true">true</option>
        </select>
        </div>
      </div>
      <div className=' q1 row '>
      <label htmlFor="option1"><b>Option2</b></label>
        <input type="text" name="op2" onChange={handleChange} value={data.op2} />
        <select name="c2" id="op1c" onChange={handleChange} value={data.c2}>
          
          <option name="c2" value="false">false</option>
          <option name="c2" value="true">true</option>
        </select>
      </div>
      <div className=' q1 row'>
      <label htmlFor="option1"><b>Option3</b></label>
        <input type="text" name="op3" onChange={handleChange} value={data.op3} />
        <select name="c3" id="op1c" onChange={handleChange} value={data.c3}>
          
          <option name="c3" value="false">false</option>
          <option name="c3" value="true">true</option>
        </select>
      </div>
      <div className=' q1 row'>
      <label htmlFor="option1"><b>Option4</b></label>
        <input type="text" name="op4" onChange={handleChange} value={data.op4} />
        <select name="c4" id="op1c" onChange={handleChange} value={data.c4}>
          
          <option name="c4" value="false">false</option>
          <option name="c4" value="true">true</option>
        </select>
      </div>
      <div className='add'>
        <div className=' row subadd'>
        <input type="submit" name="add" value="Add"/>
        </div>
      </div>
        
        
        
        
    </div>  
    </div>
    </div>
    </form>
    
    </>
  )
}
