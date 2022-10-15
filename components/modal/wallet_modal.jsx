import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { walletModalhide } from '../../redux/reducers/walletReducer';

const Wallet_modal = () => {
	const walletModal = useSelector((state) => state.wallet.walletModal);
	const walletName = useSelector((state) => state.wallet.walletName);
	const dispatch = useDispatch();
	return (
		<div>
			{/* <!-- Wallet Modal --> */}
			<div className={walletModal ? 'block modal fade show ' : 'modal fade hidden'}>
				<div className="modal-dialog max-w-2xl">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title font-display text-center text-2xl font-medium text-white" id="walletModalLabel">
								Connect your wallet
							</h5>
							<button
								type="button"
								className="btn-close"
								onClick={() => dispatch(walletModalhide())}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									className="fill-jacarta-700 h-6 w-6 dark:fill-white"
								>
									<path fill="none" d="M0 0h24v24H0z" />
									<path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
								</svg>
							</button>
						</div>

						{/* <!-- Body --> */}
						<div className="modal-body p-6 text-center">
							{walletName === 'nami' ?
								<>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 45 44"
										className="w-[140px] inline-block"
										preserveAspectRatio="xMaxYMax meet"
									>
										<path d="M9.83984 2.31543H14.0056L35.3826 23.5828V11.4144H38.4521V30.3796L9.83984 2.31543Z" fill="#349EA3" />
										<path d="M39.6602 43.5347H35.4944L14.1174 22.2673V34.4357H11.0479V15.4705L39.6602 43.5347Z" fill="#349EA3" />
										<path d="M7.21094 7.13901L8.85532 5.49463L43.7163 41.123L7.21094 7.13901Z" fill="#349EA3" />
										<path d="M40.2064 8.45454C40.2064 10.2709 38.734 11.7433 36.9177 11.7433C35.1013 11.7433 33.6289 10.2709 33.6289 8.45454C33.6289 6.6382 35.1013 5.16577 36.9177 5.16577C38.734 5.16577 40.2064 6.6382 40.2064 8.45454ZM34.8925 8.45454C34.8925 9.57304 35.7992 10.4798 36.9177 10.4798C38.0362 10.4798 38.9429 9.57304 38.9429 8.45454C38.9429 7.33604 38.0362 6.42932 36.9177 6.42932C35.7992 6.42932 34.8925 7.33604 34.8925 8.45454Z" fill="#349EA3" />
										<path d="M15.8705 36.9572C15.8705 38.7736 14.3981 40.246 12.5817 40.246C10.7654 40.246 9.29297 38.7736 9.29297 36.9572C9.29297 35.1409 10.7654 33.6685 12.5817 33.6685C14.3981 33.6685 15.8705 35.1409 15.8705 36.9572ZM10.5565 36.9572C10.5565 38.0757 11.4632 38.9824 12.5817 38.9824C13.7002 38.9824 14.607 38.0757 14.607 36.9572C14.607 35.8387 13.7002 34.932 12.5817 34.932C11.4632 34.932 10.5565 35.8387 10.5565 36.9572Z" fill="#349EA3" />
										<path d="M9.29238 4.28877C9.29238 6.10511 7.81995 7.57754 6.00361 7.57754C4.18728 7.57754 2.71484 6.10511 2.71484 4.28877C2.71484 2.47243 4.18728 1 6.00361 1C7.81995 1 9.29238 2.47243 9.29238 4.28877ZM3.97839 4.28877C3.97839 5.40727 4.88512 6.31399 6.00361 6.31399C7.12211 6.31399 8.02883 5.40727 8.02883 4.28877C8.02883 3.17027 7.12211 2.26355 6.00361 2.26355C4.88512 2.26355 3.97839 3.17027 3.97839 4.28877Z" fill="#349EA3" />

									</svg>
									<p className="text-center dark:text-white pt-5 pb-5 text-2xl">
										Please install the latest version of Nami Wallet
									</p>
									<span>To get started using Nami to purchase {"NFT's"} on our site, {"you'll"} need to install {"Nami's"} free browser based wallet to interact with the Cardano blockchain.</span>
								</>
								:
								<>
									<Image src="/images/eternl.webp" width={60} height={60} alt="Eternl Wallet" />
									<p className="text-center dark:text-white pt-5 pb-5 text-2xl">
										Please enable Eternl!
									</p>
									<p>1. Install {"Eternl’s"} free browser wallet.</p>
									<p>2. Ensure your wallet is selected within the Eternl extension.</p>
									<p>3. Select “Enable DApp Account”.</p>
								</>

							}
						</div>
						{/* <!-- end body --> */}

						<div className="modal-footer">
							<div className="flex items-center justify-center space-x-4">
								{walletName === 'nami' ?
									<a
										href="https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo?hl=en"
										target="_blank"
										rel="noreferrer noopener"
										className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
									>
										Get Nami
									</a>
									: 
									<a
										href="https://chrome.google.com/webstore/detail/eternl/kmhcihpebfmpgmihbkipmjlmmioameka"
										target="_blank"
										rel="noreferrer noopener"
										className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
									>
										Get Eternl
									</a>
								}
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Wallet_modal;
