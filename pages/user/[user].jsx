import { useQuery } from '@tanstack/react-query';
import Tippy from '@tippyjs/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'tippy.js/dist/tippy.css'; // optional
import Meta from '../../components/Meta';
import User_items from '../../components/user/User_items';
import { fetchedUserProfile } from './../../fetchers/userprofile';
import stringTruncateFromCenter from './../../util/stringTruncateFromCenter';

const User = ({ user }) => {

	console.log(user)

	const { isError, isSuccess, error, data } = useQuery(
		["userprofile", user],
		() => fetchedUserProfile(user),
		{ staleTime: 3000 }
	);

	const [copied, setCopied] = useState(false);


	if (isError) {
		console.error(error)
	}

	let dataUserProfile = undefined;
	if (isSuccess) {
		dataUserProfile = data
	}


	const imageAvatar = dataUserProfile && dataUserProfile.profile_pic ? dataUserProfile.profile_pic : '/images/avatars/owner_2.png'

	return (
		<>
			<Meta title="User || vKnightHub | NFT Marketplace" />
			{/* <!-- Profile --> */}

			{dataUserProfile &&
				<div className="pt-[5.5rem] lg:pt-24">
					{/* <!-- Banner --> */}
					<div className="relative h-[18.75rem]">
						<Image src={dataUserProfile.banner_pic} alt="banner" layout="fill" objectFit="cover" />
					</div>
					{/* <!-- end banner --> */}
					<section className="dark:bg-jacarta-800 bg-light-base relative pb-12 pt-28">
						{/* <!-- Avatar --> */}
						<div className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
							<figure className="relative h-40 w-40 dark:border-jacarta-600 rounded-xl border-[5px] border-white">
								<Image
									src={imageAvatar}
									alt={user}
									layout="fill"
									objectFit="contain"
									className="dark:border-jacarta-600 rounded-xl border-[5px] border-white"
								/>
								<div
									className="dark:border-jacarta-600 bg-green absolute -right-3 bottom-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white"
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
						</div>

						<div className="container">
							<div className="text-center">
								<h2 className="font-display text-jacarta-700 mb-2 text-4xl font-medium dark:text-white">
									{/* {title} */}
								</h2>
								<div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 mb-8 inline-flex items-center justify-center rounded-full border bg-white py-1.5 px-4">
									<Tippy content="ETH">
										<svg className="icon h-4 w-4 mr-1">
											<use xlinkHref="/icons.svg#icon-ada"></use>
										</svg>
									</Tippy>

									<Tippy
										hideOnClick={false}
										content={copied ? <span>copied</span> : <span>copy</span>}
									>
										<button className="js-copy-clipboard dark:text-jacarta-200 max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap">
											<CopyToClipboard text={user} onCopy={() => setCopied(true)}>
												<span>{stringTruncateFromCenter(user, 15)}</span>
											</CopyToClipboard>
										</button>
									</Tippy>
								</div>

								<div className="dark:text-jacarta-300 mx-auto mb-2 max-w-xl text-lg">{dataUserProfile.name}</div>

							</div>
						</div>
					</section>

					{/* <!-- end profile --> */}
					<User_items />

				</div>
			}
		</>
	);
};

export default User;
User.getInitialProps = ({ query: { user } }) => {
	return { user }
}