import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Icon } from '../../assets/twitter.svg';
import './Header.css';
import Button from '../shared/Button';

const Header = ({ className, isLogged, ...props }) => {
  return (
    <header className={classNames('header', className)} {...props}>
      {/* <Link to="/"> */}
      <div className="header-logo">
        <Icon width="32" height="32" />
      </div>
      {/* </Link> */}
      <nav className="header-nav">
        <Button
          //   as={Link}
          to="/tweet"
          variant="primary"
          className="header-button"
        >
          Tweet
        </Button>
        {isLogged ?
          <Button
            className="header-button"

          >
            Log out
          </Button>
          :
          <Button className="header-button">
            Login
          </Button>
        }
      </nav>
    </header>
  );
};

export default Header;
