import React from "react"
import img1 from "../assests/dice.jpg"
import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="homeContainer">
        <div className="img1">
          <img src={img1} alt="dice image" />
        </div>
        <div className="h-heading">
          <h1>Dice Game</h1>
          <button onClick={() => navigate("/play")}>Play Now</button>
        </div>
      </div>
    </>
  )
}

export default Home;