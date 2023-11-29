import React from 'react';
import { useState, useEffect } from 'react';
import { Header, HeaderTitle, NavList, NavButton } from './HomeStyles'
import TaskForm from '../components/TaskForm';
import Notification from './../components/Notification';
import TaskList from '../components/TaskList';

const Home = () => {
	const [formVisible, setFormVisible] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [successMessage, setSuccessMessage] = useState('');

	useEffect(() => {
		// Cargar tareas desde localStorage al montar el componente
		const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
		setTasks(storedTasks);
	  }, []);

	useEffect(() => {
		// Guardar tareas en localStorage cuando cambian
		localStorage.setItem('tasks', JSON.stringify(tasks));
		console.log('La lista se ha actualizado: ', tasks);
	}, [tasks]);

	const handleSubmit = (newTask) => {
		setTasks((tasks) => {
			return [...tasks, newTask];
		});
		setSuccessMessage(`Nueva tarea agregada: ${newTask.name}`);
      	setTimeout(() => setSuccessMessage(null), 3000);
      	setFormVisible(false);
	};

	const handleComplete = (taskId) => {
		setTasks((tasks) => {
			return tasks.map((task) => {
				return task.id === taskId ? { ...task, completed: true } : task;
			});
		});
	};

	const handleDelete = (taskId) => {
		setTasks((tasks) => {
			return tasks.filter((task) => task.id !== taskId);
		});
	};

	return (
		<>
			<Header>
				<HeaderTitle>Lista de tareas &#129534;</HeaderTitle>
				<nav>
					<ul>
						<NavList>
							<NavButton onClick={() => setFormVisible(true)}>Agregar tarea</NavButton>
						</NavList>
					</ul>
				</nav>
			</Header>

			{successMessage && <Notification type='success' message={successMessage} />}

			{formVisible && <TaskForm handleSubmit={handleSubmit} />}

			{tasks.length > 0 && <TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} />}
		</>
	)
}

export default Home;