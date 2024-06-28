import { useRecoilValue } from "recoil";
import LoginCard from "../component/LoginCard";
import SignupCard from "../component/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
	const authScreenState = useRecoilValue(authScreenAtom);

	return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
