import React from 'react'
import {Route,createBrowserRouter ,createRoutesFromElements, RouterProvider, Router} from 'react-router-dom'
// Update these paths to match your filesystem: 'component' vs 'components' and filename case
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import JobPages from './pages/JobPages.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobPages/>}/>


    </Route>
  )
)


const App = () => {
  return (
<RouterProvider router={router}/>
  );
}

export default App