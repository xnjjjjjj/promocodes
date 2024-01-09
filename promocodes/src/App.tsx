import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Template from "./components/template/Template";
import {
  FORM_URL,
  HOME_URL,
  PAGINATION_URL,
  TEST_URL,
} from "./components/template/header/navigation/navigation-urls";
import Home from "./components/Home/Home";
import TableComponent from "./components/TableComponent/TableComponent";
import Test from "./components/test/Test";
import Form from "./components/Form/Form";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Template>
          <div>
            <Routes>
              <Route path={HOME_URL} Component={Home}>
                Home
              </Route>
              <Route path={PAGINATION_URL} Component={TableComponent}>
                Pagination
              </Route>
              <Route path={TEST_URL} Component={Test}>
                Home
              </Route>
              <Route path={FORM_URL} Component={Form}>
                Home
              </Route>
            </Routes>
          </div>
        </Template>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
