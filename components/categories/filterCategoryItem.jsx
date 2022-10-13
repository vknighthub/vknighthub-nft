/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { propertiesText, updateTrendingCategoryItemData } from '../../redux/reducers/nftTrxReducer';
import Collection_category_filter from '../collectrions/collection_category_filter';
import { fetchedNFTTrait } from './../../fetchers/nfttrait';
import { fetchedNFTTransaction } from './../../fetchers/nfttransaction';
import CategoryItem from './categoryItem';

const FilterCategoryItem = ({ policy }) => {

	const nfttransaction = useQuery(
		["nfttransaction", policy],
		() => fetchedNFTTransaction(policy),
		{ staleTime: 3000 }
	);

	const nfttrait = useQuery(
		["nfttrait", policy],
		() => fetchedNFTTrait(policy),
		{ staleTime: 3000 }
	);

	if (nfttransaction.isError) {
		console.error(nfttransaction.error)
	}

	if (nfttrait.isError) {
		console.error(nfttrait.error)
	}

	const dispatch = useDispatch();

	if (nfttransaction.isSuccess) {
		dispatch(updateTrendingCategoryItemData(nfttransaction.data));
	}

	if (nfttrait.isSuccess) {
		dispatch(propertiesText(nfttrait.data));
	}

	return (
		<div>
			{/* <!-- Filter --> */}
			<Collection_category_filter />
			<CategoryItem />
		</div>
	);
};

export default FilterCategoryItem;
