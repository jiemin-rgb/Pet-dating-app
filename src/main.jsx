import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Root from "./routes/root";
import Match from "./routes/match";
import Chat from "./routes/chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "match",
    element: <Match />,
  },{
    path: "chat",
    element: <Chat />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
