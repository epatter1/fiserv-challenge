import "./App.css";
import {useState,useEffect} from 'react';
import axios from "axios";
function App() {

  const [userData, setUserData] = useState([]);

 const fetchData = () => {
     axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // handle success
      const userDat = response;
      console.log(userDat);
      setUserData(userDat);
    })
    .catch((err) => {
      // handle error
      console.log(err);
    });
};
  
  useEffect(() => {    
      fetchData()
    },[]);    

  return (
    <div className="App">
      <h1>Fiserv React Coding Challenge</h1>
      {/* Using component lifecycle methods or hooks */}
      {/* API for posts https://jsonplaceholder.typicode.com/posts */}
      {/* 1. Using the API above on init of the app make a request and load users by their userID */}
      {/* 2. Make each use selectable with a button  */}
      {/* 3. Be able to select any user and view only their posts */}

      {/* display userID */}
       {/* {userData.map((user) => {
         return <p>{user.userId}</p>
       })} */}    

      {/* make buttons for every user 
         when button is clicked, show the post for that userId */}

      {/* API for comments https://jsonplaceholder.typicode.com/comments */}
      {/* 1. Using the UserId add all the comments from this API above into state using the postId*/}
    </div>
  );
}

export default App;
