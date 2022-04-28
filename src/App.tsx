import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import { AuthContextProvider } from "./contexts/AuthContext"

import { NewRoom } from "./pages/NewRoom"
import { Home } from "./pages/Home"
import { Room } from "./pages/Room"
import { AdminRoom } from "./pages/AdminRoom"

export function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />

          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}
