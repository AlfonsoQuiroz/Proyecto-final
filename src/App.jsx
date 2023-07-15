import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {
// const data = useLoaderData();
// console.log(data);



  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App