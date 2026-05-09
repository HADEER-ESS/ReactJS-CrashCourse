import './App.css'
import CourseGoal from './components/CourseGoal'
import Header from './components/Header'
import image from "./assets/hero.png"

function App() {

  return (
    <main>
      <Header image={{src: image, alt: "A List of goals"}}>
        <h1>My Course Goals</h1>
      </Header>
      <CourseGoal
        title='Learn React'
        onDelete={()=>{}}
      >
        <p>Build a project using Reactjs and TypeScript</p>
      </CourseGoal>
    </main>
  )
}

export default App
