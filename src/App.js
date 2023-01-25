/*+===================================================================
Samuel Merlin RWS 
File:      App.js (Project: Learn React tutorial, part 2)

  Summary:   app so that when it opens, there are 9 cells on the screen, sort of like how the events page is set up in the wireframe

  Functions: App,  Home.

  Home()
  Serves as the displayed component for the Home page, the default "/"

  App()
  The router for sites of this application
===================================================================+*/
import * as React from 'react'
import GridOne from "./Gird"
import Form from "./Form"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Home() {
  return (
    <div>
      <GridOne/>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
