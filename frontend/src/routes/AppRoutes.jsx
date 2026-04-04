import { Routes, Route } from 'react-router-dom'
import HomeView from '../pages/HomeView'
import Login from '../pages/Login'
import AddTaskForm from '../components/AddTaskForm'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/add" element={<AddTaskForm />} />
    </Routes>
  )
}

export default AppRoutes
