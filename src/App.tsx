import { FunctionComponent, ReactNode } from 'react';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import MainBanner from './components/main-banner';
import Services from './components/services';

const App: FunctionComponent = (): ReactNode => {
	return (
		<div>
			<Navbar />
			<MainBanner />
			<Services />
			<Footer />
		</div>
	);
};

export default App;
