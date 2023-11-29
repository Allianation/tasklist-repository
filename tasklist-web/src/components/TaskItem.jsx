import React from 'react';
import { DivItem, DivName, DivNameCompleted, ButtonComplete, ButtonDelete } from './TaskItemStyles';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  return (
    <DivItem>
      {!task.completed 
        ? <DivName>{task.name}</DivName> 
        : <DivNameCompleted>{task.name}</DivNameCompleted>
      }
      {!task.completed && <ButtonComplete onClick={() => handleComplete(task.id)}>Completar</ButtonComplete>}
      <ButtonDelete onClick={() => handleDelete(task.id)}>Eliminar</ButtonDelete>
    </DivItem>
  )
}

export default TaskItem;