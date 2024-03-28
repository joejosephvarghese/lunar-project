import { Route, Routes } from "react-router-dom";
import UserSignUpPage from "../pages/userSignuppage";
import UserLoginPage from "../pages/userLoginPage";
 import UserHomePage from "../pages/UserHomePage";
const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="signup" element={<UserSignUpPage />} />
       <Route path="login"  element={<UserLoginPage/>}/>
       <Route path="/"  element={<UserHomePage/>}/>
      </Routes>
    </div>
  );
};

export default UserRouter;
