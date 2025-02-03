import React from 'react'

function Boutton({btnType, title, handleClick,styles }) {
  return (
    <button type={btnType}
        className={` font-ibm font-semibold text-white text-[18px]  min-h-[52px] px-4 rounded-[8px] ${styles}`}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default Boutton