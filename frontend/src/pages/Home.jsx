import React, {useState , useEffect} from 'react'
import {useStateContext} from '../web3'
import {RenderCampaigns, CampaignCard} from '../components'
import { useLocation } from 'react-router-dom';


const Home = () => {
  const [chargement, setchargement] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const searchQuery = new URLSearchParams(useLocation().search).get('search');


  const {address, contract , getCampaigns} = useStateContext();
  const nb_campaigns = campaigns.length;
  const fetchCampaigns = async()=>{
    setchargement(true);
    let data = await getCampaigns();
    if (searchQuery) {
      data = data.filter(campaign => campaign.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setCampaigns(data);
    setchargement(false);
  }

  useEffect(()=>{
    if(contract) fetchCampaigns();
  },[address,contract, searchQuery])
  return (
    <RenderCampaigns
    title ="Toutes les campagnes"
    chargement = {chargement}
    campaigns = {campaigns}
    nb = {nb_campaigns}
    />
  )
}

export default Home