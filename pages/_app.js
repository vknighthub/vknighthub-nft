import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MetaMaskProvider } from 'metamask-react';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import Meta from '../components/Meta';
import UserContext from '../components/UserContext';
import { store } from '../redux/store';
import '../styles/globals.css';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export async function getStaticProps() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery(['nftmarketplace'])
	await queryClient.prefetchQuery(['nftdetail'])

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}


function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const pid = router.asPath;
	const scrollRef = useRef({
		scrollPos: 0,
	});
	const [queryClient] = useState(() => new QueryClient({
		defaultOptions: { queries: { staleTime: 60000 } },
	}))

	
	return (
		<>
			<Meta title="Home || vKnightHub | NFT Marketplace" />
			<Provider store={store}>
				<ThemeProvider enableSystem={true} attribute="class">
					<MetaMaskProvider>
						<UserContext.Provider value={{ scrollRef: scrollRef }}>
							<QueryClientProvider client={queryClient} contextSharing={true}>
								<Hydrate state={pageProps.dehydratedState}>
									{pid === '/login' ? (
										<Component {...pageProps} />
									) : (
										<Layout>
											<Component {...pageProps} />
										</Layout>
									)}
								</Hydrate>
								<ReactQueryDevtools initialIsOpen={false} />
							</QueryClientProvider>
						</UserContext.Provider>
					</MetaMaskProvider>
				</ThemeProvider>
				
			</Provider>
		</>
	);
}

export default MyApp;
