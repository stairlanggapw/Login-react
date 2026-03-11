import * as React from 'react';

export default function Form() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-violet-100">
            <div className="absolute w-80 h-80 bg-violet-500 rounded-full top-10 left-10 opacity-40 blur-3xl" />
            <div className="absolute w-80 h-80 bg-pink-500 rounded-full right-10 opacity-40 blur-3xl" />
            <div className="absolute w-80 h-80 bg-blue-500 rounded-full bottom-10 left-1/2 -translate-x-1/2 opacity-40 blur-3xl" />

            <div className='relative z-10 w-full max-w-md bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
                <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                <p className='font-medium text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
                <div className='mt-8'>
                    <div>
                        <label className='text-lg font-medium'>Email</label>
                        <input
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Enter your email'
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label className='text-lg font-medium'>Password</label>
                        <input
                            className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                            placeholder='Enter your Password'
                        />
                    </div>
                    <div className='mt-8 flex justify-between items-center'>
                        <div>
                            <input type="checkbox" id='remember' />
                            <label className='ml-2 font-medium text-base' htmlFor="remember">Remember for 30 days</label>
                        </div>
                        <button className='font-medium text-base text-violet-500'>Forgot password</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign in</button>
                        <button className='flex rounded-xl py-3 border-2 border-gray-200 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                    <div className='mt-8 flex justify-center items-center'>
                        <p className='font-medium text-base'>Don't have an account?</p>
                        <button className='text-violet-500 text-base font-medium ml-2'>Sign up</button>
                    </div>
                </div>
            </div>

        </div>
    )
}