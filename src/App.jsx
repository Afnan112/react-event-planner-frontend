import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home"
import EventAdd from "./pages/EventAdd";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='events/add' element={<EventAdd/>}/>
      </Routes>
    </Router>
  )
}

export default App
