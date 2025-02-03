import React, {useState , useEffect} from 'react'
import {useStateContext} from '../web3'
import {RenderCampaigns, CampaignCard} from '../components'


const Profile = () => {
  const [chargement, setchargement] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const {address, contract , getOwnerCampaigns} = useStateContext();
  const nb_campaigns = campaigns.length;
  const fetchCampaigns = async()=>{
    setchargement(true);
    const data = await getOwnerCampaigns();
    setCampaigns(data);
    setchargement(false);
  }

  useEffect(()=>{
    if(contract) fetchCampaigns();
  },[address,contract])
  return (
    <RenderCampaigns
    title ="Mes campagnes"
    chargement = {chargement}
    campaigns = {campaigns}
    nb = {nb_campaigns}
    />
  )
}

export default Profile