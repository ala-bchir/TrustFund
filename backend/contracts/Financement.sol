// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "./TrustFundToken.sol";
contract Financement {
    TrustFundToken public trustFundToken;
    
    constructor(TrustFundToken _trustFundToken) {
        trustFundToken = _trustFundToken;
    }
    struct Campaign{
        
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 amountCollected;
        uint256 deadline;
        string image;
        address [] donators;
        uint256 [] donations;
    }
    mapping (uint256 => Campaign) public campaigns; // c'est comme un dictionnaire qui lie chaque campagne avec son id 
    
    uint256 numberOfCampaigns = 0 ;

    function createCampaign(address _owner, string memory _title , string memory _description,
    uint256 _target, uint256 _deadline, string memory _image )public returns(uint256){

        Campaign storage campaign = campaigns[numberOfCampaigns];
        
        require(campaign.deadline< block.timestamp, "Change the deadline!, must be in the future");
        
        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.target = _target;
        campaign.deadline =_deadline;
        campaign.image = _image;
        campaign.amountCollected = 0 ;

        numberOfCampaigns++;

        return numberOfCampaigns-1; //l'id du dernier campagne crée

    }
    
    function donateTocampaign(uint256 _id)public payable{
        uint256  amount = msg.value;
        
        Campaign storage campaign = campaigns[_id];
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        
        (bool sent,) = payable(campaign.owner).call{value:amount}(""); // on envoie a l'adrees "owner" le montant "amount"
        
        if(sent) {
            campaign.amountCollected = campaign.amountCollected +amount;
            
            if (amount >= 1 ether) {
                trustFundToken.safeMint(msg.sender, "ipfs://QmXVFf3naEWrDSeQBWLHxAhn3QBbrcddMAq1wVVLGUF5EY/nft.json");
            }
        }


    }

    function getDonators(uint256 _id) view public returns(address[] memory,uint256[] memory){
        
        return(campaigns[_id].donators,campaigns[_id].donations);
    }

    function getCampaigns() public view returns(Campaign[] memory){
        
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns); // valeur de retour
        
        for (uint i = 0; i < numberOfCampaigns; i++){
            
            Campaign storage item = campaigns[i];
            allCampaigns[i] =item;
        }
        return allCampaigns;
    } 


}