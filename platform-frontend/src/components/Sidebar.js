import React, { useState } from "react";
import { FaBars, FaUserAlt, FaRegChartBar } from "react-icons/fa";
import { TbLayoutGrid, TbLayoutGridAdd, TbReport } from "react-icons/tb";
import { MdQuiz, MdQueue } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/adminProfile",
      name: "Профиль",
      icon: <FaUserAlt />,
    },
    {
      path: "/adminCategories",
      name: "Предметы",
      icon: <TbLayoutGrid />,
    },
    {
      path: "/adminAddCategory",
      name: "Выбрать предмет",
      icon: <TbLayoutGridAdd />,
    },
    {
      path: "/adminQuizzes",
      name: "Вопросы",
      icon: <MdQuiz />,
    },
    {
      path: "/adminAddQuiz",
      name: "Выбрать вопрос",
      icon: <MdQueue />,
    },
    {
      path: "/adminallResult",
      name: "Результаты",
      icon: <TbReport/>,
    },
  ];
  return (
    <div
      className="container"
      style={{ display: "flex", width: "auto", margin: "0px", padding: "0px" }}
    >
      <div style={{ width: isOpen ? "12em" : "3em" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="sidemenulink"
            activeclassname="sidemenulink-active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
