import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Feature_collections_data from '../../data/Feature_collections_data';

const Explore_collection_item = ({ itemFor }) => {
	const { sortedCollectionData } = useSelector((state) => state.counter);

	const [itemData, setItemData] = useState();

	// useEffect(() => {
	// 	if (itemFor === 'userPage') {
	// 		setItemData(Feature_collections_data.slice(0, 4));
	// 		console.log(itemData);
	// 	} else {
	// 		setItemData(sortedCollectionData);
	// 	}
	// }, [sortedCollectionData, itemFor]);

	return (
		<>
			{
				itemData ?
					itemData.map((item) => {
						const {
							id,
							bigImage,
							subImage1,
							subImage2,
							subImage3,
							userImage,
							title,
							itemsCount,
							userName,
						} = item;
						return (
							<>
								<div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3 lg:grid-cols-4">
									<article key={id}>
										<div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2xl border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
											<Link href="/collection/avatar_1">
												<a className="flex space-x-[0.625rem]">
													<span className="w-[74.5%]">
														<img
															src={bigImage}
															alt="item 1"
															className="h-full w-full rounded-[0.625rem] object-cover"
															loading="lazy"
														/>
													</span>
													<span className="flex w-1/3 flex-col space-y-[0.625rem]">
														<img
															src={subImage1}
															alt="item 1"
															className="h-full rounded-[0.625rem] object-cover"
															loading="lazy"
														/>
														<img
															src={subImage2}
															alt="item 1"
															className="h-full rounded-[0.625rem] object-cover"
															loading="lazy"
														/>
														<img
															src={subImage3}
															alt="item 1"
															className="h-full rounded-[0.625rem] object-cover"
															loading="lazy"
														/>
													</span>
												</a>
											</Link>

											<Link href="/collection/avatar_1">
												<a className="font-display hover:text-accent dark:hover:text-accent text-jacarta-700 mt-4 block text-base dark:text-white">
													{title}
												</a>
											</Link>

											<div className="mt-2 flex items-center justify-between text-sm font-medium tracking-tight">
												<div className="flex flex-wrap items-center">
													<Link href="/user/avatar_6">
														<a className="mr-2 shrink-0">
															<img src={userImage} alt="owner" className="h-5 w-5 rounded-full" />
														</a>
													</Link>
													<span className="dark:text-jacarta-400 mr-1">by</span>
													<Link href="/user/avatar_6">
														<a className="text-accent">
															<span>{userName}</span>
														</a>
													</Link>
												</div>
												<span className="dark:text-jacarta-300 text-sm">{itemsCount} Items</span>
											</div>
										</div>
									</article>
								</div>
							</>
						);
					})

					:

					<>
						<article>
							<div className="mt-2 items-center tracking-tight" style={{
								margin: "auto",
								display: "flex",
								flexDirection: "column"
							}}>
								<div className="items-center text-center relative " style={{
									width: "300px",
									position: "relative",
									alignSelf: "center"
								}}>
									<Image src="/images/collections/empty_state.gif"
										alt="owner"
										width={350}
										height={350}
									/>

								</div>
								<p className="text-center pt-5 text-2xl">
									No collections found!
								</p>
								<div className="text-center pt-10 flex">
									<Link href="/minting">
										<a className="shadow-accent-volume hover:bg-accent-dark w-50 rounded-full py-3 px-8 text-center font-semibold text-white transition-all">
											Start Creating
										</a>
									</Link>
								</div>
							</div>
						</article>
					</>

			}
		</>
	);
};

export default Explore_collection_item;
