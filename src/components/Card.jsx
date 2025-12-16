import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
          <div className='h-45 w-50 rounded border-3'> 
          <img className='object-cover h-full w-full' src={props.elem.download_url} alt="" />
          </div>
        </a>
    </div>
  )
}

export default Card
