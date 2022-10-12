/* eslint-disable react-hooks/exhaustive-deps */
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import Meta from '../../components/Meta';
import { fetchedAllNFT } from "../../fetchers/nftmarketplace";
import { collectRenkingData } from "../../redux/reducers/nftReducer";
import roundToTwo from "../../util/roundToTwo";
import numberWithCommas from './../../util/numberWithCommas';



const Index = () => {
	const { filteredRenkingData } = useSelector((state) => state.nftmarketplace);
	const dispatch = useDispatch();

	const { isError, isSuccess, data, error } = useQuery(
		["nftmarketplace"],
		fetchedAllNFT,
		{ staleTime: 3000 }
	);

	if (isError) {
		return <div>{Swal.fire("Error!", error, "error")}</div>;
	}

	if (isSuccess) {
		dispatch(collectRenkingData(data));
	}


	return (
		<>
			<Meta title="Rankings || vKnightHub | NFT Marketplace" keyword="NFT Marketplace Top" />
			{/* <!-- Rankings --> */}
			<section className="relative lg:mt-24 lg:pb-24 pb-24">
				<picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
					<Image
						src="/images/gradient_light.jpg"
						layout="fill"
						alt="gradient"
						className="h-full w-full"
					/>
				</picture>
				<div className="container">
					<h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
						Rankings NFT Marketplace
					</h1>


					{/* <!-- Table --> */}
					<div className="scrollbar-custom overflow-x-auto">
						<div
							role="table"
							className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 lg:rounded-2lg w-full min-w-[736px] border bg-white text-sm dark:text-white"
						>
							<div className="dark:bg-jacarta-600 bg-jacarta-50 rounded-t-2lg flex" role="row">
								<div className="w-[28%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Collection
									</span>
								</div>
								<div className="w-[12%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Volume
									</span>
								</div>
								<div className="w-[12%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										24h %
									</span>
								</div>
								<div className="w-[12%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										7d %
									</span>
								</div>
								<div className="w-[12%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Floor Price
									</span>
								</div>
								<div className="w-[12%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										Owners
									</span>
								</div>
								<div className="w-[12%] py-3 px-4" role="columnheader">
									<span className="text-jacarta-700 dark:text-jacarta-100 w-full overflow-hidden text-ellipsis">
										NFT minted
									</span>
								</div>
							</div>
							{filteredRenkingData.slice(0, 20).map((item, index) => {
								const onedaychange = item['1dChange'];
								const h24Color = onedaychange > 0 ? 'green' : 'red';
								const onedaychangeText = roundToTwo(onedaychange * 100) + '%'


								const sevendaychange = item['7dChange'];
								const d7Color = sevendaychange > 0 ? 'green' : 'red';
								const sevendaychangeText = roundToTwo(sevendaychange * 100) + '%'

								const {
									thumbnail,
									name,
									volume,
									floor_price,
									total_owners,
									total_minted,
									policies
								} = item;
								const policy = policies[0].toString()
								const image = (thumbnail && thumbnail.toString().startsWith("ipfs://"))
									?
									thumbnail.toString().replace("ipfs://", "https://ipfs.io/ipfs/")
									: ''
								return (
									<Link
										href={
											{
												pathname: '/collection/[collection]',
												query: {
													collection: policy,
													collectionname: name
												}
											}
										}
										passHref={true}
										key={index}
									>
										<a className="flex transition-shadow hover:shadow-lg" role="row">
											<div
												className="dark:border-jacarta-600 border-jacarta-100 flex w-[28%] items-center border-t py-4 px-4"
												role="cell"
											>
												<span className="mr-2 lg:mr-4">{index + 1}</span>
												<figure className="relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12">
													{image &&
														<Image
															src={image}
															alt={name}
															height={32}
															width={32}
															layout="responsive"
															objectFit="contain"
															className="rounded-2lg"
														/>
													}
													<div
														className="dark:border-jacarta-600 bg-green absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
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
												</figure>
												<span className="font-display text-jacarta-700 text-sm font-semibold dark:text-white">
													{name}
												</span>
											</div>
											<div
												className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center whitespace-nowrap border-t py-4 px-4"
												role="cell"
											>
												<span className="-ml-1" data-tippy-content="ada">
													<svg className="icon mr-1 h-4 w-4">
														<use xlinkHref="/icons.svg#icon-ada"></use>
													</svg>
												</span>
												<span className="text-sm font-medium tracking-tight">{numberWithCommas(volume)}</span>
											</div>
											<div
												className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
												role="cell"
											>
												<span className={`text-${h24Color}`}>{onedaychangeText}</span>
											</div>
											<div
												className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
												role="cell"
											>
												<span className={`text-${d7Color}`}>{sevendaychangeText}</span>
											</div>
											<div
												className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
												role="cell"
											>
												<span className="-ml-1" data-tippy-content="ada">
													<svg className="icon mr-1 h-4 w-4">
														<use xlinkHref="/icons.svg#icon-ada"></use>
													</svg>
												</span>
												<span className="text-sm font-medium tracking-tight">{numberWithCommas(floor_price)}</span>
											</div>
											<div
												className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
												role="cell"
											>
												<span>{numberWithCommas(total_owners)}</span>
											</div>
											<div
												className="dark:border-jacarta-600 border-jacarta-100 flex w-[12%] items-center border-t py-4 px-4"
												role="cell"
											>
												<span>{numberWithCommas(total_minted)}</span>
											</div>
										</a>
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end rankings --> */}
		</>
	);
};

export default Index;
