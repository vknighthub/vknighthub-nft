/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	future: {
		webpack5: false
	},
	webpack: function (config) {
		config.experiments = { syncWebAssembly: true, layers: true };
		return config;
	},
	images: {
		domains: ['ipfs.io'],
	}
};
module.exports = nextConfig;
