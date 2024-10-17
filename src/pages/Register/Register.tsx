import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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

const userSchema = z
  .object({
    name: z.string().min(1, 'Name is Required!'),
    email: z.string().email('Invalid Email!'),
    username: z.string().min(1, 'Username is Required!'),
    password: z.string().min(8, 'Password must be at least 8 Characters Long!'),
    confirmPassword: z.string().min(8, 'Password must be at least 8 Characters Long!'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not Match!',
  });

type UserRegister = z.infer<typeof userSchema>;

const Register: React.FC = () => {
  const fields = [
    { label: 'Name', id: 'name', placeholder: 'Kodium User' },
    { label: 'Email', id: 'email', placeholder: 'kodium@iiitkottayam.ac.in' },
    { label: 'Username', id: 'username', placeholder: '@Kodium-User' },
    { label: 'Password', id: 'password', type: 'password' },
    { label: 'Confirm Password', id: 'confirmPassword', type: 'password' },
  ];

  const registerForm = useForm<UserRegister>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: UserRegister) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="flex flex-col justify-start items-center bg-primary/85 w-full tracking-wide p-8">
      <Card className="bg-primary text-primary-foreground w-[40%]">
        <Form {...registerForm}>
          <form onSubmit={registerForm.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="text-gold text-center">User Registeration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {fields.map((field) => (
                <div className="space-y-1 h-28" key={field.id}>
                  <FormField
                    control={registerForm.control}
                    name={field.id as keyof UserRegister}
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
                Register
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
