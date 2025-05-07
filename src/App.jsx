import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home"
import EventAdd from "./pages/EventAdd";
import EventDetail from "./pages/EventDetail";
import NotFound from "./pages/NotFound";
import EventEdit from "./pages/EventEdit";
import UserEvent from "./pages/UserEvent";
import Signup from './pages/Signup'
import Login from './pages/Login'
import Logout from "./pages/Logout";

import Navbar from "./components/NavBar/NavBar";
import EventList from './pages/AllEvents'
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  // function logout(){
  //   localStorage.removeItem('access_token')
  //   localStorage.removeItem('refresh_token')
  //   window.location.href = '/'
  // }

  return (
    <Router>
      {/* <nav>
        <button onClick={logout}>Log Out</button>
      </nav> */}
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoute/>}>
      <Route path='/logout' element={<Logout />} />
          <Route path='events/add' element={<EventAdd/>}/>
          <Route path='events/:id' element={<EventDetail/>}/>
          <Route path='events/:id/edit' element={<EventEdit/>}/>
          <Route path="/myevents" element={<UserEvent />} />
          <Route path="allevents" element={<EventList />} />
      </Route>
          
          <Route path='*' element={<NotFound/>}/>
          {/* <Route path="/not-found" element={<NotFound />} /> */}
          
      </Routes>
    </Router>
  )
}

export default App
