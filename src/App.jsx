import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home"
import EventAdd from "./pages/EventAdd";
import EventDetail from "./pages/EventDetail";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='events/add' element={<EventAdd/>}/>
          <Route path='events/:id' element={<EventDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App
