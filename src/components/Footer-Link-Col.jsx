import React from 'react'

function FooterLinkCol({data}) {
  return (
    <div className="col w-[12%]">
            <ul className="text-[11px] tracking-wide leading-4">
              {data.map((link)=>{
                return <li>
                <p className="hover:underline cursor-pointer">{link}</p>
              </li>
              })}
              
            </ul>
          </div>
  )
}

export default FooterLinkCol