import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup  from './pages/Signup'
import  Signin  from './pages/Signin'
import  {Blog}  from './pages/Blog'
import Landingpage from './pages/Landingpage'
import {Publish} from "./pages/Publish"
import {Blogs} from './pages/Blogs'
import { Toaster } from '../src/components/ui/toaster'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landingpage/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App