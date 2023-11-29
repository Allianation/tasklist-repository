import React from 'react';
import { useState } from 'react';
import { FormContainer, FormTitle, Form, FormInput, FormButton } from './TaskFormStyles';

const TaskForm = ({ handleSubmit }) => {
    const [newTask, setNewTask] = useState({ name: '' });

    const handleInputChange = (event) => {
        setNewTask({ ...newTask, [event.target.name]: event.target.value });
    };

    const addTask = (event) => {
        event.preventDefault();
        handleSubmit({ ...newTask, id: Math.random().toString(36), completed: false });
        setNewTask({ name: '' });
    };

    return (
        <FormContainer>
            <FormTitle>Agregar tarea</FormTitle>
            <Form onSubmit={addTask}>
                <FormInput
                    type="text"
                    name="name"
                    value={newTask.name}
                    onChange={handleInputChange}
                    required
                />
                <FormButton type="submit">Agregar tarea</FormButton>
            </Form>
        </FormContainer>
    )
}

export default TaskForm;