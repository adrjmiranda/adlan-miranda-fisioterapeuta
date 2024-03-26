import { FunctionComponent, ReactNode, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Styles
import styles from './styles.module.scss';

const Navbar: FunctionComponent = (): ReactNode => {
	const [isTop, setIsTop] = useState<boolean>(true);
	const { scrollY } = useScroll();
	const backgroundColor = useTransform(
		scrollY,
		[0, 100],
		['transparent', '#ffffff']
	);

	scrollY.onChange(() => {
		setIsTop(scrollY.get() === 0);
	});

	return (
		<motion.div
			style={{ backgroundColor }}
			className={`${styles.navbar} ${isTop ? 'navbar-top' : 'navbar-scroll'}`}
			transition={{ duration: 0.5 }}
		>
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
		</motion.div>
	);
};

export default Navbar;
