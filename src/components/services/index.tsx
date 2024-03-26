import { FunctionComponent, ReactNode } from 'react';

// Styles
import styles from './styles.module.scss';

// Icons
import { GiNailedFoot } from 'react-icons/gi';
import { MdElderly, MdSportsHandball } from 'react-icons/md';
import { CgPerformance } from 'react-icons/cg';

// Components
import ServiceCard from '../service-card';

const services = [
	{
		id: 1,
		icon: <GiNailedFoot />,
		name: 'Ortopedia',
	},
	{
		id: 2,
		icon: <MdElderly />,
		name: 'Geriatria',
	},
	{
		id: 3,
		icon: <MdSportsHandball />,
		name: 'Esportiva',
	},
	{
		id: 4,
		icon: <CgPerformance />,
		name: 'Performance',
	},
];

const Services: FunctionComponent = (): ReactNode => {
	return (
		<div className='wrapper'>
			<div className={styles.services}>
				<h2 className='session_title'>Minhas Especialidades</h2>
				{services.map((service) => (
					<ServiceCard service={service} key={service.id} />
				))}
			</div>
		</div>
	);
};

export default Services;
