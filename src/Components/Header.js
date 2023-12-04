import React, {useState} from "react";
import {FaShoppingBag} from "react-icons/fa"

const Header = () =>{
    let [bagOpen, setBagOpen] = useState(false)
    let [textClicked, setTextClicked] = useState(false)

    return (
        <header>
            <div>
                <span className='logo'>Kimberli</span>
                <ul className='navigation'>
                    <li>Abut us</li>
                    <li>Contacts</li>
                    <li>Office</li>
                </ul>
                <FaShoppingBag onClick={() => setBagOpen(bagOpen = !bagOpen)}
                               className={`shop-bag-button ${bagOpen && 'active'}`}/>

                <h2 onClick={()=>setTextClicked(textClicked=!textClicked)}
                    className={`shop-bag-button ${textClicked && 'active'}`}>Click me!</h2>

                {bagOpen && (
                    <div className={'shop-bag'}>
                        {textClicked && (
                            <p>Text successfully clicked</p>
                        )}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}

export default Header