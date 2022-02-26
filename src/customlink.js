import avalanche from './avalanche.png'

export default function Customlink(){
    return (
        <div className="customlink-section">

            <div className="wallet-info">

                <div className="chain-name">
                    <img src={avalanche} className="avax"></img>
                    <p className='coin-name'>Avalanche</p>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.82277 0.0812988L4.52778 3.72408L1.2328 0.0812988L0.220612 1.20276L4.52778 5.97496L8.83495 1.20276L7.82277 0.0812988Z" fill="white"/>
                    </svg>

                </div>


                <div className="chain-info">
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3479 10.2662H16.2959C14.8081 10.2655 13.6022 9.30171 13.6013 8.11177C13.6013 6.92184 14.8081 5.95807 16.2959 5.95734H20.3479" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7542 8.06248H16.4423" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.4439 1.14359H15.0953C17.9961 1.14359 20.3478 3.02443 20.3478 5.34448V11.0899C20.3478 13.4099 17.9961 15.2908 15.0953 15.2908H6.4439C3.54308 15.2908 1.19141 13.4099 1.19141 11.0899V5.34448C1.19141 3.02443 3.54308 1.14359 6.4439 1.14359Z" stroke="#3772FF" stroke-width="1.25176" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="hash">0xf6...1353</p>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2969 0.236542L6.026 3.92013L1.75509 0.236542L0.443115 1.37057L6.026 6.19624L11.6089 1.37057L10.2969 0.236542Z" fill="white"/>
                </svg>

                </div>

            </div>

            
            <div className='link-box'>

                <div className="custom_link--flex">

                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.159832 6.55645L4.36365 2.35263L5.13492 3.1239L1.8622 6.39663H11.4546C11.7562 6.39663 12 6.64099 12 6.94209C12 7.24318 11.7562 7.48754 11.4546 7.48754H1.8622L5.13492 10.7603L4.36365 11.5315L0.159832 7.32772C-0.0534402 7.11445 -0.0534402 6.76972 0.159832 6.55645Z" fill="white"/>
                    </svg>
                    <p className="custom_link--name">Custom Link</p>

                </div>

                <div className="show-customlink">
                    <a href="https://testnet.xyz.xyz/trade?ref=" target="_blank">https://testnet.xyz.xyz/trade?ref=
                    </a>
                </div>

                <input type="text" placeholder='Enter' className='enter-link'></input>


                <div className='custom_link--btns'>

                <div className='custom-link'>
                <a href="" target="_blank"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5913 15.6857H5.59131V13.7295H13.5913V1.99222H3.59131V7.86084H1.59131V1.01411C1.59131 0.474201 2.03931 0.0360107 2.59131 0.0360107H14.5913C15.1433 0.0360107 15.5913 0.474201 15.5913 1.01411V14.7076C15.5913 15.2475 15.1433 15.6857 14.5913 15.6857Z" fill="white"/>
<path d="M11.5912 3.94843H5.59125L7.88425 6.19122L0.177246 13.7295L1.59125 15.1125L9.29825 7.57425L11.5912 9.81705V3.94843Z" fill="white"/>
</svg>
                  </a> 
                  <a href=''>Custom Link</a>       
                </div>

                <div className='custom-link cancel-link'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.05151 7.8042H0.0515137V9.8042H6.05151V12.8042L10.0515 8.8042L6.05151 4.8042V7.8042Z" fill="white"/>
<path d="M15.0515 16.8042H1.05151C0.499514 16.8042 0.0515137 16.3562 0.0515137 15.8042V11.8042H2.05151V14.8042H14.0515V2.8042H2.05151V5.8042H0.0515137V1.8042C0.0515137 1.2522 0.499514 0.804199 1.05151 0.804199H15.0515C15.6035 0.804199 16.0515 1.2522 16.0515 1.8042V15.8042C16.0515 16.3562 15.6035 16.8042 15.0515 16.8042Z" fill="white"/>
</svg>
 
                  <a href=''>Cancel</a>       
                </div>
                
                </div>

            </div>

        </div>
        // end of custom-link section
    )
}