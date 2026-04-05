import React, { Fragment, useEffect } from 'react'
import '../styles/homeView.css'
import Summary from '../components/Summary';

const HomeView = () => {
  const [tasks, setTasks] = React.useState([]);

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:3200/api/v1/tasks/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok){
        throw new Error('Failed to delete task');
      }else{
        setTasks(tasks.filter(task => task._id !== id));


      }
      
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const updateTaskStatus = async (id, status) => {
    if(!id){
      console.error('Task ID is required to update status');
      return;
    }
    if(typeof status !== 'boolean'){
      console.error('Status must be a boolean value');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3200/api/v1/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      if (!res.ok) {
        throw new Error('Failed to update task status');
      }

      
      setTasks(tasks.map(task => task._id === id ? { ...task, status: !task.status } : task));
      

    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('http://localhost:3200/api/v1/tasks');
        if (!res.ok) throw new Error('Failed to fetch tasks');
        const data = await res.json();
        setTasks(data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);




  return (
    <div>
      <h1 className='title'>Tasks List</h1>
      <ul className="task-list">
        <li className='list-header'>S.No</li>
        <li className='list-header'>Title</li>
        <li className='list-header'>Description</li>
        <li className='list-header'>Action</li>
        <li className='list-header'>Status</li>
        {tasks.map((task, index) => (
          <Fragment key={task._id}>
            <li className='list-item'>{index + 1}</li>
            <li className='list-item'>{task.title}</li>
            <li className='list-item'>{task.description}</li>
            <li className='list-item'><button onClick={() => deleteTask(task._id)} className='delete-btn'>Delete</button></li>
            <li className='list-item'><input className='status-inp' type="checkbox" checked={task.status} onChange={() => updateTaskStatus(task._id, !task.status)} /></li>
          </Fragment>
        ))}
      </ul>

      <Summary tasks={tasks} />
      
    </div>
  )
}

export default HomeView