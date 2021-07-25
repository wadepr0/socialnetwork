import "./App.scss";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import Photos from "./components/Photos/Photos";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Nav state={props.state.navPage}/>
        <div className="app-wrapper-content">
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/photos" render={() => <Photos />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
  );
}

export default App;
