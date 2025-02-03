import React,{useState,useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import {ethers} from 'ethers';
import { useStateContext } from '../web3';
import { Boutton } from '../components';
import {UP,user} from '../images';
import { LoadingWindow , ValueBox } from '../components';

const Campaign = () => {
  const {state} = useLocation();
  //console.log(state);
  const navigate = useNavigate();
  const{getDonations,contract ,address,donate} = useStateContext();
  const [donators, setdonators] = useState([]);
  const [amount, setAmount] = useState('');
  const [chargement, setchargement] = useState(false);

  const handleDonation = async ()=>{
    //console.log(amount)
    setchargement(true);
    await donate(state.pId,amount);
    navigate('/')
    setchargement(false);
  }

  const jRestants = (deadline) => {
    const dt = new Date(deadline).getTime();
    //console.log(dt)
    const nt = Date.now()
    //console.log(nt)
    //console.log(((dt-nt)/ (1000 * 3600 * 24)).toFixed(0))
    const diff = new Date(deadline).getTime - Date.now();
    
    const jr = (dt-nt)/ (1000 * 3600 * 24);
    return jr.toFixed(0);
  }

  const jours_restant = jRestants(state.deadline);

  const calculPourcentage = (goal,amount)=>{
    const pourcentage = Math.round((amount * 100)/goal);
    return pourcentage;
  }

  const fetchDonators = async ()=>{
    const data = await getDonations(state.pId);
    setdonators(data);
  }

  useEffect(()=>{
    if(contract) fetchDonators();
  },[contract,address])

  return (
    <div>
      {chargement && <LoadingWindow/>}
      <div className="w-full flex md:flex-row flex-col mt-[58px] gap-[30px]">
        <div className="flex-1 flex-col">
          <img src={state.image} alt="image-campagne" className="w-full h-[435px] object-cover rounded-xl" />
          <div className='relative w-full h-[8px] bg-[#3a3a43] mt-2 rounded-[5px]'>
            <div className="absolute h-full bg-[#1CAD34] rounded-[5px] " 
              style={{width:`${calculPourcentage(state.target,state.amountCollected)}%`, maxWidth:'100%'}}>
            </div>
          </div>
          
        </div>
        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <ValueBox title="Jours Restants" value={jours_restant > 0 ? jours_restant:0}/>
          <ValueBox title={`Collecté sur ${state.target}`} value={state.amountCollected}/>
          <ValueBox title="Contributeurs" value={donators.length}/>
        </div>
      </div>

      <div className=" mt-[15px] flex bg-[#1c1c24] text-white p-8 lg:flex-row flex-col gap-5 rounded-[10px]" >
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-semibold text-[18px] uppercase">Fondateur</h4>
            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2C2F32] cursor-pointer">
                <img src={user}  alt="owner" className="w-[60%] h-[60%] object-contain" />
                
              </div>
              <h4 className="text-[15px] font-semibold break-all">{state.owner}</h4>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[18px]  uppercase">Description</h4>
            <div className="mt-[20px] flex flex-col gap-4">
              <p className="text-[16px] text-[#808191] text-justify leanding-[26px]">{state.description}</p>
            </div>
            
          </div>

          <div>
            <h4 className="font-semibold text-[18px]  uppercase">Contributeurs</h4>
            <div className="mt-[20px] flex flex-col gap-4">
              {donators.length > 0 ? donators.map((item, index)=>(
                <div key={`${item.donator}-${index}`} className='flex justify-between items-center gap-4'>
                  
                  <p className='font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll'>{index + 1}. {item.donator}</p> 
              
                </div>
              )):(
                <p className="text-[16px] text-[#808191] text-justify leanding-[26px]">Aucun don n'a encore été reçu pour cette campagne, Vous pouvez être le premier à faire la différence !</p>
              )}
              
            </div>
            
      
          </div>
          
        </div>
        <div className="flex-1 mx-[15px]" >
          {jours_restant > 0 ?
          <div>
            <h4 className="font-semibold text-[18px]  uppercase">Financer</h4>
            <p className="text-[13px] text-[#808191]">(1 Ether ou plus pour recevoir un NFT)</p>
            <div className="mt-[20px] flex flex-col p-4 bg-[#28282e] rounded-[10px]">
              <p className="font-medium text-[20px] leading-[30px] text-center font-bm text-[#808191]">Financer la campagne</p>
              <div className="my-[30px]">
                <input type="number" placeholder="ETH 2" step="0.01" min="0" max={state.target - state.amountCollected}
                className="w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[2px] bg-transparent border-[#3a3a43] text-[18px] rounded-[10px] placeholder:text-[#4b5264]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} 
                />
              </div>
              <Boutton 
                btnType="button"
                title="Faire un don"
                styles="w-full bg-[#5CDA88]"
                handleClick={handleDonation}
              />
            </div>
          </div>: <p>Cette campagne est désormais terminée. Nous vous remercions pour votre soutien. Les dons ne sont plus acceptés.</p>
          }
            
          </div>
        

      </div>

      
      
    </div>
  )
}

export default Campaign