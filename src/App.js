import React from 'react'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp />}/>
                    {/* <Route path='/search/:id' element={<Search/>}/> */}
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App