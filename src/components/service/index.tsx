import { FunctionComponent, ReactNode } from 'react';

// Styles
import styles from './styles.module.scss';
import ServiceData from '../../interfaces/ServiceData';

const Service: FunctionComponent<{ service: ServiceData }> = ({
	service,
}): ReactNode => {
	return (
		<div className={styles.service}>
			<h3 className='session_title'>{service.title}</h3>
			<div className='wrapper'>
				<div
					className={styles.info}
					style={{
						flexDirection: service.id % 2 === 0 ? 'row-reverse' : 'row',
					}}
				>
					<div className={styles.description}>
						<p>{service.description}</p>
					</div>
					<div className={styles.img}>
						<img src={service.img} alt={service.title} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
