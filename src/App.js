import { Toaster } from 'react-hot-toast';
import {useRoutes} from 'react-router-dom'
import {useSelector} from 'react-redux'
import routes from './routes';
import Loader from './components/Loader';
import {useState, useEffect} from 'react'



function App() {
  const user = useSelector(state => state.auth.user)
  const showRoutes = useRoutes(routes)
  const [redirect,setRedirect] = useState(false)

useEffect(() => {
  let timeout = setTimeout(() => {
    setRedirect(true)
  }, 2000);
  return () => {
    clearTimeout(timeout)
  }
}, [])

  if (!user && !redirect) {
    return <Loader />
  }

  return (
    <>
    <Toaster position='top-center' />
    {showRoutes}
    </>
  )
}

export default App;
