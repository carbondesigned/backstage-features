import React from 'react';

type Props = {};

const AdminHome = (props: Props) => {
  return (
    <main className='min-h-screen bg-neutral grid place-items-center'>
      <div className='bg-base-300 p-12 text-base-100 rounded-2xl'>
        <div className='mx-12'>
          <h1 className='text-4xl'>Login</h1>
          <form className='flex flex-col items-center gap-4 mt-12'>
            <div className='flex flex-col w-full'>
              <label htmlFor='email' className='text-neutral-content'>
                Email
              </label>
              <input
                type='text'
                placeholder='Enter Email'
                className='input w-full max-w-xs bg-base-200'
              />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='password' className='text-neutral-content'>
                Password
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                className='input w-full max-w-xs bg-base-200'
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
