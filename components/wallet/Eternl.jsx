import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Cardano } from './wallet-js/Cardano';
import blockfrostApiKey from './config';
import EternlWalletApi from './wallet-js/eternl-js/eternl';

let ccvault

const Eternl = () => {
    const [eternlConnected, setEternlConnected] = useState();

    const connectEternl = async () => {
        // Connects Eternl wallet to current website 
        await ccvault.enable()
            .then(result => setEternlConnected(result))
            .catch(e => console.log(e))
    }

    useEffect(() => {
        async function t() {
            const S = await Cardano();
            ccvault = new EternlWalletApi(
                S,
                window.cardano,
                blockfrostApiKey
            )
            if (await ccvault.isInstalled()) {
                await ccvault.isEnabled().then(result => { setEternlConnected(result) })
            }
            console.log(eternlConnected)
        }
        t()
    }, [eternlConnected])

    return (
        <>
            <Link href="#">
                <a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors"
                    onClick={() => connectEternl()}
                >
                    <Image src="/images/eternl.webp" width={32} height={32} alt="Eternl Wallet" />
                    <span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
                        Eternl
                    </span>
                </a>
            </Link>
        </>
    )
}
export default Eternl