import React from 'react';
import {
	Hero,
	Bids,
	Top_collection,
	Tranding_category,
	NewseLatter,
	Partners
} from '../../components/component';
import Meta from '../../components/Meta';

const Home = () => {
	return (
		<main>
			<Meta title="Home || vKnightHub | NFT Marketplace" />
			<Hero />
			<Bids />
			<Top_collection />
			<Tranding_category />
			<NewseLatter />
			<Partners />
		</main>
	);
};

export default Home;
