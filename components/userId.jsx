import Tippy from '@tippyjs/react';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
import stringTruncateFromCenter from '../util/stringTruncateFromCenter';

const UserId = ({ classes, shortId, showWalletBalance }) => {
	const [copied, setCopied] = useState(false);
	const { walletinfo } = useSelector((state) => state.wallet);

	return (
		<>
			{walletinfo && walletinfo.address &&
				<>
					<div>
						<Tippy hideOnClick={false} content={copied ? <span>copied</span> : <span>copy</span>}>
							<button className={classes}>
								<CopyToClipboard text={walletinfo.address} onCopy={() => setCopied(true)}>
									<span>{!shortId ? walletinfo.address : `${stringTruncateFromCenter(walletinfo.address, 20)}`}</span>
								</CopyToClipboard>

								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									className="dark:fill-jacarta-300 fill-jacarta-500 ml-auto mb-px h-4 w-4"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z"></path>
								</svg>
							</button>
						</Tippy>

					</div>
					{showWalletBalance &&
						<div className="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
							<div className="flex items-center">
								<svg className="icon icon-ADA -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
									<use xlinkHref="/icons.svg#icon-ada"></use>
								</svg>
								<span className="text-green text-lg font-bold">{walletinfo.balance / 1000000} ADA</span>
							</div>
						</div>
					}
				</>
			}
		</>

	);
};

export default UserId;
