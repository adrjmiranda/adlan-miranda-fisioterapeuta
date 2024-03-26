import { FunctionComponent, ReactNode, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Styles
import styles from './styles.module.scss';

// Icons
import { FaBars } from 'react-icons/fa6';

const Navbar: FunctionComponent = (): ReactNode => {
	const menuRef = useRef(null);
	const [viewMenu, setViewMenu] = useState(true);

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

	const handleMenu = () => {
		setViewMenu(!viewMenu);
	};

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
					<button type='button' className={styles.bars} onClick={handleMenu}>
						<FaBars />
					</button>
					<ul
						className={styles.menu}
						ref={menuRef}
						style={{ display: viewMenu ? 'flex' : 'none' }}
					>
						<li>
							<a href='#mainbanner'>Sobre</a>
						</li>
						<li>
							<a href='#services'>Serviços</a>
						</li>
						<li>
							<a href='#service1'>Ortopedia</a>
						</li>
						<li>
							<a href='#service2'>Geriatria</a>
						</li>
						<li>
							<a href='#service3'>Esportiva</a>
						</li>
						<li>
							<a href='#service4'>Performance</a>
						</li>
					</ul>
				</nav>
			</div>
		</motion.div>
	);
};

export default Navbar;
