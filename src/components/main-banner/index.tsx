import { FunctionComponent, ReactNode } from 'react';

// Styles
import styles from './styles.module.scss';

// Image
import AdlanMiranda from '../../assets/img/Adlan-Miranda.png';

const MainBanner: FunctionComponent = (): ReactNode => {
	return (
		<div className={styles.main_banner} id='mainbanner'>
			<div className='wrapper'>
				<div className={styles.content}>
					<div className={styles.info}>
						<h1>Recupere seu bem-estar.</h1>
						<p>Descubra o poder da fisioterapia para transformar sua vida.</p>
					</div>
					<div className={styles.profile_photo}>
						<div className={styles.photo}>
							<img src={AdlanMiranda} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainBanner;
