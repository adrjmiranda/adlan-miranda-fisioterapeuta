import { FunctionComponent, ReactNode } from 'react';

// Styles
import styles from './styles.module.scss';

const Navbar: FunctionComponent = (): ReactNode => {
	return (
		<div className={styles.navbar}>
			<div className='wrapper'>
				<nav>
					<div className={styles.logo}>
						<a href='#'>Adlan Miranda</a>
					</div>
					<ul className={styles.menu}>
						<li>
							<a href='#'>Sobre</a>
						</li>
						<li>
							<a href='#'>Serviços</a>
						</li>
						<li>
							<a href='#'>Ortopedia</a>
						</li>
						<li>
							<a href='#'>Geriatria</a>
						</li>
						<li>
							<a href='#'>Esportiva</a>
						</li>
						<li>
							<a href='#'>Performance</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
