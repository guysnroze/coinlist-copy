import React from "react";
import cryptologo from '../img/cryptologo.png'

const CryproHeader = () => {
    return (
        <div id='cover_top_content'>
            <div className='s-containerr'>
                <div className='text-container'>
                <div className='tx'>
                    Crypto is going mainstream
                    <div className='tx'>We help you go upstream</div>
                </div>
                    <div className='g'>
                        <a className='pr g index-new-home' href='#'>Get Started</a>
                        <a className='pr g index-new-home' href='#'>View Products</a>
                    </div>
                <img className='cr' src={cryptologo}/>
                </div>
            </div>
       </div>

    )
}

export default CryproHeader;