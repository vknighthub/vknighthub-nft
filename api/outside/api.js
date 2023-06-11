export const NFTList = (filter) => `https://api.opencnft.io/1/rank?window=${filter}`;

export const NFTListAll = () => `https://api.opencnft.io/1/rank`;

export const NFTPolicy = (policy) => `https://api.opencnft.io/1/policy/${policy}`;

export const NFTTransaction = (policy) => `https://api.opencnft.io/1/policy/${policy}/transactions`;

export const NFTTrait = (policy) => `https://api.opencnft.io/1/policy/${policy}/asset/trait`;

export const NFTAsset = (asset) => `https://api.opencnft.io/1/asset/${asset}`;


export const NFTAssetAddress = (asset) => `https://cardano-mainnet.blockfrost.io/api/v0/assets/${asset}/addresses`;


