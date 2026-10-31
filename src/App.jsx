import { Navigate, Route, Routes } from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import Profile from './components/ForgotPassword/Profile/profile.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="/forgot-password" replace />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
