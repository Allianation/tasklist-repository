import React from 'react';
import { ListContainer, ListTitle } from './TaskListStyles';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <ListContainer>
        <ListTitle>Lista de tareas</ListTitle>

        {tasks.map((task) => (
            <TaskItem 
                key={task.id} 
                task={task} 
                handleComplete={handleComplete} 
                handleDelete={handleDelete} 
            />
        ))}
    </ListContainer>
  )
}

export default TaskList;