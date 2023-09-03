import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Play from "./components/Play"
import Rules from "./components/Rules"


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/play" element={<Play />} />
          <Route exact path="/rules" element={<Rules />} />
        </Routes>
      </Router>
    </>
  )
}
