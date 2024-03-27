
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

function App() {

  const router = createBrowserRouter (
    createRoutesFromElements (
      <>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<SignUpPage/>}/>
      </>
    )
  )

  return <RouterProvider router={router}/>;
}

export default App
