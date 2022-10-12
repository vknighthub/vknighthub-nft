import { useQuery } from '@tanstack/react-query';
import Tippy from '@tippyjs/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Collection_items from '../../components/collectrions/Collection_items';
import Meta from '../../components/Meta';
import { fetchedDetailNFT } from '../../fetchers/nftdetail';
import { followCursor } from 'tippy.js';
import Link from 'next/link';
import numberWithCommas from '../../util/numberWithCommas';


const Collection = () => {
	const [likesImage, setLikesImage] = useState(false);

	const router = useRouter();
	const policyid = router.query.collection;
	const colectName = router.query.collectionname;

	const { isError, data, error } = useQuery(
		["nftdetail", policyid],
		() => fetchedDetailNFT(policyid),
		{ staleTime: 3000 }
	);

	const handleLikes = () => {
		if (!likesImage) {
			setLikesImage(true);
		} else {
			setLikesImage(false);
		}
	};

	if (isError) {
		console.error(error)
	}

	const image = (data && data.thumbnail && data.thumbnail.toString().startsWith("ipfs://")) ? data.thumbnail.toString().replace("ipfs://", "https://ipfs.io/ipfs/") : ''

	console.log(image)

	return (
		<>
			<Meta title={`${`colectName`} || vKnightHub | NFT Marketplace`} />

			<div className="pt-[5.5rem] lg:pt-24">
				{/* <!-- Banner --> */}
				<div className="relative h-[300px]">
					<Image
						src="/images/collections/collection_banner.png"
						alt="banner"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				{/* <!-- end banner --> */}

				{/* <!-- Profile --> */}

				<section className="dark:bg-jacarta-800 bg-light-base relative pb-12 pt-28">
					{/* <!-- Avatar --> */}
					<div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
						<figure className="relative h-40 w-40 dark:border-jacarta-600 rounded-xl border-[5px] border-white">
							{image &&
								<Image
									src={image}
									alt={colectName}
									layout="fill"
									objectFit="contain"
									className="dark:border-jacarta-600 rounded-xl border-[5px] border-white"
								/>
							}
							<Tippy content={<span>Verified Collection</span>} followCursor={true} plugins={[followCursor]}>
								<div
									className="dark:border-jacarta-600 bg-green absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										width="24"
										height="24"
										className="h-[.875rem] w-[.875rem] fill-white"
									>
										<path fill="none" d="M0 0h24v24H0z"></path>
										<path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
									</svg>
								</div>
							</Tippy>

						</figure>
					</div>


					<div className="container">
						<div className="text-center">
							<h2 className="font-display text-jacarta-700 mb-2 text-4xl font-medium dark:text-white">
								{colectName}
							</h2>
							<div className="mb-8">
								<span className="text-jacarta-400 text-sm font-bold">Statistics obtained from </span>
								<Link href="https://opencnft.io/">
									<a className="text-accent text-sm font-bold" target="_blank">{`opencnft.io`}</a>
								</Link>
							</div>

							{data &&
								<>
									<div className="dark:bg-jacarta-800 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex flex-wrap items-center justify-center rounded-xl border bg-white">
										<Tippy content={<span className="text-blue">Amount of minted for the colleciton</span>} followCursor={true} plugins={[followCursor]}>
											<a className="dark:border-jacarta-600 border-jacarta-100 w-1/2 rounded-l-xl border-r py-4 hover:shadow-md sm:w-32">
												<div className="text-jacarta-700 mb-1 text-base font-bold dark:text-white">
													{numberWithCommas(data.asset_minted)}
												</div>
												<div className="text-2xs dark:text-jacarta-400 font-medium tracking-tight">
													items
												</div>
											</a>
										</Tippy>
										<Link href="#">
											<Tippy content={<span className="text-blue">Unique wallet address amount that hold at least one of this collection NFTs</span>} followCursor={true} plugins={[followCursor]}>

												<a className="dark:border-jacarta-600 border-jacarta-100 w-1/2 rounded-l-xl border-r py-4 hover:shadow-md sm:w-32">
													<div className="text-jacarta-700 mb-1 text-base font-bold dark:text-white">
														{numberWithCommas(data.asset_holders)}
													</div>
													<div className="text-2xs dark:text-jacarta-400 font-medium tracking-tight">
														owners
													</div>
												</a>
											</Tippy>
										</Link>
										<Tippy content={<span className="text-blue">Cheapest asset for sale</span>} followCursor={true} plugins={[followCursor]}>
											<a className="dark:border-jacarta-600 border-jacarta-100 w-1/2 rounded-l-xl border-r py-4 hover:shadow-md sm:w-32">
												<div className="flex items-center px-7">
													<span>
														<svg className="icon mr-1 h-4 w-4">
															<use xlinkHref="/icons.svg#icon-ada"></use>
														</svg>
													</span>
													<span className="text-sm font-medium tracking-tight">{numberWithCommas(data.floor_price / 100000)}</span>
												</div>
												<div className="text-2xs dark:text-jacarta-400 font-medium tracking-tight">
													floor
												</div>
											</a>
										</Tippy>
										<Tippy content={<span className="text-blue">Cheapest asset for sale</span>} followCursor={true} plugins={[followCursor]}>
											<a className="dark:border-jacarta-600 border-jacarta-100 w-1/2 rounded-l-xl border-r py-4 hover:shadow-md sm:w-48">
												<div className="flex items-center px-4">
													<span>
														<svg className="icon mr-1 h-4 w-4">
															<use xlinkHref="/icons.svg#icon-ada"></use>
														</svg>
													</span>
													<span className="text-sm font-medium tracking-tight">{numberWithCommas(data.total_volume)}</span>
												</div>
												<div className="text-2xs dark:text-jacarta-400 font-medium tracking-tight">
													volume
												</div>
											</a>
										</Tippy>
									</div>
									<p className="dark:text-jacarta-300">
										{colectName} is a collection of {numberWithCommas(data.asset_minted)} unique NFTs generated on the Cardano blockchain. Every holder is a member of one of our 35 families, and gets access to the DAO. We aim to create tools, resources, unique art, and harness the power of community to create a breeding ground for knowledge, collaboration, and fun.
									</p>
								</>
							}
							{/* 
							<div className="mt-6 flex items-center justify-center space-x-2.5 relative">
								<div className="dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white">
									<div
										className="js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm"
										onClick={() => handleLikes()}
									>
										<button>
											{likesImage ? (
												<svg className="icon dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4">
													<use xlinkHref="/icons.svg#icon-heart-fill"></use>
												</svg>
											) : (
												<svg className="icon dark:fill-jacarta-200 fill-jacarta-500 h-4 w-4">
													<use xlinkHref="/icons.svg#icon-heart"></use>
												</svg>
											)}
										</button>
									</div>
								</div>

								<Social_dropdown />
								<Auctions_dropdown classes="dark:border-jacarta-600 dark:hover:bg-jacarta-600 border-jacarta-100 dropdown hover:bg-jacarta-100 dark:bg-jacarta-700 rounded-xl border bg-white relative" />
							
							</div> */}

						</div>

					</div>
				</section>

				{/* <!-- end profile --> */}
			</div>
			<Collection_items />
		</>
	);
};

export default Collection;
