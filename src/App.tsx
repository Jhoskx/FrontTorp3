import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Feature/Home/Pages/home";

const router = createBrowserRouter([
  {path : '/', element: <Home/>}
]);

function App() {
    return <RouterProvider router={router}/> 

}

export default App
