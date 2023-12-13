import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Full from './Full'
import Data from './Data'
import Cyber from './Cyber'
import Career from './Career'
import All from './All'

function App() {
  const [count, setCount] = useState(0);
  const list=[{
    id:1,
    topic:"7 difference between ui and ux designers",
    content:"When navigating the path of digital creation, it’s quite a task to list the differences between UI UX designers and front-end developers. They often seem to be walking the same path due to their collaborative roles in crafting digital products, yet they play fundamentally different roles."
},
{
    id:2,
    topic:" 33 interview questions ",
    content:"Are you dreaming of becoming a UI/UX designer? Well, you’re in the right place! In today’s tech world, UI (User Interface) and UX (User Experience) designers are super important. They make sure the apps and websites we use every day are easy and fun to use. Because this job is so important, lots of people want to do it, and that means it’s not always easy to get a job in this field."
},
{
    id:3,
    topic:" 8 importatnt things ui/ux designers should know ",
    content:"Are you dreaming of becoming a UI/UX designer? Well, you’re in the right place! In today’s tech world, UI (User Interface) and UX (User Experience) designers are super important. They make sure the apps and websites we use every day are easy and fun to use. Because this job is so important, lots of people want to do it, and that means it’s not always easy to get a job in this field."
},
{
    id:4,
    topic:" which is the best career for you ",
    content:"Are you dreaming of becoming a UI/UX designer? Well, you’re in the right place! In today’s tech world, UI (User Interface) and UX (User Experience) designers are super important. They make sure the apps and websites we use every day are easy and fun to use. Because this job is so important, lots of people want to do it, and that means it’s not always easy to get a job in this field."
},
{
    id:5,
    topic:" 12 unique project ideas",
    content:"Are you dreaming of becoming a UI/UX designer? Well, you’re in the right place! In today’s tech world, UI (User Interface) and UX (User Experience) designers are super important. They make sure the apps and websites we use every day are easy and fun to use. Because this job is so important, lots of people want to do it, and that means it’s not always easy to get a job in this field."
},
{
    id:6,
    topic:" what does a ui/ux designer do",
    content:"Are you dreaming of becoming a UI/UX designer? Well, you’re in the right place! In today’s tech world, UI (User Interface) and UX (User Experience) designers are super important. They make sure the apps and websites we use every day are easy and fun to use. Because this job is so important, lots of people want to do it, and that means it’s not always easy to get a job in this field."
},
{
    id:7,
    topic:" 8 steps to become an ui/ux designer",
    content:"Are you dreaming of becoming a UI/UX designer? Well, you’re in the right place! In today’s tech world, UI (User Interface) and UX (User Experience) designers are super important. They make sure the apps and websites we use every day are easy and fun to use. Because this job is so important, lots of people want to do it, and that means it’s not always easy to get a job in this field."
},

]
const fsd=[
  {
    id:1,
    topic:"way to assess soft skills",
    constent:"top 10 ways to assess your soft skills"
  },
  {
    id:2,
    topic:"diffetrences",
    content:"Top Differences: Full Stack Developer vs Software Engineer 2023"
  },
  {
    id:3,
    topic:"designing",
    content:"Horizontal vs Vertical Scaling for Efficient System Design"
  },
  {
    id:4,
    topic:"books for fullstack developement",
    content:"Best Books to Learn Full-Stack Development"
  },
  {
    id:5,
    topic:"placements",
    content:"Top 10 Product-Based Companies for Full-Stack Developers [2023]"
  },
  {
    id:6,
    topic:"online course",
    content:"7 Best Full-Stack Development Online Courses [2023]"
  },

]

  

  return (
    <Router>
      <Routes>
      <Route exact path='/'element={<All list={list}/>}></Route>
        <Route exact path='/full'element={<Full fsd={fsd}/>}></Route>
        <Route exact path='/data'element={<Data fsd={fsd}/>}></Route>
        <Route exact path='/cyber'element={<Cyber fsd={fsd}/>}></Route>
        <Route exact path='/career'element={<Career fsd={fsd}/>}></Route>
      </Routes>
    </Router>

  )
}

export default App
