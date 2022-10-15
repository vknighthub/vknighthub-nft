/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { walletInformation, walletModalShow, poolWalletName } from '../../redux/reducers/walletReducer';
import CardanoWallet from './CardanoWallet';

const Wallet = () => {
    const dispatch = useDispatch();
    const walletModal = useSelector((state) => state.wallet.walletModal);

    const [walletinfor, setWalletInfo] = useState();
    const [walletShow, setWalletShow] = useState(walletModal);

    const [walletName,setWalletName] = useState();

    useEffect(() => {
        if (walletinfor) {
            dispatch((walletInformation(walletinfor)));
        }
        if (walletShow) {
            dispatch(walletModalShow())
            dispatch(poolWalletName(walletName))
            setWalletShow(false)
        }
    }, [walletinfor,walletShow])

    return (
        <>
            <div className="js-nav-dropdown group-dropdown relative">
                <button
                    className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
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
                <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0" >
                    <CardanoWallet WalletInfo={setWalletInfo} WalletShow={setWalletShow} WalletName={setWalletName}/>
                </div>

            </div>

        </>
    );
}

export default Wallet;
