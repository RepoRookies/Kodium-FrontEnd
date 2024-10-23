import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { LogOut } from 'lucide-react';

const Logout: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    //Logout Call and Updates
    toast.success('Logged Out Successfully!');
    navigate('/login');
  };
  return (
    <div>
      <Button
        variant="destructive"
        className="w-36 mt-2 font-bold tracking-wider uppercase bg-destructive/75"
        onClick={() => setIsDialogOpen(true)}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gold font-bold tracking-wide">
              Log Out?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-secondary">
              You are about to Log Out from Kodium. Are you Sure?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsDialogOpen(false)} className="w-24">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="w-24" onClick={logOut}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Logout;
