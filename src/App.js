import "./App.scss";
import Nav from "./components/Nav/Nav";
import Photos from "./components/Photos/Photos";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Component } from "react";
import { connect } from "react-redux";
import { initialiseApp } from "./redux/appReducer";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Preloader from "./components/Users/Loader/Preloader";
import React from "react";
import { Suspense } from "react";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initialiseApp();
  }

  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/photos" render={() => <Photos />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <Login />} />
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialised: state.app.initialised,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initialiseApp })
)(App);
