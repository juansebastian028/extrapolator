import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Header = ({setIsSidebarActive}) => {
    const toggleSidebar = () => {
      setIsSidebarActive((isSidebarActive) => !isSidebarActive);
    }

    return (
        <header className="header">
        <div className="header__content">
          <FontAwesomeIcon className="header__icon" icon={faBars} onClick={toggleSidebar} />
          <h1 className="header__title" >Extrapolator</h1>
        </div>
      </header>
    )
}
