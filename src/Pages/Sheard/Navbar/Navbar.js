import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-neutral container sticky">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <a class="btn">Get started</a>
                    </ul>
                </div>
                {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <div class="">
                    <img src="https://i.ibb.co/02yGKW1/logo.webp" />
                </div>
            </div>
            

            <div class="navbar-end p-2">

                <div class="hidden lg:flex">
                    <ul class="menu text-white menu-horizontal p-0">
                        <li><a>Home</a></li>
                    </ul>
                </div>

                <a class="btn  btn-secondary">Connect Wallet</a>
            </div>
        </div>
    );
};

export default Navbar;