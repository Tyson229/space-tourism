import React from 'react'

const PageHeading = ({prefix, title, styles} : {prefix: string, title:string, styles?:string}) => {
  return (
    <div className={`flex gap-4 font-mono uppercase text-white md:text-xl lg:text-3xl tracking-[0.16em] ${styles}` }>
      <span className="opacity-25">{prefix}</span> {title}
    </div>
  );
}

export default PageHeading