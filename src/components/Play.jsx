import React from "react";
import {useState} from "react";

export default function Play() {

  const [randomNum, setRandomNum] = useState(0)
  const [selectNum, setSelectNum] = useState(0)
  const [showNum, setShowNum] = useState(0)
  const [showRule, setShowRule] = useState(false)

  console.log("the select num", selectNum)
  
  let arr1 = [1, 2, 3, 4, 5, 6]
  
  const handlePlay =()=>{
    const val=Math.floor(Math.random() * 7)
    setShowNum(val)
    console.log("the val random", val)
    if(selectNum == val){
      console.log("both numbers are equal", selectNum +" "+ val)
      setRandomNum(randomNum-selectNum)
    }
    else{
      setRandomNum((randomNum)=>randomNum+val)
    }
    
  }

  return (
    <>
      <div className="playContianer">
        <div className="firstSection">
          <div className="totalScore">
            <h1>{randomNum<=0? 0 : randomNum}</h1>
            <h3>Total Score</h3>
          </div>
          <div className="numbers">
            {
              arr1.map((elem, index) => (
                <button className="selectBtn" onClick={()=> setSelectNum(elem)} key={index}> {elem}</button>
              ))
            }
            <h3>Select Number</h3>
          </div>
        </div>
        <div className="secondSection">
          <div className="playBtn">
            <h4>Cube Number: {showNum}</h4>
              <button  onClick={handlePlay}>Click to roll Dice</button>
              <h4>Click on the above Dice to Roll</h4>
              <button > Reset Score</button>
              <button>Show Rules</button>
          </div>
        </div>
      </div>
    </>
  )
}

