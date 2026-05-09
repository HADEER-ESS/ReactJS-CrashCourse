import CourseGoal from "./CourseGoal";
import type { CourseGoal as CourseGoalType} from "../App";

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDelete: (id: number) => void
}

export default function CourseGoalList(
    {goals, onDelete}: CourseGoalListProps
){

    return(
        <ul>
            {goals.map(goal => 
                <li key={goal.id}>
                    <CourseGoal
                        title={goal.title}
                        id={goal.id}
                        onDelete={onDelete}
                    >
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            )}
        </ul>
    )
}
