import { useRef, type SubmitEvent } from "react"

type GoalFormProps = {
    onAddGoal: (goal: string, summary: string) => void
}

export default function GoalForm({onAddGoal} : GoalFormProps) {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(event : SubmitEvent<HTMLFormElement>){
        event.preventDefault()

        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value

        event.currentTarget.reset()
        
        onAddGoal(enteredGoal, enteredSummary)
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input ref={goal} id="goal" type="text"/>
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input ref={summary} id="summary" type="text"/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}