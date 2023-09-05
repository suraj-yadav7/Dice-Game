import React, { useState, useEffect } from "react";
import dice_1 from "../assests/dice_1.png"
import dice_2 from "../assests/dice_2.png"
import dice_3 from "../assests/dice_3.png"
import dice_4 from "../assests/dice_4.png"
import dice_5 from "../assests/dice_5.png"
import dice_6 from "../assests/dice_6.png"

export default function Play() {

  // total score
  const [randomNum, setRandomNum] = useState(0)
  //Selecting number
  const [selectNum, setSelectNum] = useState(0)
  const [showNum, setShowNum] = useState(0)
  const [enablePlay, setEnablePlay] = useState(false)
  const [showRule, setShowRule] = useState(false)
  const [message, setMessage] = useState("")

  // option choose
  const [optionSel, SetOptionSel] = useState(false)


  let arr1 = [1, 2, 3, 4, 5, 6]
  const dice_img = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6]

  const handlePlay = () => {
    setEnablePlay(false)
    const val = Math.floor((Math.random() * 6) + 1)
    setShowNum(val)
    console.log("the val random", val)
    if (selectNum == val) {
      console.log("both numbers are equal", selectNum + " " + val)
      setMessage("Number's Matched")
      setRandomNum((randomNum) => randomNum + val)
    }
    else {
      setMessage("Number's Not Matched")
      if (randomNum > 0) {
        setRandomNum(randomNum - 1)
      }
    }
  }
  useEffect(() => {
    setEnablePlay(false)
    setMessage("Let try your Luck")
  }, [])


  return (
    <>
      <div className="playContianer">
        <div className="firstSection">
          <div className="totalScore">
            <h1>{randomNum}</h1>
            <h3>Total Score</h3>
          </div>
          <div className="numbers">
            {!enablePlay ? <p style={{ color: "red", marginBottom: "10px" }}>First Select Number Here</p> : <p style={{ marginBottom: "10px" }} > Number Selected : {selectNum} </p>}
            {
              arr1.map((elem, index) => (
                <button className={"selectBtn "} onClick={() => { setSelectNum(elem), setEnablePlay(true), SetOptionSel(!optionSel), setMessage("Let try your Luck") }} key={index}> {elem}</button>
              ))
            }
            <h3>Select Number</h3>
          </div>
        </div>
        <div className="secondSection">
          <div className="playBtn">
            <p>{message}</p>
            <div className="diceImg">
              <img src={showNum == 0 ? dice_img[0] : dice_img[showNum - 1]} />
            </div>
            <h4>Last Cube Number: {showNum}</h4>
            <button disabled={enablePlay ? false : true} onClick={() => handlePlay()} >Click to roll Dice</button>
            <h4>Click on the above Dice to Roll</h4>
            <button className="resetBtn" onClick={() => setRandomNum(0)} > Reset Score</button>
            <button className="ruleBtn" onClick={() => setShowRule(!showRule)}>Show Rules</button>
          </div>
        </div>
        {
          showRule ? <Rule /> : null
        }
      </div>
    </>
  )
}

const Rule = () => {
  return (
    <>
      <div className="ruleContianer">
        <h3>How to play dice game</h3>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After click on dice if selected number is equal to dice number you will get same point as dice, if you get wrong guess then 1 points will be deducted</p>
      </div>
    </>
  )
};