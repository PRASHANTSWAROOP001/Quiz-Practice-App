import React, { useState, useRef } from "react"
import Result from './Result.jsx'

function Questions(){
  const questions = [
    {
      id:1,
      questionText:"who is current  prime minister of India?",
      answerOptions:["Narendra Modi", "Yogi Adityanath", "Manmohan Singh", "Amit Shah"],
      answer: 0,

    },
    {
      id:2,
      questionText:" who is chief minister of Uttar Pradesh?",
      answerOptions:["Yogi Aditynath", "Akhilesh Yadav", "Mayawati", "Ganesh Balkrishna"],
      answer:0,

    },
    {
      id:3,
      questionText:"Most Populated City of India",
      answerOptions:["Delhi", "Mumbai", "Bengaluru", "Chennai"],
      answer:1,
    },

    {
      "id": 4,
      "questionText": "Who is the current President of India (as of 2024)?",
      "answerOptions": ["Ram Nath Kovind", "Droupadi Murmu", "Pranab Mukherjee", "A. P. J. Abdul Kalam"],
      "answer": 1
    },
    {
      "id": 5,
      "questionText": "What is the capital of India?",
      "answerOptions": ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      "answer": 1
    },
    {
      "id": 6,
      "questionText": "Which Indian state has the highest literacy rate?",
      "answerOptions": ["Kerala", "Tamil Nadu", "Maharashtra", "Gujarat"],
      "answer": 0
    },
    {
      "id": 7,
      "questionText": "Who is known as the 'Father of the Indian Constitution'?",
      "answerOptions": ["Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar", "Sardar Vallabhbhai Patel"],
      "answer": 2
    },
    {
      "id": 8,
      "questionText": "Which house of the Parliament of India is also known as the 'House of the People'?",
      "answerOptions": ["Rajya Sabha", "Lok Sabha", "Vidhan Sabha", "Vidhan Parishad"],
      "answer": 1
    },
    {
      "id": 9,
      "questionText": "Which city is the financial capital of India?",
      "answerOptions": ["Bengaluru", "Mumbai", "Hyderabad", "Chennai"],
      "answer": 1
    },
    {
      "id": 10,
      "questionText": "Who was the first Prime Minister of independent India?",
      "answerOptions": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
      "answer": 1
    },
    {
      "id": 11,
      "questionText": "Which article of the Indian Constitution deals with the Fundamental Rights?",
      "answerOptions": ["Article 12-35", "Article 36-51", "Article 52-78", "Article 79-122"],
      "answer": 0
    },
    {
      "id": 12,
      "questionText": "In which year was the Indian Constitution adopted?",
      "answerOptions": ["1947", "1948", "1949", "1950"],
      "answer": 2
    },
    {
      "id": 13,
      "questionText": "Who is the current Chief Justice of India (as of 2024)?",
      "answerOptions": ["N. V. Ramana", "Sharad Arvind Bobde", "D. Y. Chandrachud", "Uday Umesh Lalit"],
      "answer": 2
    },
    {
      "id": 14,
      "questionText": "Which state in India has the largest area?",
      "answerOptions": ["Maharashtra", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
      "answer": 2
    },
    {
      "id": 15,
      "questionText": "Who is the head of the state government in India?",
      "answerOptions": ["Governor", "Chief Minister", "President", "Prime Minister"],
      "answer": 1
    },
    {
      "id": 16,
      "questionText": "Which Indian freedom fighter was known as the 'Iron Man of India'?",
      "answerOptions": ["Bhagat Singh", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Mahatma Gandhi"],
      "answer": 2
    },
    {
      "id": 17,
      "questionText": "What is the national currency of India?",
      "answerOptions": ["Dollar", "Euro", "Rupee", "Pound"],
      "answer": 2
    },
    {
      "id": 18,
      "questionText": "Who wrote the national anthem of India?",
      "answerOptions": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Sri Aurobindo"],
      "answer": 1
    },
    {
      "id": 19,
      "questionText": "Which is the highest civilian award in India?",
      "answerOptions": ["Padma Shri", "Padma Bhushan", "Padma Vibhushan", "Bharat Ratna"],
      "answer": 3
    },
    {
      "id": 20,
      "questionText": "Which state is known as the 'Land of Five Rivers'?",
      "answerOptions": ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
      "answer": 0
    },
    {
      "id": 21,
      "questionText": "Who is the author of the book 'India Wins Freedom'?",
      "answerOptions": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Maulana Abul Kalam Azad"],
      "answer": 3
    },
    {
      "id": 22,
      "questionText": "Which state in India is the largest producer of tea?",
      "answerOptions": ["West Bengal", "Assam", "Kerala", "Tamil Nadu"],
      "answer": 1
    },
    {
      "id": 23,
      "questionText": "In which year did India gain independence from British rule?",
      "answerOptions": ["1945", "1946", "1947", "1948"],
      "answer": 2
    }
    
  ]

  const [currQuestion, setCurrQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [result, showResult] = useState(false)
  const nextRef = useRef(null)

  const hideResult = ()=>{
    showResult(false)
    setCurrQuestion(0)
    setScore(0)
  }

  const handleClick = (index)=>{
    if(index == questions[currQuestion].answer){
      setScore((score)=>(score+1))
    }
    if (currQuestion < questions.length-1){
      setCurrQuestion((currQuestion)=>(currQuestion+1))
    }else{
      showResult(true)
    } 
  }

  function handlePrev(currIndex){

    if(currIndex > 0){
      setCurrQuestion((currQuestion)=>(currQuestion-1))
      if (nextRef.current.textContent === "Submit"){
        nextRef.current.textContent = "Next"
      }
    }
    else{
      alert("You are already on the first question.\n")
    }
    
  }

  function handleNext(currIndex){
    if (currIndex < questions.length-1){
      setCurrQuestion((currQuestion)=>(currQuestion+1))
    }
    else if ( currIndex == questions.length-1){
      nextRef.current.textContent = "Submit";
    }

    if(nextRef.current.textContent === "Submit"){
      const userSubmit = confirm("Are you want to submit the quiz.\n")
      if (userSubmit){
        showResult((result)=>(result=true))
      }
    }
  }

  const result_obj = {
    totalQuestion: questions.length,
    finalScore: score,
    correctAns: score,
    incorrectAns: questions.length - score,
    percentCorrect: (score / questions.length) * 100,
    percentIncorrect: ((questions.length - score) / questions.length) * 100,
  }
  

  return <>
  <h1>Question Page </h1>

  <div className="Quiz-Container">

    {result? ( <Result {...result_obj} hideResult = {hideResult} />):<>  <div className="question-text text-2xl m-4">
      {questions[currQuestion].questionText.toUpperCase()}
    </div>

    <div className="answer-Option flex flex-col items-center justify-center">
      {questions[currQuestion].answerOptions.map((values,index) => (
          <button className="border-2 w-96 h-12 m-2 text-xl border-green-400 hover:border-green-300 " id={index} onClick={()=>(handleClick(index))} > {values}</button>
      ))}
    </div>
    <div className="flex justify-center gap-52">
    <button className=" border-2 px-6 py-2  border-yellow-400" onClick={()=>(handlePrev(currQuestion))} > Prev </button> 
    <button className=" border-2 px-6 py-2  border-red-400" onClick={()=>(handleNext(currQuestion))} ref={nextRef} > Next </button>
    
    </div>
    
     </> }

  </div>



  </>
}

export default Questions;