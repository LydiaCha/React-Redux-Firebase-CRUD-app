import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Auth from "./components/Auth";
import PostContent from "./components/PostContent";
import PostEdit from "./components/PostEdit";
import * as serviceWorker from "./serviceWorker";
// Redux imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import PostCreate from "./components/PostCreate";

// create redux store -> reducers -> actions - actionType | applyMiddleware() make calls from actions

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// provide the store to react

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Loading>
          <div>
            <Switch>
              <Route path="/login" component={Login} exact={true} />
              <Redirect from="/logout" to="/login" />
              <Auth>
                <Navbar />
                <Route path="/:id/edit" component={PostEdit} exact={true} />
                <Route path="/:id" component={PostContent} exact={true} />
                <Route path="/create" component={PostCreate} exact={true} />
                <Route path="/" component={App} exact={true} />
              </Auth>
            </Switch>
          </div>
        </Loading>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

serviceWorker.unregister();
