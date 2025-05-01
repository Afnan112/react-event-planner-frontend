import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home"
import EventAdd from "./pages/EventAdd";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";
import EventEdit from "./pages/EventEdit";

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='events/add' element={<EventAdd/>}/>
          <Route path='events/:id' element={<EventDetail/>}/>
          <Route path='events/:id/edit' element={<EventEdit/>}/>
          <Route path='*' element={<NotFound/>}/>
          {/* <Route path="/not-found" element={<NotFound />} /> */}
          
      </Routes>
    </Router>
  )
}

export default App
