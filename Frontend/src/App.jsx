
import Home from './Home/Home';
import { Routes , Route } from 'react-router-dom'
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Login from './components/login';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <div className='dark:bg-slate-800 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
