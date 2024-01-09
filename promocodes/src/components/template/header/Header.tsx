import React from "react";
import {
  FORM_URL,
  HOME_URL,
  PAGINATION_URL,
  TEST_URL,
} from "./navigation/navigation-urls";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuth } from "../../../context/AuthContext";

const Header = () => {
  const { isAuthenticated, login, logout } = useAuth();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login();
    }
  };
  return (
    <div>
      <Link to={HOME_URL}>Главная</Link>
      <Link to={PAGINATION_URL}>Таблица</Link>
      <Link to={FORM_URL}>Форма</Link>
      <Link to={TEST_URL}>Тестовая страница</Link>

      <Button onClick={handleAuthClick}>
        {isAuthenticated ? "Выйти" : "Войти"}
      </Button>
    </div>
  );
};

export default Header;
