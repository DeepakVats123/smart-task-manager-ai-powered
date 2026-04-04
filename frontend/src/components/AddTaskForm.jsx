import React, { useState } from "react";
import '../styles/addTaskForm.css'
import {useNavigate} from 'react-router-dom'
const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title || !description){
      alert('Please fill in all fields');
      return;
    }
    
    try {
     const res = await fetch('http://localhost:3200/api/v1/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      });

      if(!res) throw new Error('Failed to add task');

      const data = await res.json();
      console.log('Task added successfully:', data);
      setTitle('');
      setDescription('');
      navigate("/");
      

    } catch (error) {
      console.error('Error adding task:', error);
    }
    
  };

  return (
    <div className="container">
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label> <br />
        <input onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name="title" placeholder="Enter task title" value={title}  /> <br />
        <label htmlFor="description">Description:</label> <br />
        <textarea onChange={(e)=>setDescription(e.target.value)} id="description" name="description" placeholder='Enter task description' value={description}></textarea><br />
        <button type="submit">Add New Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
