import axios from "axios";

export const LoadBlog = async () => 
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data)
        
        .catch((error) => {
          console.log(error);
        });