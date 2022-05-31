import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import api from 'axiosStore';
import { useRouter } from 'next/router';
type Props = {};

const AdminHome = (props: Props) => {
  const router = useRouter();
  const signInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit((data: any) => {
    api
      .post('/auth/signin', data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          router.push('/admin/dashboard');
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className='min-h-screen bg-neutral grid place-items-center'>
      <div className='bg-base-300 p-12 text-base-100 rounded-2xl'>
        <div className='mx-12'>
          <h1 className='text-4xl'>Login</h1>
          <form className='flex flex-col gap-4 mt-12' onSubmit={onSubmit}>
            <div className='flex flex-col w-full'>
              {errors.email && (
                <p className='text-red-500'>{errors.email.message}</p>
              )}
              <label htmlFor='email' className='text-neutral-content'>
                Email
              </label>
              <input
                {...register('email')}
                type='text'
                placeholder='Enter Email'
                className='input w-full max-w-xs bg-base-200'
              />
            </div>
            <div className='flex flex-col w-full'>
              {errors.password && (
                <p className='text-red-500'>{errors.password.message}</p>
              )}
              <label htmlFor='password' className='text-neutral-content'>
                Password
              </label>
              <input
                {...register('password')}
                type='password'
                placeholder='Enter Password'
                className='input w-full max-w-xs bg-base-200'
              />
            </div>
            <div>
              <button type='submit' className='btn btn-primary w-full'>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
