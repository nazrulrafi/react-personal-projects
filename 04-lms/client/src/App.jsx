import './App.css'
import {Route, Routes, useMatch} from "react-router-dom";
import Home from "./pages/students/Home.jsx";
import CourseList from "./pages/students/CourseList.jsx";
import CourseDetails from "./pages/students/CourseDetails.jsx";
import MyEnrollment from "./pages/students/MyEnrollment.jsx";
import Player from "./pages/students/Player.jsx";
import Loading from "./components/students/Loading.jsx";
import Educator from "./pages/educator/Educator.jsx";
import Dashboard from "./pages/educator/Dashboard.jsx";
import AddCourse from "./pages/educator/AddCourse.jsx";
import MyCourses from "./pages/educator/MyCourses.jsx";
import StudentEnrolled from "./pages/educator/StudentEnrolled.jsx";
import Navbar from "./components/students/Navbar.jsx";
import "quill/dist/quill.snow.css";


function App() {
    const isEducatorRoute = useMatch("/educator/*")
  return (
    <div className="text-default min-h-screen bg-white">
        {!isEducatorRoute && <Navbar />}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/course-list" element={<CourseList/>} />
          <Route path="/course-list/:input" element={<CourseList/>} />
          <Route path="/course/:id" element={<CourseDetails/>} />
          <Route path="/my-enrollments" element={<MyEnrollment/>} />
          <Route path="/player/:courseId" element={<Player/>} />
          <Route path="/loading/:path" element={<Loading/>} />
          <Route path="/educator" element={<Educator/>}>
              <Route path="/educator" element={<Dashboard/>} />
              <Route path="add-course" element={<AddCourse/>} />
              <Route path="my-course" element={<MyCourses/>} />
              <Route path="student-enrolled" element={<StudentEnrolled/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
