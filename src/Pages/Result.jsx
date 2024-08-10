import React from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegCircleXmark } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";

function Result(props){

  const {totalQuestion,finalScore,correctAns,incorrectAns,percentCorrect,percentIncorrect, hideResult} = props

  return (
    <div className=' w-full h-screen flex justify-center items-center'>

      <div className=' w-4/6 h-2/3 border-2 flex rounded-2xl  '>

        <div className=' w-3/5 h-full bg-indigo-600 rounded-l-2xl flex flex-col items-center justify-around  text-white'>

          <h1 className='text-3xl py-2 '>Result</h1>

          <div className=' w-56 h-56 rounded-full justify-self-center shadow-2xl hover:shadow-xl flex items-center justify-center'>
             <div>
               <h1 className='text-4xl'> {finalScore} </h1>
                <h4>Of {totalQuestion}</h4>
             </div>
          </div>

          <div className=' w-full h-1/5'>
            { percentCorrect > 75 ? ( <div> <p className ='text-lg px-4 capitalize'> You have scored good marks in this quiz. Good work Keep it Up. </p></div>) : (<div> <p className ='text-lg px-4 capitalize'> You have scored below 75 % Keep Up the hardow You will be there.</p> </div>)}
          </div>

        </div>

        <div className='w-2/5 h-full rounded-r-3xl ' >
          <h1 className='text-2xl py-2 text-left px-2'>Result Summary</h1>
          <section className='flex flex-col gap-4 w-full h-[80%] items-center justify-around '>
            <div className="summary-box w-[90%] h-12 border-2 border-red-400 flex flex-row items-center gap-2 rounded-md bg-green-200">
              <IoMdCheckmarkCircleOutline className='mx-1 w-10 h-10 text-green-400 '/>
              <span className='text-xl'>Correct Attempted = {correctAns}</span>
             
            </div>
            <div className="summary-box w-[90%] h-12 border-2 border-red-400 flex flex-row items-center gap-2 rounded-md bg-red-200">

            < FaRegCircleXmark className='mx-1 w-8 h-8 text-red-400'/>
              <span className='text-xl'>Wrong Attempted = {incorrectAns}</span>

            </div>
            <div className="summary-box w-[90%] h-12 border-2 border-red-400 flex flex-row items-center gap-2 rounded-md bg-yellow-200">

            < AiOutlinePercentage className='mx-1 w-8 h-8 text-green-400'/>
              <span className='text-xl'> % Correct = {Math.ceil(percentCorrect)}</span>

            </div>
            <div className="summary-box w-[90%] h-12 border-2 border-red-400 flex flex-row items-center gap-2 rounded-md bg-pink-200">

            < AiOutlinePercentage className='mx-1 w-8 h-8 text-red-400'/>
              <span className='text-xl'> % Incorrect {Math.ceil(percentIncorrect)}</span>

            </div>

            <button className='px-8 py-2 border-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-white' onClick={hideResult}>Continue</button>

          </section>
        </div>

      </div>
   
    </div>
  )
}

export default Result;