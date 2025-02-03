import React ,{useContext , createContext,useState} from 'react';
import {useAddress, useContract , useMetamask , useContractWrite,  } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children})=>{
    const {contract} = useContract ('0xB64461e1cb475D42151e809F24eFBFd95EB44A45');
    const { mutateAsync : createCampaign } = useContractWrite(contract , 'createCampaign');
    const address = useAddress();
    const connect = useMetamask();
    const [backgroundTheme, setBackgroundTheme] = useState("bg-gradient-to-tr from-emerald-100 via-emerald-400 to-black");
    
   const changeBackgroundTheme = () => {
        setBackgroundTheme(currentTheme =>
            currentTheme === "bg-gradient-to-tr from-emerald-100 via-emerald-400 to-black"
            ? "bg-black"
            : "bg-gradient-to-tr from-emerald-100 via-emerald-400 to-black"
        );
    };

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign({
                args:[
                    address,
                    form.title,
                    form.description,
                    form.target,
                    new Date(form.deadline).getTime(),
                    form.image,
                ],
            });
            console.log("appel au contrat validé", data)
        } catch (error) {
            console.log("appel au contrat échoué", error)
        }
        
    }

    const getCampaigns = async () =>{

        const campaigns = await contract.call('getCampaigns');
        const cleanCampaigns = campaigns.map((campaign, index)=>({
            owner : campaign.owner,
            title : campaign.title,
            description : campaign.description,
            target : ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image : campaign.image,
            pId : index
        }));
        return(cleanCampaigns)
    }

    const getOwnerCampaigns = async()=>{
        const allCampaigns = await getCampaigns();
        const filteredCampaigns = allCampaigns.filter((campaign)=> campaign.owner == address);
        return filteredCampaigns ;
    }

    const getDonations = async (pId)=>{
        const donations = await contract.call('getDonators',[pId]);
        const nbDonations = donations[0].length;
        const parsedDonations = [];
        for (let i = 0 ; i < nbDonations ; i++){
            parsedDonations.push({
                donator : donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            })
        }
        return parsedDonations;
    }

    const donate = async (pId,amount) =>{
        const data = await contract.call('donateTocampaign',[pId],{value:ethers.utils.parseEther(amount)});
        return data
    }
    

    return (
        <StateContext.Provider 
        value={{
            connect,
            address,
            contract,
            createCampaign : publishCampaign,
            getCampaigns,
            getOwnerCampaigns,
            getDonations,
            donate,
            backgroundTheme,
            changeBackgroundTheme

        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

