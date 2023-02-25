import { Toaster } from 'react-hot-toast';
import {useRoutes} from 'react-router-dom'
import {useSelector} from 'react-redux'
import routes from './routes';
import Loader from './components/Loader';



function App() {
  const user = useSelector(state => state.auth.user)
  const showRoutes = useRoutes(routes)


  if (user == null) {
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
