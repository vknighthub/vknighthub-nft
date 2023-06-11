import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HeadLine } from '../../components/component';
import Meta from '../../components/Meta';

const Minting = () => {
    return (
        <>
            <Meta title="Minting || vKnightHub | NFT Marketplace" />
            <section className="relative pt-24 ">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <Image
                        src="/images/gradient_light.jpg"
                        alt="gradient"
                        className="h-full w-full"
                        layout="fill"
                    />
                </picture>
                <div className="container">
                    {/* <!-- Page Title --> */}
                    <div className="mx-auto max-w-2xl py-16 text-center">
                        <h1 className="font-display text-jacarta-700 mb-8 text-4xl font-medium dark:text-white">
                            Create your own NFTs
                        </h1>
                        <p className="dark:text-jacarta-300 text-lg leading-normal">
                            Empowering artists, both big and small, to easily bring your artwork to the blockchain
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative">
                <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
                    <Image
                        src="/images/gradient_light.jpg"
                        layout="fill"
                        alt="gradient"
                        className="h-full w-full"
                    />
                </picture>
                <div className="container">
                    <HeadLine
                        classes="font-display text-jacarta-700 mb-12 text-center text-3xl dark:text-white"
                    />
                    <article>
                        <div className="flex rounded-2xl overflow-hidden transition-shadow hover:shadow-lg items-center ">

                            {/* <!-- Body --> */}
                            <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] p-[5%] lg:w-[45%] text-center items-center ">
                                {/* <!-- Meta --> */}
                                <div className="mb-3 flex flex-wrap items-center space-x-1"
                                    style={{
                                        margin: "auto",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <Image
                                        src="/images/partners/partnert-cardano.png"
                                        alt={'Cardano'}
                                        className="transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        width={280}
                                        height={150}
                                        style={{
                                            position: "relative",
                                            alignSelf: "center"
                                        }}
                                    />

                                </div>

                                <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white mt-5">
                                    Single NFT
                                </h2>
                                <p className="dark:text-jacarta-200 mb-8">
                                    Easiest way to convert your artwork into an NFT. We recommend using it if you are creating a small collection to minting NFTs one at a time to your wallet.
                                </p>
                                <div className="text-center pt-10">
                                    <Link href="/create">
                                        <a className="shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all lg:text-[1rem] text-[0.5rem]">
                                            Create Single NFT
                                        </a>
                                    </Link>
                                </div>
                                {/* <!-- Date / Time --> */}
                                <div className="text-jacarta-400 items-center text-sm pt-10">
                                    <span>•</span>
                                    <span>Mint Cost: 1 ADA + ~0.2 ADA network fee per NFT</span>
                                </div>
                            </div>


                            {/* <!-- Body --> */}
                            <div className="dark:border-jacarta-600 dark:bg-jacarta-700 border-jacarta-100 rounded-b-[1.25rem] p-[5%] lg:w-[45%] text-center items-center ml-[5%]">
                                {/* <!-- Meta --> */}
                                <div className="mb-3 flex flex-wrap items-center space-x-1"
                                    style={{
                                        margin: "auto",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}
                                >
                                    <Image
                                        src="/images/partners/partnert-cardano.png"
                                        alt={'Cardano'}
                                        className="transition-transform duration-[1600ms] will-change-transform group-hover:scale-105 "
                                        width={280}
                                        height={150}
                                        style={{
                                            position: "relative",
                                            alignSelf: "center"
                                        }}
                                    />

                                </div>

                                <h2 className="font-display text-jacarta-700 dark:hover:text-accent hover:text-accent mb-4 text-xl dark:text-white mt-5">
                                    Large NFT
                                </h2>
                                <p className="dark:text-jacarta-200 mb-8">
                                    Want to create an NFT drop with hundreds or thousands of items? Build your collection with advanced tools and a brandable minting experience.
                                </p>
                                <div className="text-center pt-10">
                                    <Link href="/minting" >
                                        <a style={{pointerEvents: 'none'}} className="shadow-accent-volume hover:bg-accent-dark w-36 rounded-full py-3 px-8 text-center font-semibold text-white transition-all lg:text-[1rem] text-[0.5rem]">
                                            Soon
                                        </a>
                                    </Link>
                                </div>
                                {/* <!-- Date / Time --> */}
                                <div className="text-jacarta-400 items-center text-sm pt-10">
                                    <span>•</span>
                                    <span>Mint Cost: 1 ADA + ~0.2 ADA network fee per NFT</span>
                                </div>
                            </div>


                        </div>



                    </article>


                </div>
            </section>
        </>
    );
}

export default Minting;
