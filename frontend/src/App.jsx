import { useState } from "react";
import { Button, Container } from "@chakra-ui/react";
import "./App.css";
import UserPage from "./pages/UserPage";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./component/Header";
import PostPage from "./pages/PostPage";
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import LogoutButton from "./component/LogoutButton";
import { Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import CreatePost from "./component/CreatePost";
import ChatPage from "./pages/ChatPage";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  const user = useRecoilValue(userAtom);
  const { pathname } = useLocation();
  console.log(user);
  return (
    <>
    		<Box position={"relative"} w='full'>
        <Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
        <Header />
        <Routes>
          <Route path="/" element={user? <HomePage />: <Navigate to='/auth'/>} />
          <Route path="/auth" element={!user? <AuthPage />: <Navigate to ='/'/>} />
          <Route path="/update" element={user? <UpdateProfilePage />: <Navigate to='/auth'/>} />

          <Route
						path='/:username'
						element={
							user ? (
								<>
									<UserPage />
									<CreatePost />
								</>
							) : (
								<UserPage />
							)
						}
					/>
          <Route path="/:username/post/:pid" element={<PostPage />} />
          <Route path ="/chat" element = {user ? <ChatPage/> : <Navigate to={'/auth'}/> }/>
          <Route path ="/settings" element = {user ? <SettingsPage/> : <Navigate to={'/auth'}/> }/>
        </Routes>
        {/* {user && <LogoutButton/>} */}
        {/* {user && <CreatePost/> } */}
      </Container>
      </Box>
    </>
  );
}

export default App;
