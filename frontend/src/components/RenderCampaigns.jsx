import React from 'react'
import {useNavigate} from 'react-router-dom'
import {loader} from '../images'
import CampaignCard from './CampaignCard'


const RenderCampaigns = ({title,chargement,campaigns,nb}) => {
    const navigate = useNavigate(); 
    const handleNavigate = (campaign)=>{
        navigate(`/Campaign/${campaign.title}`,{state: campaign})
    }
  return (
    <div>
        <h1 className='font-semibold text-[20px] text-[#808191] text-left font-sans sherrif'>{title} ({nb})</h1>
        <div className='flex flex-wrap mt-[18px] gap-[25px]'>
            {chargement && (
                <img src={loader} alt="chargement en cours" className='w-[80px] h-[80px] object-contain'/>
            )} 
            
            {!chargement && nb=== 0 && (
                <p className='font-semibold text-[15px] text-[#808191] font-sans sherrif'> Aucune campagne crée </p>
            )}

            {!chargement && nb > 0 && campaigns.map((campaign)=> <CampaignCard
                key={campaign.id}
                {...campaign}
                handleClick={()=> handleNavigate(campaign)}
            />) 
            }
        </div>
    </div>
  )
}

export default RenderCampaigns