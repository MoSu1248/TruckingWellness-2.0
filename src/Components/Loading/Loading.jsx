import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import './loading.css'
const Loading = () => {
    return (
        <div className='loading-ani-container'>
      <TailSpin 
    className='loading-animation'
                visible={true}
                align="center"
  height="100"
  width="100"
  color="#c1151bce"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{ }}
  wrapperClass="teset"
      />

      </div>
  )
}

export default Loading