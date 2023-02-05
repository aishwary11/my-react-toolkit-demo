import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Abouts } from "./components/About";
import { postInfo } from "./slices/postSlice";
import { userInfo } from "./slices/userSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postInfo());
    dispatch(userInfo());
  }, []);
  const postSelect = useSelector((state) => state.post);
  const userSelect = useSelector((state) => state.user);
  return (
    <div className="App">
      <ToastContainer />
      <p>User</p>
      {userSelect.map((e, i) => <p key={i}>{e.id} {e.name}</p>)}
      <p>Post</p>
      {postSelect.map((e, i) => <p key={i}>{e.id} {e.title}</p>)}
      <Abouts />
    </div>
  );
}
