import React, { Fragment, useEffect } from 'react'
import '../styles/homeView.css'

const HomeView = () => {
  const [tasks, setTasks] = React.useState([]);

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
      <h1>Tasks List</h1>
      <ul className="task-list">
        <li className='list-header'>S.No</li>
        <li className='list-header'>Title</li>
        <li className='list-header'>Description</li>
        <li className='list-header'>Action</li>
        {tasks.map((task, index) => (
          <Fragment key={task._id}>
            <li className='list-item'>{index + 1}</li>
            <li className='list-item'>{task.title}</li>
            <li className='list-item'>{task.description}</li>
            <li className='list-item'><button  className='delete-btn'>Delete</button></li>
          </Fragment>
        ))}
      </ul>
      
    </div>
  )
}

export default HomeView