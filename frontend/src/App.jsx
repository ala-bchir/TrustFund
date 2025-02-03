
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import {Sidebar ,Navbar} from './components';
import {Campaign , CreateCampaign,Home ,About , Support , Profile} from './pages';
import {useStateContext} from './web3';


const App = () => {

  const { backgroundTheme } = useStateContext();

  return (
    <div className={`relative sm:-8 p-4 ${backgroundTheme} min-h-screen flex flex-row`}>
      <div className="sm:flex hidden mr-10 relative text-white">
        <Sidebar/> 
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5 font-ibm">
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about-us"element ={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/Campaign/:id" element={<Campaign/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/create-campaign" element={<CreateCampaign/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App