import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IUserData } from './user.interface';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Logout from '@/pages/Logout/Logout';
import { ShieldBan } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
// const user: IUserData = {
//   id: '0',
//   name: 'Kodium Admin',
//   email: 'kodium@iiitk.ac.in',
//   username: 'Kodium-Admin',
// };

const Profile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {auth} = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!auth){
      toast.error(`You are not logged in`)
      navigate('/login')
    }
  })
  const user:IUserData = auth!
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Avatar
          className="h-9 w-9 text-primary font-bold cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <AvatarFallback className="bg-gold">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="bg-primary cursor-default">
        <SheetHeader> 
          <SheetTitle className="text-gold font-bold">
            <div className="mt-4 w-full">
              <Avatar className="h-16 w-16 text-primary font-bold mx-auto">
                <AvatarFallback className="bg-gold text-3xl">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="mt-4 text-2xl text-center">{user.name}</div>
          </SheetTitle>
          <SheetDescription className="text-gold-foreground text-center space-y-2">
            <div className="text-md text-sky">{user.email}</div>
            <div className="text-lg text-muted/90 tracking-widest font-bold">@{user.username}</div>
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4 bg-silver" />
        <SheetFooter>
          <SheetDescription className="flex flex-col w-full items-center justify-end gap-2">
            {[
              { label: 'Ratings', url: '/ratings', isLocked: true },
              { label: 'Contests', url: '/contests', isLocked: true },
              { label: 'Submissions', url: '/submissions', isLocked: false },
              { label: 'Settings', url: '/settings', isLocked: true },
            ].map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full text-primary-foreground hover:bg-silver/25 hover:text-secondary"
                title="Coming Soon"
                asChild
              >
                {link.isLocked ? (
                  <span>
                    <ShieldBan className="w-4 h-4 mr-2 text-silver" />
                    {link.label}
                  </span>
                ) : (
                  <Link to={link.url} className="hover:text-sky">
                    {link.label}
                  </Link>
                )}
              </Button>
            ))}
            <Logout />
          </SheetDescription>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Profile;
