/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const Partners = () => {
	return (
		<div>
			<div className="dark:bg-jacarta-800 bg-light-base">
				<div className="container">
					<div className="grid grid-cols-3 py-8 sm:grid-cols-3">
						<Link href="https://cardano.org/">
							<a target="_blank" >
								<img src="/images/partners/partnert-cardano.png" alt="Cardano Partner" />{' '}
							</a>
						</Link>
						<Link href="https://namiwallet.io/">
							<a target="_blank" >
								<img src="/images/partners/partner-nami.png" alt="Nami Partner" />{' '}
							</a>
						</Link>
						<Link href="https://blockfrost.io/">
							<a target="_blank" >
								<img src="/images/partners/partnert-blockfrost.png" alt="Blockfrost Partner"/>{' '}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
