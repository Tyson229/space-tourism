import React from 'react'

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="font-mono text-3xl uppercase tracking-wider">
        <span className="font-bold opacity-25">03</span> Space launch 101
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>tabs</div>
        {children}
      </div>
    </div>
  );
}

export default Layout