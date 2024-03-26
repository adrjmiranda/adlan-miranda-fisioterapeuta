import { FunctionComponent, ReactNode } from 'react';

// Components
import Navbar from './components/navbar';
import Footer from './components/footer';
import MainBanner from './components/main-banner';
import Services from './components/services';
// import ServiceOrthopedic from './components/service-orthopedic';
// import ServiceGeriatrics from './components/service-geriatrics';
// import ServiceSportsPhysiotherapy from './components/service-sports-physiotherapy';
// import ServicePerformanceGain from './components/service-performance-gain';

import servicesData from './data/services';
import Service from './components/service';

const App: FunctionComponent = (): ReactNode => {
	return (
		<div>
			<Navbar />
			<MainBanner />
			<Services />
			{servicesData.length > 0 &&
				servicesData.map((service) => (
					<Service service={service} key={service.id} />
				))}
			<Footer />
		</div>
	);
};

export default App;
