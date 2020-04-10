import React from 'react';
import './Nav.css';


class Nav extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (

      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li><a href="/">Main Page</a></li>
              <li><a href="'/about">About us</a></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }
}

export default Nav;
