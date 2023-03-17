import React from 'react'
import { Link } from 'react-router-dom'
import Style from './SideListItem.module.scss'


function SideListItem({id,src,title}) {
  return (
    <div>
      <Link className={Style.item} to={{pathname: 'watch', search: `?v=${id}`}} >
        <img src={src} alt={title} />
        <div className={Style.info}>
          <span>{title}</span>
        </div>
      </Link>
    </div>
  )
}

export default SideListItem
