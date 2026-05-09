import type { FC, PropsWithChildren } from "react";

// interface CourseGoalProps  {
//     title: string;
//     children: ReactNode;
//     onDelete: (id : number) => void;
// }

type CourseGoalProps  = PropsWithChildren<{title : string, onDelete: (id: number)=> void}>

const CourseGoal : FC<CourseGoalProps> = ({title, children, onDelete}) => {
    const id = 3
    return(
        <article>
            <div>
                <h1>{title}</h1>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>DELETE</button>
        </article>
    )
}

// export default function CourseGoal({title, children, onDelete} : CourseGoalProps) {
//     const id = 3
//     return(
//         <article>
//             <div>
//                 <h1>{title}</h1>
//                 {children}
//             </div>
//             <button onClick={() => onDelete(id)}>DELETE</button>
//         </article>
//     )
// }
export default CourseGoal
