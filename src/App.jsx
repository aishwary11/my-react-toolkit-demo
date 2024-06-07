import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
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
      <h1>User</h1>
      {userData.map((e) => <p key={e.id}>{e.id} {e.name}</p>)}
      <h1>Post</h1>
      {postData.map((e) => <p key={e.id}>{e.id} {e.title}</p>)}
    </div>
  );
}
