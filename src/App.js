import './App.css';
import { Routes, Route, Navigate, Switch, } from "react-router-dom";
import Layouts from "./layouts";
import VideoList from "./pages/videoList";
import VideoDetail from "./pages/videoDetail";


function App() {

  return (
    <div className='App'>
      <Layouts>
        <Routes>
          <Route path={"/"} exact element={<VideoList/>}></Route>
          <Route path={"/detail"} exact element={<VideoDetail/>}></Route>
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;
