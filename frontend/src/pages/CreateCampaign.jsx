import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {ethers} from 'ethers' ;
import {money} from '../images';
import { Boutton,FormInput,LoadingWindow } from '../components';
import {useStateContext} from '../web3';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [chargement, setchargement] = useState(false)
  const [form, setform] = useState({
    name:'',
    title:'',
    description:'',
    target:'',
    deadline:'',
    image:''
  });
  const {createCampaign} = useStateContext();

  const handleFormChange = (fieldName,e)=>{
    setform({...form,[fieldName]:e.target.value})
  }

  // verifier que url de l'image est valide
  const checkImage = (url,callback)=>{
    const img = new Image();
    img.src = url ;
    if(img.complete) callback(true);
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  }

  const handleSubmit= async (e) =>{
    e.preventDefault();
    checkImage(form.image ,async (valid)=>{
      if(valid){
        setchargement(true);
        await createCampaign({...form, target:ethers.utils.parseUnits(form.target,18)});
        setchargement(false);
        navigate('/')
      }else{
        alert("Url de votre image n'est pas valide!")
        setFrom({...form, image:''})
      }
    })
    
    console.log(form);
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {chargement && <LoadingWindow/>}
      
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className=" text-white font-bold sm:text-[25px] text-[18px] ">Créer une Campagne </h1>
      </div>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-[25px] mt-[65px] w-full'>
        <div className="flex flex-wrap gap-[40px]">
          <FormInput
            labelName="Votre Nom *"
            placeholder="Satoshi Nakamoto"
            inputType="text"
            value={form.name}
            handleChange={(e)=>handleFormChange('name',e)}
          />

          <FormInput
            labelName="Titre de Votre Campagne *"
            placeholder="Collecte irif..."
            inputType="text"
            value={form.title}
            handleChange={(e)=>handleFormChange('title',e)}
          />
        </div>
        <div>
          <FormInput
              labelName="Votre Histoire *"
              placeholder="Raconte-nous votre histoire..."
              isTextArea
              value={form.description}
              handleChange={(e)=>handleFormChange('description',e)}
            />
        
        </div>
        <div className="w-full flex justify-start items-center bg-[#5CDA88] p-4 rounded-[8px] h-[130px]">
          <img src={money} alt="moneyLogo" className="h-[40px] w-[40px] object-contains" />
          <h4 className="font-bold text-white ml-[20px] sm:text-[30px] text-[20px]">Vous Recevez 100% du montant collecté</h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormInput
            labelName="Montant cible *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e)=>handleFormChange('target',e)}
          />

          <FormInput
            labelName="Dernier delais *"
            placeholder="32/13/3050"
            inputType="date"
            value={form.deadline}
            handleChange={(e)=>handleFormChange('deadline',e)}
          />

          <FormInput
            labelName="Image *"
            placeholder="Placez une image qui représente votre cause"
            inputType="url"
            value={form.image}
            handleChange={(e)=>handleFormChange('image',e)}
          />
        </div>

        <div className=" mt-[40px]">
          <Boutton
          btnType="submit"
          title="Lancer Campagne"
          styles="bg-[#5CDA88]"
          />
        </div>

      </form>
    </div>
  )
}

export default CreateCampaign