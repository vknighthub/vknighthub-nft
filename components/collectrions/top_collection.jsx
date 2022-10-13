/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import slug from "slug";
import { NFTList } from '../../api/api';
import HeadLine from '../headLine';

const Top_collection = () => {
	const [timeActiveText, setTimeActiveText] = useState('last 7 days');
	const [nftitem, setNftItem] = useState([])
	const [dropdownShow, setDropdownShow] = useState(false);
	const [filterNFT, setFilterNFT] = useState('7d');
	const timeText = [
		{
			id: '24h',
			text: 'Last 24 hours',
		},
		{
			id: '7d',
			text: 'Last 7 days',
		},
		{
			id: '30d',
			text: 'Last 30 days',
		},
	];

	const handleFilter = (filter, activetext) => {
		setTimeActiveText(activetext)
		setFilterNFT(filter);
	};

	const handleDropdown = (e) => {
		window.addEventListener('click', (w) => {
			if (w.target.closest('.dropdown-toggle')) {
				if (dropdownShow) {
					setDropdownShow(false);
				} else {
					setDropdownShow(true);
				}
			} else {
				setDropdownShow(false);
			}
		});
	};

	const fetchedNFT = async (filter) => {
		const { data } = await axios.get(NFTList(filter)).catch(
			function (error) {
				return Promise.reject(error)
			}
		);
		setNftItem(data.ranking)
	};

	useEffect(() => {
		fetchedNFT(filterNFT)
	}, [filterNFT])

	return (
		<div>
			<section className="dark:bg-jacarta-800 relative py-24">
				<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
					<img src="/images/gradient_light.jpg" alt="gradient" className="h-full w-full" />
				</picture>
				<div className="container">
					<div className="font-display text-jacarta-700 mb-12 text-center text-lg sm:text-3xl dark:text-white flex justify-center items-center gap-x-3">
						<HeadLine text="Top collections over" classes="inline" />

						<div className="dropdown cursor-pointer relative">
							<button
								className="dropdown-toggle text-accent inline-flex items-center"
								type="button"
								onClick={(e) => handleDropdown(e)}
							>
								{timeActiveText}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									className="fill-accent h-8 w-8"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
								</svg>
							</button>

							<div
								className={
									dropdownShow
										? 'dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl show text-jacarta-700 dark:text-white absolute m-0 top-full'
										: 'dropdown-menu dark:bg-jacarta-800 z-10  min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl hidden text-jacarta-700 dark:text-white absolute m-0 top-full'
								}
							>
								{timeText.map(({ id, text }, index) => {
									return (
										<button
											key={index}
											onClick={() => {
												handleFilter(id, text);
											}}
											className="block dropdown-text"
										>
											<span className="dropdown-item font-normal text-base dark:hover:bg-jacarta-600 hover:bg-jacarta-50 block rounded-xl px-5 py-2 transition-colors">
												{text}
											</span>
										</button>
									);
								})}
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4">
						{nftitem.slice(0, 20).map((item, index) => {
							const { thumbnail, name, icon, floor_price, policies } = item;
							const policy = policies[0].toString()
							const image = (thumbnail && thumbnail.toString().startsWith("ipfs://"))
								?
								thumbnail.toString().replace("ipfs://", "https://ipfs.io/ipfs/")
								: ''
							return (
								<div
									className="border-jacarta-100 dark:bg-jacarta-700 rounded-2xl flex border bg-white py-4 px-7 transition-shadow hover:shadow-lg dark:border-transparent"
									key={index}
								>
									<figure className="mr-4 shrink-0">
										<Link
											href={
												{
													pathname: '/collection/[collection]',
													query: {
														collection: policy,
														collectionname: slug(name, '-'),
													}
												}
											}
											passHref={true}
										>
											<a className="relative block">
												{image &&
													<Image
														src={image}
														alt={name}
														className="rounded-2lg"
														height={48}
														width={48}
														objectFit="cover"

													/>
												}
												<div className="dark:border-jacarta-600 bg-jacarta-700 absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 border-white text-xs text-white">
													{index + 1}
												</div>
												{icon && (
													<div
														className="dark:border-jacarta-600 bg-green absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
														data-tippy-content="Verified Collection"
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
												)}
											</a>
										</Link>
									</figure>
									<div>
										<Link href={'/collection/'}>
											<a className="block">
												<span className="font-display text-jacarta-700 hover:text-accent font-semibold dark:text-white">
													{name}
												</span>
											</a>
										</Link>
										<span className="dark:text-jacarta-300 text-sm">₳ {floor_price}</span>
									</div>
								</div>
							);
						})}
					</div>
					<div className="mt-10 text-center">
						<Link href="/rankings">
							<a className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
								Go to Rankings
							</a>
						</Link>
					</div>
				</div>
			</section >
		</div >
	);
};

export default Top_collection;
