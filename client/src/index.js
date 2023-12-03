import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store.js";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import UGProgramsScreen from "./Screens/UGProgramsScreen";
import PrivateRoute from "./Components/PrivateRoute";
import AdminRoute from "./Components/AdminRoute";
import AboutScreen from "./Screens/AboutScreen";
import InstitutionsScreen from "./Screens/InstitutionsScreen";
import ContactScreen from "./Screens/ContactScreen";
import UploadScreen from "./Screens/UploadScreen";
import RegisterScreen from "./Screens/RegisterScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/institutions" element={<InstitutionsScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/ugprograms" element={<UGProgramsScreen />} />
      <Route path="/upload/pyqs" element={<UploadScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      {/* {/* <Route path="" element={<PrivateRoute />}></Route> */}
      {/* <Route path="" element={<AdminRoute />}></Route> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
