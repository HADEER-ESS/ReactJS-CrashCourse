import CourseGoal from "./CourseGoal";
import type { CourseGoal as CourseGoalType} from "../App";
import InfoBox from "./InfoBox";
import type { ReactNode } from "react";

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDelete: (id: number) => void
}

export default function CourseGoalList(
    {goals, onDelete}: CourseGoalListProps
){
    if(goals.length === 0){
        return <InfoBox mode='hint'>
            You have no course goal yet. please add some!
        </InfoBox>
    }
    let warningTag : ReactNode;

    if(goals.length >= 4){
        warningTag = <InfoBox severity='high' mode='warning'>
            You add a lot of courses. please check them to finish before add more!
        </InfoBox>
    }

    return(
        <>
        {warningTag}
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
        </>
    )
}
