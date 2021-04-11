import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Icon } from '../../assets/twitter.svg';
import Button from '../shared/Button';
import './Header.css';

const Header = ({ className, ...props }) => {
  return (
    <header className={classNames('header', className)} {...props}>

      <nav className="header-nav">
        <Button
          //as={NavLink}
          activeClassName="active"
          // activeStyleObject={{}}
          to="/tweet"
          variant="primary"
          className="header-button"
        >
          Tweet
        </Button>
      </nav>
    </header>
  );
};

export default Header;
