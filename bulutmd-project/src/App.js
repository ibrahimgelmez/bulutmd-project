import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Movies from "./components/Movies";
import Series from "./components/Series";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },{
      path: "movies",
      element: <Movies />
    },{
      path: "series",
      element: <Series />
    }
    
  ]);
  

  return (
  <RouterProvider router={router} />   
  )
}

export default App;
