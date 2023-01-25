/*+===================================================================
Samuel Merlin RWS 
File:      App.js (Project: Learn React tutorial, part 2)

  Summary:   app so that when it opens, there are 9 cells on the screen, sort of like how the events page is set up in the wireframe

  Functions: FormRow,  nestGrid.

  Copyright and Legal notices.
  Copyright and Legal notices.
===================================================================+*/
import * as React from 'react'
import GridOne from "./Gird"
import Form from "./Form"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <GridOne/>
      <nav>
        <Link to="/Form">Fill Out a Form!</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App