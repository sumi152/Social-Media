import { useSetRecoilState, useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import useShowToast from "./useShowToast";
import { selectedConversationAtom } from "../atoms/messagesAtom";
import {useNavigate} from "react-router-dom"
const useLogout = () => {
  const setUser = useSetRecoilState(userAtom);
  const showToast = useShowToast();
  const [selectedConversation, setSelectedConversation] = useRecoilState(
    selectedConversationAtom
  );
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }

      localStorage.removeItem("user-social");
      setSelectedConversation({
        _id: "",
        userId: "",
        username: "",
        userProfilePic: "",
      });
      setUser(null);
	  navigate('/auth')
	  
    } catch (error) {
      showToast("Error", error, "error");
    }
  };

  return logout;
};

export default useLogout;
