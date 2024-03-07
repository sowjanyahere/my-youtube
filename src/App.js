import './App.css';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import BodyCom from './components/BodyCom';
import Header from './components/HeaderCom';
import MainContainer from "./components/MainContanier";
import WatchPage from './components/WatchPage'


/**
Head 
Body
Sidebar
  MenuItems
MainContainer
  ButtonsList
  VideoContainer
  VedioCard
 */
const appRouter = createBrowserRouter([{
  path: '/',
  element: <BodyCom/>,
  children:[
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    }
  ]
}]);

function App() {
  return (   
    <div> 
      <Header/>  
      <RouterProvider router={appRouter}/>   
    </div>
  );  
}


export default App;
