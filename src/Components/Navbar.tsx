import React from 'react';
import {Link, Outlet} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <header style={{
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center',
                marginBottom:'30px'
            }}>
                <h1>title</h1>
                <nav>
                    <Link to='/'>home</Link>
                    <Link to='about'>about</Link>
                    <Link to='contact'>contact</Link>
                </nav>
                <button>login</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Navbar;