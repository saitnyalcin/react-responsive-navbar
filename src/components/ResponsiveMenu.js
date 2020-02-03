import React, { Component } from 'react';
import NavBar from 'react-responsive-menubar/lib/NavBar';

export default class ResponsiveMenu extends Component {
  state = { showSideNav: false };

  handleSideNavToggle = () => {
    this.setState(currentState => {
      return { showSideNav: !currentState.showSideNav };
    });
  };

  render() {
    //Position of navbar container (header in this case) should be set torelative.
    return (
      <header className="header" style={{ position: 'relative' }}>
        <NavBar
          handleSideNavToggle={this.handleSideNavToggle}
          logo={'https://picsum.photos/200/300?image=10'}
          showSideNav={this.state.showSideNav}
          logoStyles={{ height: '65px', width: '85px' }}
          navBarStyles={{ boxShadow: 'none' }}
          linkStyles={{ color: 'green', fontWeight: 'bold' }}
        >
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>
          <a href="/">Random Link</a>
          <a href="/">Link Finder</a>
          <a href="/">Home Page</a>
          <a href="/">Sample Link</a>
          <a href="/">Sign in or join</a>
          <a href="/">Help</a>
        </NavBar>
      </header>
    );
  }
}
