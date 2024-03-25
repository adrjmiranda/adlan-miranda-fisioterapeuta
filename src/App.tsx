import { FunctionComponent, ReactNode } from 'react';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import MainBanner from './components/main-banner';

const App: FunctionComponent = (): ReactNode => {
	return (
		<div>
			<Navbar />
			<MainBanner />
			<Footer />
		</div>
	);
};

export default App;
