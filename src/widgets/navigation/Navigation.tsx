import React from 'react';

import { NavItem, NavList, UINavigation } from './style';

export function Navigation() {
  return (
    <UINavigation>
      <nav>
        <NavList>
          <NavItem>General</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Skills</NavItem>
          <NavItem>Experience</NavItem>
          <NavItem>Projects</NavItem>
        </NavList>
      </nav>
    </UINavigation>
  );
}
