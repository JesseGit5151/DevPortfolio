import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import UpdatePost from "./pages/UpdatePost"
import CreatePost from "./pages/CreatePost"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/update-post/:postId" element={<UpdatePost />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
