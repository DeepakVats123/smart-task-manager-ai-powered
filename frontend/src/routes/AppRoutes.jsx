import { Routes, Route } from 'react-router-dom'
import HomeView from '../pages/HomeView'
import Login from '../pages/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
