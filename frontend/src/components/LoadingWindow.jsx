import React from 'react'
import {loader} from '../images'
const LoadingWindow = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
        <img src={loader} alt="chargement" className="w-[100px] h-[100px] object-contain"/>
        <p className="mt-[20px] font-bold text-[20px] text-center text-white"> Transaction en cours...</p>
    </div>
  )
}

export default LoadingWindow