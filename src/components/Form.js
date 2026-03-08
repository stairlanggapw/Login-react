import * as React from 'react';

export default function Form() {
    return (
        <div>
            <h1 className='text-5xl font-semibold'>welcome Back</h1>
            <p className='font-medium text-lg-gray-500 mt-4'>Welcome back! Please enter your details.</p>
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
                    <label>Password</label>
                    <input
                        className=''
                        placeholder='Enter your password'
                        type="password"
                    />
                </div>
                <div>
                    <div>
                        <input
                            type="checkbox"
                            id='remember'
                        />
                        <label for="remember">Remember for 30 days</label>
                    </div>
                    <button>Forgot password</button>
                </div>
            </div>
        </div>
    )
}
