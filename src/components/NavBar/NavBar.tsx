import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLinkEffect from './NavLinkEffect.tsx';
import logo from '../../assets/images/kodium-logo.png';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import Profile from '@/components/Dashboard/Profile';
import { useAuth } from '@/hooks/useAuth.ts';
import { useRefresh } from '@/hooks/useRefresh.ts';


interface NavigationElement {
  label: string;
  path: string;
}

const NavBar: React.FC = () => {
  const {auth} = useAuth()
  const isLoggedIn: boolean = auth !== null;
  const [active, setActive] = useState<string>(useLocation().pathname);
  useRefresh()
  const navigationElements: NavigationElement[] = [
    { label: 'Home', path: '/' },
    { label: 'Learn', path: '/learn' },
    { label: 'Problems', path: '/problems' },
    { label: 'Contest', path: '/contest' },
  ];

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
              <NavLinkEffect isActive={active === element.path} color="gold" key={index}>
                <Link to={element.path}>
                  <NavigationMenuItem
                    onClick={() => setActive(element.path)}
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
      <div className="flex flex-row justify-end pl-4">
        <div className="">
          {isLoggedIn ? (
            <Profile />
          ) : (
            <Link to="/login">
              <Button
                variant="gold"
                size="sm"
                className="mx-4 font-bold uppercase"
                onClick={() => setActive('/login')}
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
