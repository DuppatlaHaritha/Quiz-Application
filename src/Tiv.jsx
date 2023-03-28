import { duration } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./pyth.css"


function Trivi({
    data,
    questioNumber,
    setStop,
    setQuestionNumber,
    score,
    setScore,
    nQuestions,
    setNquestions
}){
    
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer")
    const [click,setClick] = useState()
    //const [questionNumber1, setQuestionNumber1] =useState(1);
    useEffect(() => {
        setQuestion(data[questioNumber-1]);
    },[data, questioNumber === data.length]);
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const  handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(1000, () =>
            setClassName(a.correct ? "answer correct" : "answer wrong")
        );
        delay(3000, () => {
            
            
            if (a.correct) {
                //delay(1000, () => {
                setQuestionNumber((prev) => prev + 1);
                setScore(score+1);
                setNquestions(nQuestions+1);
                setSelectedAnswer(null);
                //});
            }else{
                if (questioNumber !== data.length){
                    setNquestions(nQuestions+1);
                    setQuestionNumber((prev) => prev + 1);
                }else{
                    setStop(true);
                }
            }

            

        })
        

    };
    return(
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className: "answer"} onClick={() => handleClick(a)} > {a.text}</div>
                ))}
            </div>
        </div>
    )
}
export default Trivi;

