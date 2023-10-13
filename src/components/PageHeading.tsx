import React from 'react'

const PageHeading = ({prefix, title} : {prefix: string, title:string}) => {
  return (
    <div className="flex gap-4 font-mono uppercase text-white md:text-xl">
      <span className="opacity-25">{prefix}</span> {title}
    </div>
  );
}

export default PageHeading