import promopic from './promopic.png'
import Tabsection from './tabsection'
import React, { useEffect, useState} from 'react'


export default function Mainsection(){

    const [coinData, setCoinData] = useState({});

  useEffect(() => {

      fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then(res => res.json())
      .then(data => setCoinData(data.data[0]));
    
  }, [])

  

//     const [coinData, setCoinData] = useState({});

//   const value = useEffect(() => {

//     const fetchData = async () => {
//       try{
//         const tab = await fetch("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
//         setCoinData(tab)
//       } catch(err){
//         setCoinData(err);
//       }
//     };

//     fetchData();

//   })


    
    // let user = props.value.user

    // function ellipsis(user){
    //     if(user.length > 35){
    //         return user.substr(0, 10) + '...' + user.substr(user.length-10, user.length);
    //     }
    //     return user;
    // }

    return (
        <div className="main-section">
            
            <div className="top-section--flex">

                <div className="main-section--name">
                    <p>Section</p>
                </div>

                <div className="balance_info--flex">

                    <div className="wallet-logo">
                        <svg width="19" height="14" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.3966 10.3811H16.3446C14.8568 10.3804 13.6509 9.41664 13.6499 8.2267C13.6499 7.03676 14.8568 6.073 16.3446 6.07227H20.3966" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.8029 8.17741H16.491" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4926 1.25851H15.144C18.0448 1.25851 20.3965 3.13936 20.3965 5.45941V11.2048C20.3965 13.5249 18.0448 15.4057 15.144 15.4057H6.4926C3.59178 15.4057 1.24011 13.5249 1.24011 11.2048V5.45941C1.24011 3.13936 3.59178 1.25851 6.4926 1.25851Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                    <div className="balance-info">
                        0.2 $XYZ
                    </div>

                    <div className="tier-name">
                        <p>Tier 1</p>
                    </div>


                </div>

            </div>
            {/* top-section flex */}

            <div className="promo-panel">

                <div className="promo-info">
                    <p className="promo-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="tutorial">Tutorial</button>
                </div>

                <div className="promo-pic">
                    <img src={promopic}></img>
                </div>


                </div>

                <div className="close-icon">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.87378 1.14355L0.873779 8.14355" stroke="#191B20" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M0.873779 1.14355L7.87378 8.14355" stroke="#191B20" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            {/* end of promo panel */}

            <div className="rewards-panel">

                <div className='rewards-info'>
                    <div className='rewards-title'>Your Rewards</div>
                    <div className='rewards-price'>$ 0.26231428</div>

                    <div className='rewards_coin--flex'>
                        <div className='rewards-coin'>
                        $40 AVAX
                        </div>
                        <div className='rewards-coin'>
                        $10 BNB
                        </div>
                        <div className='rewards-coin'>
                        $210 BTC
                        </div>

                    </div>

                </div>

                <div className='custom-link'>
                <a href="" target="_blank"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5913 15.6857H5.59131V13.7295H13.5913V1.99222H3.59131V7.86084H1.59131V1.01411C1.59131 0.474201 2.03931 0.0360107 2.59131 0.0360107H14.5913C15.1433 0.0360107 15.5913 0.474201 15.5913 1.01411V14.7076C15.5913 15.2475 15.1433 15.6857 14.5913 15.6857Z" fill="white"/>
<path d="M11.5912 3.94843H5.59125L7.88425 6.19122L0.177246 13.7295L1.59125 15.1125L9.29825 7.57425L11.5912 9.81705V3.94843Z" fill="white"/>
</svg>
                  </a> 
                  <a href=''>Custom Link</a>       
                </div>

            </div>
            {/* end of rewards panel */}

            <div className='ref-links'>

            <div className='referral-section'>

                <div className='referral-box'>
                
                    <div className='referral_percent--flex'>
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.9747" cy="12.3044" r="12.0673" fill="url(#paint0_linear_0_533)"/>
    <path d="M15.3193 10.2586H11.0659C10.2514 11.1896 8.79163 13.0769 8.79163 14.6595C8.79163 15.3742 9.10917 17.7064 13.1926 17.7064C17.276 17.7064 17.5935 15.3742 17.5935 14.6595C17.5935 13.0769 16.1338 11.1896 15.3193 10.2586Z" fill="white"/>
    <path d="M12.8543 9.58404V8.2299H13.5314V9.58404H15.0947L16.4489 6.87576H9.9368L11.2909 9.58404H12.8543Z" fill="white"/>
    <defs>
    <linearGradient id="paint0_linear_0_533" x1="-11.1598" y1="12.3044" x2="12.9747" y2="36.4389" gradientUnits="userSpaceOnUse">
    <stop stop-color="#BBB5E2"/>
    <stop offset="1" stop-color="#9C92DF"/>
    </linearGradient>
    </defs>
                    </svg>
                    <p className='referral-fee'>12.5% of fee</p>
                    </div>

                    <div className='reflink-name'>Your Referral Link for xyz</div>

                    <div className='referral-link'>
                        <a href='https://unityexchange.design' target="_blank">https://unityexchange.design</a>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white"/>
    <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white"/>
                        </svg>

                    </div>

                </div>

            </div>
            {/* end of referral section */}

            <div className='referral-section'>

                <div className='referral-box'>
                
                    <div className='referral_percent--flex'>
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12.9747" cy="12.3044" r="12.0673" fill="url(#paint0_linear_0_533)"/>
    <path d="M15.3193 10.2586H11.0659C10.2514 11.1896 8.79163 13.0769 8.79163 14.6595C8.79163 15.3742 9.10917 17.7064 13.1926 17.7064C17.276 17.7064 17.5935 15.3742 17.5935 14.6595C17.5935 13.0769 16.1338 11.1896 15.3193 10.2586Z" fill="white"/>
    <path d="M12.8543 9.58404V8.2299H13.5314V9.58404H15.0947L16.4489 6.87576H9.9368L11.2909 9.58404H12.8543Z" fill="white"/>
    <defs>
    <linearGradient id="paint0_linear_0_533" x1="-11.1598" y1="12.3044" x2="12.9747" y2="36.4389" gradientUnits="userSpaceOnUse">
    <stop stop-color="#BBB5E2"/>
    <stop offset="1" stop-color="#9C92DF"/>
    </linearGradient>
    </defs>
                    </svg>
                    <p className='referral-fee'>12.5% of fee</p>
                    </div>

                    <div className='reflink-name'>Your Referral Link for xyz</div>

                    <div className='referral-link'>
                        <a href='https://unityexchange.design' target="_blank">https://unityexchange.design</a>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.2812 12.5594H1.28125C0.72825 12.5594 0.28125 12.1124 0.28125 11.5594V1.55939C0.28125 1.00739 0.72825 0.559387 1.28125 0.559387H11.2812C11.8342 0.559387 12.2812 1.00739 12.2812 1.55939V11.5594C12.2812 12.1124 11.8342 12.5594 11.2812 12.5594Z" fill="white"/>
    <path d="M15.2812 16.5594H4.28125V14.5594H14.2812V4.55939H16.2812V15.5594C16.2812 16.1124 15.8342 16.5594 15.2812 16.5594Z" fill="white"/>
                        </svg>

                    </div>

                </div>

            </div>
            {/* end of referral section */}
            
            </div>
            {/* end of ref-links */}


           <Tabsection value={coinData}/>
            

        </div>
        // end of main section
    )
}