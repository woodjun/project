import {NavLink, Routes, Route, useRoutes, Navigate} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Message from './pages/Home/Message';
import News from './pages/Home/News';
import Detail from './pages/Home/Message/Detail';

export default function App() {
  // 使用useRoutes就可以生成一个路由表，可以不使用Routes和Route
  const element = useRoutes([
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/home',
      element: <Home />,
      children: [
        {
          path: 'message',
          element: <Message />,
          children: [
            // params传参
            // {
            //   path: 'detail/:id/:title/:content',
            //   element: <Detail />
            // },
            // search传参或state传参
            {
              path: 'detail',
              element: <Detail />
            },
          ]
        },
        {
          path: 'news',
          element: <News />
        },
      ]
    },
    {
      path: '/',
      element: <Navigate to="/about" />
    }
  ])

  function getActiveName({isActive}) {
    return isActive ? 'list-group-item activeName' : 'list-group-item'
  }
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={getActiveName} to="/about">About</NavLink>
            <NavLink className={getActiveName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/home" element={<Home/>}></Route>
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

