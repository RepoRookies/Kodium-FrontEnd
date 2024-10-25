import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/useAuth';

const adminSchema = z.object({
  key: z.string().min(1, 'Key is Required!'),
  password: z.string().min(8, 'Password must be at least 8 Characters Long!'),
});

const userSchema = z.object({
  username: z.string().min(1, 'Username is Required!'),
  password: z.string().min(8, 'Password must be at least 8 Characters Long!'),
});

type AdminLogin = z.infer<typeof adminSchema>;
type UserLogin = z.infer<typeof userSchema>;

const Login: React.FC = () => {
  const {auth,setAuth} = useAuth()
  console.log(auth)
  const [activeTab, setActiveTab] = useState('user');
  const loginTabs = [
    {
      value: 'user',
      title: 'User Login',
      fields: [
        { label: 'User-Name', id: 'username', placeholder: '@Kodium-User' },
        { label: 'Password', id: 'password', type: 'password' },
      ],
    },
    {
      value: 'admin',
      title: 'Admin Login',
      fields: [
        { label: 'Admin-Key', id: 'key', placeholder: '@IIITK-Admin' },
        { label: 'Password', id: 'password', type: 'password' },
      ],
    },
  ];

  const loginForm = useForm<AdminLogin | UserLogin>({
    resolver: zodResolver(activeTab === 'admin' ? adminSchema : userSchema),
    defaultValues:
      activeTab === 'admin'
        ? {
            key: '',
            password: '',
          }
        : {
            username: '',
            password: '',
          },
  });

  const navigate = useNavigate();
  const server_url = import.meta.env.VITE_SERVER_URL

  useEffect(()=>{
    if(auth){
      toast.error(`You are already logged in`);
      navigate('/')
    }
  })
  const onSubmit = async (values: AdminLogin | UserLogin) => {
    
    if (values) {
      let loginSuccess: boolean = false;
      try{
        const loginUser = await axios.post(`${server_url}/app/v1/user/login`,values,{withCredentials:true})
        // console.log(loginUser.data)
        if(loginUser.data.success){
          // console.log(loginUser.data.user as IAuth)
          setAuth(prev=>({...prev,...loginUser.data.user}))
          loginSuccess = true
        }
      }
      catch(error){
        console.log(error)
        loginSuccess = false
      }
      console.log(JSON.stringify(values));
      if (loginSuccess) {
        toast.success(
          `Welcome ${activeTab === 'admin' ? 'Kodium Admin' : userSchema.parse(values).username}!`
        );
        navigate('/');
      } else {
        const error: string = 'Please Try Again.';
        toast.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-start items-center w-full h-full tracking-wide">
      <Tabs defaultValue="user" className="w-[40%] pt-10">
        <TabsList className="grid w-full grid-cols-2 bg-primary text-primary-foreground">
          {loginTabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              className="data-[state=active]:bg-gold data-[state=active]:text-primary"
              value={tab.value}
              onClick={() => setActiveTab(tab.value as 'user' | 'admin')}
            >
              {tab.value.charAt(0).toUpperCase() + tab.value.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        {loginTabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card className="bg-primary text-primary-foreground">
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onSubmit)}>
                  <CardHeader>
                    <CardTitle className="text-gold text-center">{tab.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {tab.fields.map((field) => (
                      <div className="space-y-1 h-28" key={field.id}>
                        <FormField
                          control={loginForm.control}
                          name={field.id as keyof UserLogin | keyof AdminLogin}
                          render={({ field: formField }) => (
                            <FormItem>
                              <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
                              <FormControl>
                                <Input
                                  className="bg-secondary/20 border-0"
                                  id={field.id}
                                  placeholder={field.placeholder}
                                  type={field.type || 'text'}
                                  {...formField}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                  </CardContent>
                  <CardFooter className="flex flex-row justify-between">
                    <Button className="w-24" variant="gold" type="submit">
                      Login
                    </Button>
                    {activeTab !== 'admin' && (
                      <Link to="/register">
                        <Button variant="gold">Register</Button>
                      </Link>
                    )}
                  </CardFooter>
                </form>
              </Form>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Login;
