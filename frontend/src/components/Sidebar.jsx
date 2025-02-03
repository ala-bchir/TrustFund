import React ,{useState}from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import { sun,TF} from '../images';
import {navlinks} from '../navlinks';
import {useStateContext} from '../web3';

const Sidebar = () => {
  const navigate = useNavigate();
  const[isActive,setIsActive] = useState('dashboard');

  const {changeBackgroundTheme} = useStateContext();



  return (
    <div className="flex justify-between items-center flex-col sitcky top-5 h-[93vh]">
      <Link to="/">
        <div className="flex  justify-between felx-row items-center space-x-4">
          <Icon styles="h-[60px] w-[60px] bg-[#2c2f32] flex items-center " imgUrl={TF}/>
          
        </div>
        
      </Link>
      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-lg w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link)=>(
            <Icon
              styles="flex items-center"
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={()=>{
                if(!link.disabled){
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
          
        </div>
        <Icon styles="bg-[#1c1c24] " handleClick={changeBackgroundTheme} imgUrl={sun}/>
        

      </div>

    </div>
  )
}

const Icon = ( {styles,name ,disabled, handleClick ,imgUrl ,isActive})=>(
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive == name && 'bg-white'} 
  flex justify-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive?(
      <img src={imgUrl} alt="trust-fund-logo" className="w-1/2 h-1/2 "/>
    ):(
      <img src={imgUrl} alt="trust-fund-logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`}/>
    )}

  </div>
)
  
export default Sidebar