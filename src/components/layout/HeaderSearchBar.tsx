import Form from 'next/form';
import React from 'react';

const HeaderSearchBar = () => {
    return (
        <Form action='/search'>
            <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                    </svg>
                </div>
                <input
                    type='text'
                    name='query'
                    placeholder='Search...'
                    className='w-32 pl-8 pr-2 py-1 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-transparent transition-colors'
                />
            </div>
        </Form>
    );
};

export default HeaderSearchBar;
