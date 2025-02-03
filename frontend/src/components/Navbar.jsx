import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {Boutton} from './';
import {menu ,search,UP} from '../images';
import { navlinks } from '../navlinks';
import {useStateContext} from '../web3';



const Navbar = () => {
  const navigate = useNavigate();
  const [isActive,setisActive] = useState('dashbord');
  const [toggle ,setToggle] = useState(false);
  const {connect , address} = useStateContext();

  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = (event) => {
    navigate(`/?search=${event.target.value}`);
    setSearchQuery(event.target.value);
  };

   
  
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between  mb-[35px] ml-0 gap-6">
      <h1 className="font-bold text-white text-2xl mt-[10px] invisible lg:visible">TRUST <span className="text-[#900C3F]">x</span> FUND</h1>
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
        <input
          type="text"
          placeholder="Chercher campagnes"
          className="flex w-full font-sans serif text-white bg-transparent outline-none"
          onChange={handleSearch}
          value={searchQuery}
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#1DC071] flex justify-center items-center cursor-pointer">
          <img src={search} alt="chercher" className="w-[15px] h-[15px] object-contain" />

        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <Boutton
          btnType="button"
          title={address ? 'Créer campagne' : 'Connecter Portefeuille'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#5CDA88]'}
          handleClick={()=>{
            if(address) navigate('create-campaign')
            else connect();
          }}
        />
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={UP} alt="profile" className="w-full h-full object-contain" />
          </div>
        </Link>
      </div>

      {/* version mobile*/}
        <div className="sm:hidden flex justify-between items-center relative">
          <div className="h-[38px] w-[38px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={UP} alt="profile" className="w-full h-full object-contain" />
          </div>
          <img src={menu} alt="menu" className="w-[32px] h-[32px] object-contain cursor-pointer"
            onClick={()=> setToggle((prev)=>!prev)}  />
            <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggle ? '-translate-y-[100vh]': 'translate-y-0'} transition-all duration-700`}>
              <ul className="mb-4">
                {navlinks.map((link)=>(
                  <li
                  key={link.name}
                  className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43] '}`}
                  onClick={()=>{
                    setisActive(link.name);
                    setToggle(false);
                    navigate(link.link);
                  }}
                  >
                    <img src={link.imgUrl} 
                      alt="icon" 
                      className={`h-[24px] w-[24px] object-contain ${isActive === link.name ? 'grayscale-0': 'grayscale' } cursor-pointer`}
                    />
                    <p className={`mx-[20px] font-ibm text-[18px] ${isActive === link.name ? 'text-white':'text-[#808191]'} cursor-pointer`}>
                      {link.name}
                    </p>

                  </li>
                ))}
              </ul>
              <div className="flex ml-4">
                <Boutton
                  btnType="button"
                  title={address ? 'Créer campagne' : 'Connecter Portefeuille'}
                  styles={address ? 'bg-[#1dc071]' : 'bg-[#5CDA88]'}
                  handleClick={()=>{
                    if(address) navigate('CreateCampaign')
                    else connect();
                  }}
                />

              </div>

            </div>

        </div>
      
    </div>

  )
}

export default Navbar