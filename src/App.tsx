import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Feature/Home/Pages/home";
import Login from "./Feature/Login/Component/Login";

const router = createBrowserRouter([
  {path : '/', element: <Home/>},
  {path: '/login', element: <Login/>},
]);

function App() {
    return <RouterProvider router={router}/> 

}

export default App
