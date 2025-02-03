import React from 'react'
import {tagType , UP , user} from "../images"


const CampaignCard = ({owner , title , description , target , deadline , amountCollected , image , handleClick}) => {
    const jRestants = (deadline) => {
        const dt = new Date(deadline).getTime();
        //console.log(dt)
        const nt = Date.now()
        //console.log(nt)
        //console.log(((dt-nt)/ (1000 * 3600 * 24)).toFixed(0))
        const diff = new Date(deadline).getTime - Date.now();
        
        const jr = (dt-nt)/ (1000 * 3600 * 24);
        if (jr > 0) {
          return jr.toFixed(0);
        }
        else { return "0"}
    }

    const jours_restant = jRestants(deadline);
  
  return (
    <div className=' sm:w-[288px]  w-full rounded-[15px] bg-[#1c1c24] cursor-pointer' onClick={handleClick}>
        <img src={image} alt="card-img" className="w-full h-[155px] object-cover rounded-[15px]"/>
        <div className="flex flex-col p-4">
            
            <div className="flex flex-row items-center mb-[18px]">
              <img src={tagType} alt="tag" className=" h-[16px] w-[16px] object-contain " />
            </div>
           
            <div className="block">
              <h3 className="text-[17px] font-semibold text-left text-white leading-[25px] truncate">{title}</h3>
              <p className="text-[13px] text-[#808191] text-left leading-[18px] truncate mt-[5px]">{description}</p>
            </div>

            <div className="flex flex-wrap justify-between gap-2 mt-[16px]">
              
              <div className="flex flex-col">
                <h4 className="text-[14px] font-semibold text-[#b2b3bd] leading-[22px]">{amountCollected}</h4>
                <p className="text-[12px] mt-[3px] leading-[18px] text-[#808191] ">Collecté sur {target}</p>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[14px] font-semibold text-[#b2b3bd] leading-[22px]">{jours_restant}</h4>
                <p className="text-[12px] mt-[3px] leading-[18px] text-[#808191] ">jours restants</p>
              </div>
            </div>

            <div className="flex items-center mt-[20px] gap-[12px]">
              <div className="  h-[30px] w-[30px] rounded-full flex justify-center items-center">
                <img src={user} alt="owner" className=" w-1/2 h-1/2 object-contain"  />
              </div>
              <p className="flex-1 text-[12px] text-[#808191] truncate " >par <span className="text-[#b2b3bd]">{owner}</span></p>
            </div>

        </div>
    
    </div>
  )
}

export default CampaignCard