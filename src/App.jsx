import { Route, Routes } from 'react-router-dom'
import Home from './screens/home/home'
import Navbar from './components/Navbar/Navbar'
import Users from './screens/users/users'
import UsersCreate from './screens/users-create/users-create'
import UsersDetail from './screens/users-detail/users-detail'
import UsersEdit from './screens/users-edit/users-edit'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/users"
          element={<Users />}
        />
        <Route
          path="/users/create"
          element={<UsersCreate />}
        />
        <Route
          path="/users/:id"
          element={<UsersDetail />}
        />
        <Route
          path="/users/edit/:id"
          element={<UsersEdit />}
        />
      </Routes>
    </>
  )
}

export default App
