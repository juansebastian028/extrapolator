import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = ({setIsSidebarActive}) => {
  const toggleSidebar = () => {
    setIsSidebarActive((isSidebarActive) => !isSidebarActive);
  };
  return (
    <nav className="sidebar">
      <FontAwesomeIcon className="sidebar__icon" icon={faTimes} onClick={toggleSidebar} />
      <ul className="sidebar__list">
        <li className="sidebar__item">
          {" "}
          <Link className="sidebar__link" to="/">
            Basic
          </Link>
        </li>
        <li className="sidebar__item">
          {" "}
          <Link className="sidebar__link" to="/activation">
            Activation
          </Link>
        </li>
        <li className="sidebar__item">
          {" "}
          <Link className="sidebar__link" to="/similitude">
            Similitude
          </Link>
        </li>
        <li className="sidebar__item">
          {" "}
          <Link className="sidebar__link" to="/indentation">
            Indentation
          </Link>
        </li>
        <li className="sidebar__item">
          {" "}
          <Link className="sidebar__link" to="/sofia">
            SoFIA
          </Link>
        </li>
        <li className="sidebar__item">
          {" "}
          <Link className="sidebar__link" to="/maTerialDInVerter">
            MaTerialDInVerter
          </Link>
        </li>
      </ul>
    </nav>
  );
};
