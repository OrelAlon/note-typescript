import { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

import NewNote from "./components/NewNote";

import "bootstrap/dist/css/bootstrap.min.css";

export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};
export type Tag = {
  id: string;
  label: string;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/new' element={<NewNote />}></Route>

        <Route path='/:id'>
          <Route index element={<h1>Show</h1>}></Route>
          <Route path='edit' element={<h1>New</h1>}></Route>
        </Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
