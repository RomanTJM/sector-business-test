import React, { useEffect, useState } from 'react';
import './App.css';
import { Main } from './Components/Main/Main';
import { LoadBlog } from './Api/Api'

function App() {

  const [blogs, setBlogs] = useState([])
  const [filtredBlogs, setFiltredBlogs] = useState([])
  
  useEffect(() => {
    const initBlog = async () => {
      const blog = await LoadBlog();

      setBlogs(blog);
      if (filtredBlogs.length === 0) {
        setFiltredBlogs(blog);
      }
    };

    initBlog();
  }, [])

  return (
    <div className="App">
      <Main
        filtredBlogs={filtredBlogs}
        setFiltredBlogs={setFiltredBlogs}
        blogs={blogs}
      />
    </div>
  );
}

export default App;
