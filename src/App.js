import React, { useEffect, useState } from 'react';
import './App.css';
import { Main } from './Components/Main/Main';
import { LoadBlog } from './Api/Api'
import { Loader } from './Components/Loader/Loader';

function App() {

  const [blogs, setBlogs] = useState([])
  const [filtredBlogs, setFiltredBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initBlog = async () => {
      const blog = await LoadBlog();

      setBlogs(blog);
      if (filtredBlogs.length === 0) {
        setFiltredBlogs(blog);
      }
    };

    initBlog();
    setIsLoading(false)
  }, [])

  return (
    <div className="App">
      {isLoading ?
        <Loader />
        :
        <Main
          filtredBlogs={filtredBlogs}
          setFiltredBlogs={setFiltredBlogs}
          blogs={blogs}
        />
      }
    </div>
  );
}

export default App;
