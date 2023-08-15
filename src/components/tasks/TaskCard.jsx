import { useTasks } from "../../context/tasksContext";



import { ButtonLink } from "../ui/ButtonLink";


export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

 



  return (
    
<div>
   
    
    <div class="flex flex-col items-center border min-w-1/4 border-gray-200 rounded-lg p-2 ">
        <img class="  w-20 h-20 mb-3 mr-2 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class=" max-w-md mb-1 text-xl font-medium tracking-tight text-white">{task.title}</h5>
        <span class="text-md text-purple-500 dark:text-gray-400">{task.description}</span>
        <span class="text-ms text-gray-500 dark:text-gray-400">{task.date}</span>
        <div class="flex  mt-4 gap-4">
           
            <div className="w-1/2"><ButtonLink to={`/tasks/`} classname={" text-blue-500 hover:text-blue-700  font-bold py-2 px-4 rounded"}  onClick={() => deleteTask(task._id)}>Delete</ButtonLink></div>
          <div className="w-50%">
            <ButtonLink to={`/tasks/${task._id}`} classname=" text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded" >Edit</ButtonLink>
          </div>
         
        </div>
    </div>
</div>

   
   );
  }
   
   