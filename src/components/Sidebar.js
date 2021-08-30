import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink className="sidebar__link" activeClassName="sidebar__active" exact to="/" replace>
            Basic
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" activeClassName="sidebar__active" to="/activation" replace>
            Activation
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" activeClassName="sidebar__active" to="/similitude" replace>
            Similitude
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" activeClassName="sidebar__active" to="/indentation" replace>
            Indentation
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" activeClassName="sidebar__active" to="/sofia" replace>
            SoFIA
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" activeClassName="sidebar__active" to="/maTerialDInVerter" replace>
            MaTerialDInVerter
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__link" activeClassName="sidebar__active" to="/about" replace>
            About
          </NavLink>
        </li>
      </ul>
      <p className="sidebar__creator">© Copyright 2021, Juan Sebastián. All rights reserved.</p>
    </nav>
  );
};
