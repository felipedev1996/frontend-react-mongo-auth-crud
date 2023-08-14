import { useTasks } from "../../context/tasksContext";


    import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ButtonLink } from "../ui/ButtonLink";

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

 


  return (
    <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteTask(task._id)}>Delete</Button>
          <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{task.description}</p>
      {/* format date */}
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>
   );
  }
    // <Card>
    //   <Card.Header as="h5">Featured</Card.Header>
    //   <Card.Body>
    //     <Card.Title>{task.title}</Card.Title>
    //     <Card.Text>
    //      {task.description}
    //     </Card.Text>
    //     <div className="flex gap-x-2 items-center">
    //       <Button variant=" outline-success"  onClick={() => deleteTask(task._id)}>Delete</Button>
    //      <ButtonLink to={`/tasks/${task._id}`}>Edit</ButtonLink>
    //     </div>
    //   </Card.Body>
    //   <Card.Link>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Link>
    // </Card>
 

export default TaskCard;
   
