import React, { useEffect, useState } from 'react';
import './App.css';
import { Main } from './Components/Main/Main';
import { LoadBlog } from './Api/Api'

function App() {

  const [blogs, setBlogs] = useState([])
  const [filtredBlogs, setFiltredBlogs] = useState([])
  const [directionSort, setDirectionSort] = useState(true)
 

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

  // Поиск

  const onSearchHandler = (substr) => {
    const newBlog = blogs.filter(
      (blog) => blog.title.includes(substr) || blog.body.includes(substr)
    );
    setFiltredBlogs(newBlog);
  };

      // сортировка

      const sortData = (field) => {

        const copyData = filtredBlogs.concat();

        let sortData;

        if (directionSort) {
          sortData = copyData.sort(
            (a, b) => {return a[field] > b[field] ? 1 : -1}
          )
        } sortData = copyData.reverse(
          (a, b) => {return a[field] > b[field] ? 1 : -1}
        )


        setFiltredBlogs(sortData)
        setDirectionSort(!directionSort)
    }


  return (
    <div className="App">
      <Main
        filtredBlogs={filtredBlogs}
        onSearchHandler={onSearchHandler}
        sortData={sortData}
      />
    </div>
  );
}

export default App;
