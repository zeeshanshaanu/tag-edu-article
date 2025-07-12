import { useEffect } from "react";
import AppRoutes from "./Routes/AppRoutes";
import { AuthtokenFtn } from "./Store/AuthSlice/AuthSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

///////////////////////////////////////////////////////
function App() {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/admin/login", {
        email: "zeeshanzahoor409@gmail.com",
        password: "zee@123",
      });

      // console.log(response?.data);
      const token = response?.data?.token;
 
      if (token) {
        dispatch(AuthtokenFtn(token));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
