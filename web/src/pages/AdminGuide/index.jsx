import React from 'react';

export default function AdminGuide() {
  return (
    <div className='w-full h-[calc(100vh-64px)] bg-white'>
      <iframe
        title='admin-guide'
        src='/admin-guide.html'
        className='w-full h-full border-0'
      />
    </div>
  );
}
