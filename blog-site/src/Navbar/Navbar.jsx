import React from 'react';
import './Navbar.css'
function Navbar(){
     return (
        <div className='top'>
            <div className='topLeft'>
            <i className="icon fa-brands fa-facebook"></i>
            <i className="icon fa-brands fa-twitter"></i>
            <i className="icon fa-brands fa-instagram"></i>
            <i className="icon fa-brands fa-linkedin"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImage' src='https://media.licdn.com/dms/image/D4D03AQErkbfgXmsddQ/profile-displayphoto-shrink_400_400/0/1665321756108?e=1697673600&v=beta&t=CkVYhnsZlea2Nn29z5LksfMsbwd2diNTjzGexYS3kSc'
                alt=''
                />
                <i className="topSearch fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
     )
}
export default Navbar;