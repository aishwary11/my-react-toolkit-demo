import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Abouts } from "./components/About";
import { postInfo } from "./slices/postSlice";
import { userInfo } from "./slices/userSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await Promise.all([dispatch(postInfo()), dispatch(userInfo())]);
    })();
  }, [dispatch]);

  const userData = useSelector((state) => state.user);
  const postData = useSelector((state) => state.post);

  return (
    <div className="App">
      <ToastContainer theme="colored" position="top-right" duration={3000} />
      <p>User</p>
      {userData.map((e) => <p key={e.id}>{e.id} {e.name}</p>)}
      <p>Post</p>
      {postData.map((e) => <p key={e.id}>{e.id} {e.title}</p>)}
      <Abouts />
    </div>
  );
}
