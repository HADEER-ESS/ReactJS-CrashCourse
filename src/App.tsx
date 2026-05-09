import './App.css'
import Header from './components/Header'
import image from "./assets/hero.png"
import { useState } from 'react'
import CourseGoalList from './components/CourseGoalList'
import GoalForm from './components/GoalForm'

export type CourseGoal = {
  id: number;
  title: string;
  description : string;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(title: string, desc: string){
    const goalItem : CourseGoal = {
      id: Math.random(),
      title: title,
      description: desc
    }
    setGoals(prevState => {
      return [...prevState, goalItem]
    })
  }

  function handleDeleteGoal(id : number){
    setGoals(prevState => prevState.filter(goal => goal.id !== id))
  }

  return (
    <main className="app-shell">
      <div className="app-card">
        <Header image={{src: image, alt: "A List of goals"}}>
          <h1>My Course Goals</h1>
        </Header>
        <GoalForm onAddGoal={handleAddGoal}/>
        <CourseGoalList onDelete={handleDeleteGoal} goals={goals} />
      </div>
    </main>
  )
}

export default App
