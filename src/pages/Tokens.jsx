import React from "react";
import iconfirst from '../img/icon_first.svg'
import iconsecond from '../img/icon_second.svg'
import iconthird from '../img/icon_third.svg'

const Tokens = () => {
    return (
        
       <div className='joinStyle'>
       <div className='joinIndex'>
           <div className='joinContainer'>
               <h2 className='joinText'>Join over 10 million people that use CoinList to access the best new tokens
                   before they list on other exchanges
               </h2>
               <div className='joinGrid'>
                   <div className='grid-colums'>
                       <div className='grid-top'>
                           <img src={iconfirst} alt='iconfirst'/>
                       </div>
                       <h4 className='early'>Early</h4>
                       <p className='access' style={{fontSize: 15, textAlign: "center"}}>Get access to the best new tokens before they list on other exchanges.</p>
                   </div>

                   <div className='grid-colums'>
                       <div className='grid-top'>
                           <img src={iconsecond} alt='iconfirst'/>
                       </div>
                       <h4 className='early'>Secure</h4>
                       <p className='access' style={{fontSize: 14, textAlign: "center"}}>Your funds are secure. We only work with reputable custodians and the vast majority of funds are stored offline.</p>
                   </div>

                   <div className='grid-colums'>
                       <div className='grid-top'>
                           <img src={iconthird} alt='iconfirst'/>
                       </div>
                       <h4 className='early'>Compliant</h4>
                       <p className='access' style={{fontSize: 14, textAlign: "center"}}><a className='we' href='#'><strong style={{textDecoration: "none", color: 'rgb(168, 168, 168)'}}>We aim to maintain</strong></a> the highest possible compliance with anti-money laundering laws in the U.S. and elsewhere.</p>
                   </div>
               </div>

               <div className='out'>
                   <a className='learn' href='https://coinlist.co/products'>Learn about our products</a>
               </div>

           </div>
       </div>
   </div>
    )
}

export default Tokens;