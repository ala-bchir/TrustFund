import React from 'react'
import {ether} from '../images'

const about = () => {
  return (
    <div className="bg-[#1c1c24] flex  flex-col rounded-[10px] sm:p-10 p-4">
      <div>
        <h1 className="font-bold text-white font-sans sherrif text-[40px]">À propos de Trust Fund:</h1>
        <p className="p-10 text-[#808191] text-justify leanding-[26px] text-[20px]">Trust Fund est une plateforme de financement participatif basée sur la technologie blockchain Ethereum, offrant une expérience transparente et sécurisée pour les créateurs de projets et les contributeurs.</p>
      </div>
      

      <div>
        <h1 className="font-bold text-white font-sans sherrif text-[40px]">Ce qui nous différencie des autres plateformes sur le web :</h1>
        <p className="p-10 text-[#808191] text-justify leanding-[26px] text-[20px]">Trust Fund est une plateforme de financement participatif basée sur la technologie blockchain Ethereum, offrant une expérience transparente et sécurisée pour les créateurs de projets et les contributeurs.</p>
        <ul className="list-disc pl-10">
          <li className="text-white text-[25px] font-sans sherrif pt-3   font-bold">Transparence totale : 
            <p className="pt-3 text-[#808191] font-ibm text-justify leanding-[26px] text-[20px] font-normal">Trust Fund assure une transparence totale en utilisant la technologie blockchain pour enregistrer de manière immuable toutes les transactions. Cela garantit que les fonds collectés sont utilisés conformément aux intentions des contributeurs, sans risque de falsification des statistiques ou de manipulation des fonds par la plateforme. Les frais sont également transparents et équitables, définis à l'avance et enregistrés sur la blockchain, offrant ainsi une expérience de financement participatif sécurisée et transparente pour tous les utilisateurs.
            </p>
          </li>
          <li className="text-white text-[25px] font-sans sherrif pt-3 pt-4 font-bold">Accès universel  : 
            <p className="pt-3 text-[#808191] font-ibm text-justify leanding-[26px] text-[20px] font-normal">Trust Fund permet à tout le monde de créer sa propre campagne, peu importe son objectif. Contrairement à d'autres plateformes qui peuvent être confrontées à des conflits politiques ou religieux, Trust Fund offre un espace où chacun peut exprimer ses idées et trouver le soutien nécessaire pour concrétiser ses projets.
            </p>
          </li>
          <li className="text-white text-[25px] font-sans sherrif pt-3 pt-4 font-bold">Récompenses uniques : 
            <p className="pt-3 text-[#808191] font-ibm text-justify leanding-[26px] text-[20px] font-normal">En plus de soutenir des projets inspirants, Trust Fund offre également des récompenses uniques sous la forme de NFT (Tokens Non-Fongibles). Pour chaque don égal ou supérieur à 1 Ether, les contributeurs recevront automatiquement un NFT en reconnaissance de leur soutien. 
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-white font-sans sherrif text-[40px] mt-10">Contact :</h1>
        <div className="pl-10 pt-4 text-white">
          <p className="text-[24px] text-[#808191]">Pour plus d'informations ou pour nous contacter :</p>
            <ul class="list-disc pl-3 text-[20px] text-[#808191]" >
              <li>Email : <a href="mailto:contact@trustfund.com" class="hover:text-white"><u>TrustFundContact@proton.me</u> </a></li>
              <li>Téléphone : <span class=" hover:text-white">+33 6 25 29 79 53 </span> </li>
            </ul>
          
        </div>
          
      </div>

      <div>
      <h1 className="font-bold text-white font-sans sherrif text-[40px] mt-10">Contrat :</h1>
        <div className="flex items-center  gap-[6px]  pt-4">
          <div className="  h-[90px] w-[90px] rounded-full flex justify-center items-center">
              <img src={ether} alt="contact" className=" w-1/2 h-1/2 object-contain"  />
          </div>
          <a className="flex-1 text-[20px] text-[#808191] hover:text-white truncate " href="https://sepolia.etherscan.io/address/0xB64461e1cb475D42151e809F24eFBFd95EB44A45" target="_blank" ><u> 0xB64461e1cb475D42151e809F24eFBFd95EB44A45</u></a>
        </div>
      
      
      </div>

      <div>
      <h1 className="font-bold text-white font-sans sherrif text-[40px] mt-10">NFT Contact :</h1>
        <div className="flex items-center  gap-[6px]  pt-4">
          <div className="  h-[90px] w-[90px] rounded-full flex justify-center items-center">
              <img src={ether} alt="nft" className=" w-1/2 h-1/2 object-contain"  />
          </div>
          <a className="flex-1 text-[20px] text-[#808191] hover:text-white truncate " href="https://sepolia.etherscan.io/token/0xa033443853f830471c4bdadaeec15e9f3a319546" target="_blank" ><u> 0xa033443853f830471c4bdadaeec15e9f3a319546</u></a>
        </div>
      
      
      </div>

    </div>
  )
}

export default about