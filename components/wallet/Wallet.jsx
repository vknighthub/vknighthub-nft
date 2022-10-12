import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Nami from './nami';




const Wallet = () => {
    const [profileShow, setProfileShow] = useState(false);
    

    return (
        <>
            <div className="js-nav-dropdown group-dropdown relative">
                <button
                    className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
                    onMouseEnter={() => setProfileShow(true)}
                    onMouseLeave={() => setProfileShow(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M22 6h-7a6 6 0 1 0 0 12h7v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2zm-7 2h8v8h-8a4 4 0 1 1 0-8zm0 3v2h3v-2h-3z"></path>
                    </svg>
                </button>
                <div
                    className={
                        profileShow
                            ? "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100"
                            : "dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0"
                    }
                    onMouseEnter={() => setProfileShow(true)}
                    onMouseLeave={() => setProfileShow(false)}
                >

                    <Nami />
                    
                    <Link href="/profile/user_avatar">
                        <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
                            <Image src="/images/eternl.webp" width={32} height={32} alt="Eternl Wallet" />
                            <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                                Eternl
                            </span>
                        </a>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Wallet;
