import React from 'react';
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
import { Button } from '../ui/button';

interface UserSchema {
  id: string;
  name: string;
  email: string;
  username: string;
}

const Profile: React.FC = () => {
  const user: UserSchema = {
    id: '0',
    name: 'Kodium Admin',
    email: 'kodium@iiitk.ac.in',
    username: 'Kodium-Admin',
  };
  return (
    <Sheet>
      <SheetTrigger>
        <Avatar className="h-9 w-9 text-primary font-bold">
          <AvatarFallback className="bg-gold">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent className="bg-primary cursor-default">
        <SheetHeader>
          <SheetTitle className="text-gold font-bold">
            <div className="mt-16 w-full">
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
        <Separator className='my-6 bg-silver'/>
        <SheetFooter>
          <SheetDescription className="flex flex-col w-full items-center justify-end gap-2">
            {[
              { label: 'Ratings', url: '/ratings' },
              { label: 'Contests', url: '/contests' },
              { label: 'Submissions', url: '/submissions' },
              { label: 'Settings', url: '/settings' },
            ].map((link, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full text-primary-foreground hover:bg-silver/25 hover:text-secondary"
                title='Coming Soon'
              >
                {/* <Link to={`/user:${user.id}${link.url}`}> */}
                {link.label}
                {/* </Link> */}
              </Button>
            ))}
          </SheetDescription>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Profile