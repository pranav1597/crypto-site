import React from 'react'
import avalanche from './avalanche.png'


export default function Tabsection(props){
    
    return(

<div className="tab-section">

<div className="tab_name--flex">
    <p className='tab_section--name first-tab'>First Tab</p>
    <p className='tab_section--name second-tab'>Second Tab</p>
</div>

<div className='tab_column--name'>
    <p className='column-names'>asset</p>
    <p className='column-names'>amount</p>
    <p className='column-names'>user account</p>
    <p className='column-names'>referral earning</p>
</div>

<div className='tab_column-details'>

    <div className='asset-flex'>
        <img src={props.value.img} className="bitcoin-pic"></img>
        <div className='asset-details'>
           <div className='asset-name'>{props.value.asset}</div> 
           
           <div className='asset_coin--flex'>

              <div className='put'>{props.value.type}</div>

              <div className='asset_coin'>
                  <img src={avalanche} className="avax-pic"></img>
                  <p className='avax-coin'>Avax</p>
              </div>
            
           </div>

        </div>


    </div>
    {/* end of asset flex */}

    <div className="amount-details">
        <div className='amounts'>{props.value.amount} BNB</div>
        <div className='amount-status'>{props.value.state}</div>
    </div>

    <div className="user-account">
    {props.value.user}
    </div>

    <div className='ref-earning'>
        <div className='earning-earned'>{props.value.referral_earnings} BNB</div>
        <div className='bsc-scan'>
            <a href="">View on BSC scan</a>
            <a href=""><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.985107 8.18536C0.985107 8.46581 1.10034 8.73479 1.30546 8.9331C1.51057 9.13141 1.78877 9.24282 2.07885 9.24282H7.91215C8.20223 9.24282 8.48043 9.13141 8.68555 8.9331C8.89066 8.73479 9.0059 8.46581 9.0059 8.18536V5.36545C9.0059 5.27197 8.96749 5.18231 8.89911 5.1162C8.83074 5.0501 8.73801 5.01296 8.64132 5.01296C8.54462 5.01296 8.45189 5.0501 8.38352 5.1162C8.31515 5.18231 8.27673 5.27197 8.27673 5.36545V8.18536C8.27673 8.27884 8.23832 8.3685 8.16995 8.4346C8.10158 8.50071 8.00885 8.53785 7.91215 8.53785H2.07885C1.98216 8.53785 1.88943 8.50071 1.82105 8.4346C1.75268 8.3685 1.71427 8.27884 1.71427 8.18536V2.54554C1.71427 2.45206 1.75268 2.3624 1.82105 2.2963C1.88943 2.23019 1.98216 2.19306 2.07885 2.19306H4.9955C5.0922 2.19306 5.18493 2.15592 5.2533 2.08981C5.32167 2.02371 5.36008 1.93405 5.36008 1.84057C5.36008 1.74708 5.32167 1.65742 5.2533 1.59132C5.18493 1.52522 5.0922 1.48808 4.9955 1.48808H2.07885C1.78877 1.48808 1.51057 1.59949 1.30546 1.7978C1.10034 1.99612 0.985107 2.26509 0.985107 2.54554V8.18536ZM6.08925 0.430613C6.08925 0.337128 6.12766 0.247471 6.19603 0.181366C6.2644 0.115262 6.35714 0.078125 6.45383 0.078125H10.0996C10.1963 0.078125 10.2891 0.115262 10.3574 0.181366C10.4258 0.247471 10.4642 0.337128 10.4642 0.430613V3.9555C10.4642 4.04898 10.4258 4.13864 10.3574 4.20474C10.2891 4.27085 10.1963 4.30799 10.0996 4.30799C10.0029 4.30799 9.91022 4.27085 9.84184 4.20474C9.77347 4.13864 9.73506 4.04898 9.73506 3.9555V0.783102H6.45383C6.35714 0.783102 6.2644 0.745965 6.19603 0.67986C6.12766 0.613756 6.08925 0.524099 6.08925 0.430613Z" fill="#808191"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3575 0.180705C10.3914 0.213448 10.4183 0.252346 10.4367 0.29517C10.4551 0.337994 10.4646 0.383902 10.4646 0.430267C10.4646 0.476631 10.4551 0.52254 10.4367 0.565364C10.4183 0.608188 10.3914 0.647085 10.3575 0.679829L4.52415 6.31964C4.49025 6.35241 4.45001 6.37841 4.40572 6.39615C4.36143 6.41388 4.31397 6.42301 4.26603 6.42301C4.21809 6.42301 4.17062 6.41388 4.12633 6.39615C4.08204 6.37841 4.0418 6.35241 4.0079 6.31964C3.97401 6.28687 3.94712 6.24796 3.92877 6.20514C3.91043 6.16232 3.90099 6.11643 3.90099 6.07008C3.90099 6.02373 3.91043 5.97784 3.92877 5.93502C3.94712 5.8922 3.97401 5.85329 4.0079 5.82052L9.8412 0.180705C9.87507 0.147879 9.9153 0.121835 9.9596 0.104065C10.0039 0.0862954 10.0514 0.0771484 10.0993 0.0771484C10.1473 0.0771484 10.1948 0.0862954 10.2391 0.104065C10.2834 0.121835 10.3236 0.147879 10.3575 0.180705Z" fill="#808191"/>
</svg>
</a>
        </div>
    </div>


</div>
{/* tab column details */}

</div>
// end of section


    )



}

