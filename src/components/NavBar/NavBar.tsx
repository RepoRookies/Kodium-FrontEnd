import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinkEffect from './NavLinkEffect.tsx';
import logo from '../../assets/images/kodium-logo.png';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import Search from '../SearchBar/SearchBar.tsx';

interface NavigationElement {
  label: string;
  path: string;
}

const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [active, setActive] = useState<string>('Home');

  const navigationElements: NavigationElement[] = [
    { label: 'Home', path: '/' },
    { label: 'Problems', path: '/problems' },
    { label: 'Contest', path: '/contest' },
    { label: 'About', path: '/about' },
  ];

  // setIsLoggedIn(true);

  return (
    <div className="sticky flex flex-row gap-8 justify-between items-center z-10 top-0 w-full px-4 py-2 bg-primary text-primary-foreground">
      <div className="flex flex-row gap-4">
        <div className="after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-silver/80"></div>
        <div className="px-8">
          <img className="h-9" src={logo} alt="Kodium @IIITK" title="Kodium @IIITK" />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationElements.map((element, index) => (
              <NavLinkEffect isActive={active === element.label} color="gold" key={index}>
                <Link to={element.path}>
                  <NavigationMenuItem
                    onClick={() => setActive(element.label)}
                    className={navigationMenuTriggerStyle()}
                  >
                    {element.label}
                  </NavigationMenuItem>
                </Link>
              </NavLinkEffect>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row justify-end pr-4">
        <Search />
        <div className="">
          {isLoggedIn ? (
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <Button variant="gold" size="sm" className="mx-4 font-bold uppercase">
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
