import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NamiWalletApi, { Cardano } from './nami-js';
import blockfrostApiKey from './config.js';

let nami;

const Wallet = () => {
    const [profileShow, setProfileShow] = useState(false);
    const [namiConnected, setNamiConnected] = useState()
    const [balancenami, setBalancenami] = useState(0);

    const connectNami = async () => {
        // Connects nami wallet to current website 
        await nami.enable()
            .then(result => setConnected(result))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        async function t() {
            const S = await Cardano();
            nami = new NamiWalletApi(
                S,
                window.cardano,
                blockfrostApiKey
            )
            if (await nami.isInstalled()) {
                await nami.isEnabled().then(result => { setNamiConnected(result) })
                await nami.getBalance().then(result => { setBalancenami(result.lovelace) })
            }
        }
        t()
    }, [])

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

                    <Link href="#">
                        <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                            onClick={() => connectNami()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 45 44"
                                width="45"
                                height="44"
                                className="fill-jacarta-700 h-8 w-8 transition-colors dark:fill-white"
                            >
                                <path d="M9.83984 2.31543H14.0056L35.3826 23.5828V11.4144H38.4521V30.3796L9.83984 2.31543Z" fill="#349EA3" />
                                <path d="M39.6602 43.5347H35.4944L14.1174 22.2673V34.4357H11.0479V15.4705L39.6602 43.5347Z" fill="#349EA3" />
                                <path d="M7.21094 7.13901L8.85532 5.49463L43.7163 41.123L7.21094 7.13901Z" fill="#349EA3" />
                                <path d="M40.2064 8.45454C40.2064 10.2709 38.734 11.7433 36.9177 11.7433C35.1013 11.7433 33.6289 10.2709 33.6289 8.45454C33.6289 6.6382 35.1013 5.16577 36.9177 5.16577C38.734 5.16577 40.2064 6.6382 40.2064 8.45454ZM34.8925 8.45454C34.8925 9.57304 35.7992 10.4798 36.9177 10.4798C38.0362 10.4798 38.9429 9.57304 38.9429 8.45454C38.9429 7.33604 38.0362 6.42932 36.9177 6.42932C35.7992 6.42932 34.8925 7.33604 34.8925 8.45454Z" fill="#349EA3" />
                                <path d="M15.8705 36.9572C15.8705 38.7736 14.3981 40.246 12.5817 40.246C10.7654 40.246 9.29297 38.7736 9.29297 36.9572C9.29297 35.1409 10.7654 33.6685 12.5817 33.6685C14.3981 33.6685 15.8705 35.1409 15.8705 36.9572ZM10.5565 36.9572C10.5565 38.0757 11.4632 38.9824 12.5817 38.9824C13.7002 38.9824 14.607 38.0757 14.607 36.9572C14.607 35.8387 13.7002 34.932 12.5817 34.932C11.4632 34.932 10.5565 35.8387 10.5565 36.9572Z" fill="#349EA3" />
                                <path d="M9.29238 4.28877C9.29238 6.10511 7.81995 7.57754 6.00361 7.57754C4.18728 7.57754 2.71484 6.10511 2.71484 4.28877C2.71484 2.47243 4.18728 1 6.00361 1C7.81995 1 9.29238 2.47243 9.29238 4.28877ZM3.97839 4.28877C3.97839 5.40727 4.88512 6.31399 6.00361 6.31399C7.12211 6.31399 8.02883 5.40727 8.02883 4.28877C8.02883 3.17027 7.12211 2.26355 6.00361 2.26355C4.88512 2.26355 3.97839 3.17027 3.97839 4.28877Z" fill="#349EA3" />

                            </svg>
                            <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                                {namiConnected ? `${balancenami / 1000000} ADA` : "Nami"}
                            </span>
                        </a>
                    </Link>
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
