import { Routes, Route } from 'react-router-dom';
import Nav from '../Components/Nav'
import Home from '../Components/Home'
import './App.css'
import SelectArticle from '../Components/SelectArticle'
import { useState, useEffect } from "react"
import { getArticles } from "../Components/api"
import UserContext from '../Components/UserContext';
import Profile from '../Components/Profile';
import ChangeUser from '../Components/ChangeUser' 
import TopicList from '../Components/TopicsList';
import Topic from '../Components/Topic';

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    username: 'tickle122',
    name: "Tom Tickle",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953"
  })

  const [articles, setArticles] = useState([])
  useEffect(() =>  {
      getArticles().then((articleData) => {
          setArticles(articleData);
      });
}, [])

  return (
    <>  
      <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
        <Nav />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home articles={articles} setArticles={setArticles}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-user" element={<ChangeUser />} /> 
          <Route path="/articles/:article_id" element={<SelectArticle articles={articles}/>} />
          <Route path="/topics" element={<TopicList />}/>
          <Route path="/topic/:topic" element={<Topic />}/>
        </Routes>
      </UserContext.Provider>
    </>
  )

}
   
export default App
