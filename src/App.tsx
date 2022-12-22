import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./pages/Post";
import List from "./pages/List";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
    {
      path: "post/:id",
      element: <Post />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
