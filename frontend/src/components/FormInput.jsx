import React from 'react'

const FormInput = ({labelName,inputType,placeholder,value,handleChange,isTextArea}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
        {labelName && (
            <span className='font-medium mb-[8px] text-[14px] text-[#808191]'>{labelName}</span>
        )}
        {isTextArea ? (
            <textarea
                required
                value={value}
                onChange={handleChange}
                roxs={10}
                placeholder={placeholder}
                className="py-[15px] sm:px-[25px] px-[15px] text-white text-[15px] bg-transparent border-[#3a3a43]
                border-[1px] outline-none placeholder:text-[#4b5264] rounded-[12px] sm:min-w-[300px]" 
            />
        ):(
            <input 
                required
                type={inputType}
                value={value}
                onChange={handleChange}
                step="0.1"
                placeholder={placeholder}
                className="py-[15px] sm:px-[25px] px-[15px] text-white text-[15px] bg-transparent border-[#3a3a43]
                border-[1px] outline-none placeholder:text-[#4b5264] rounded-[12px] sm:min-w-[300px]" 
            />
        )}

    </label>
  )
}

export default FormInput