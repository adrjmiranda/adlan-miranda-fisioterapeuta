import { FunctionComponent, ReactNode } from 'react';
import styles from './styles.module.scss';
import Service from '../../interfaces/Service';

const ServiceCard: FunctionComponent<{ service: Service }> = ({
	service,
}): ReactNode => {
	return (
		<div className={styles.service_card}>
			<div className={styles.icon}>{service.icon}</div>
			<h3 className={styles.name}>{service.name}</h3>
		</div>
	);
};

export default ServiceCard;
