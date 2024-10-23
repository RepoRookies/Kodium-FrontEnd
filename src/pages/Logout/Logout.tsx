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
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth'; 

const Logout: React.FC = () => {
  const {auth,setAuth} = useAuth()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const server_url = import.meta.env.VITE_SERVER_URL
  const logOut = async () => {
    //Logout Call and Updates

    let logoutSuccess: boolean = false;
    if(auth){
      const logoutUser = await axios.get(`${server_url}/app/v1/user/logout`,{ headers: { Authorization: `Bearer ${auth.token}` },withCredentials:true})
      if(logoutUser.data.success){
        setAuth(null)
        logoutSuccess = true
      }
    }
    if (logoutSuccess) {

      toast.success('Logged Out Successfully!');
      navigate('/login');
    } else {
      const error: string = 'Logout Error!';
      toast.error(error);
    }
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
