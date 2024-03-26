import { FunctionComponent, ReactNode } from 'react';

// Styles
import styles from './styles.module.scss';

// Icons
import { AiFillFacebook } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoYoutube } from 'react-icons/io';

const Footer: FunctionComponent = (): ReactNode => {
	return (
		<footer className={styles.footer}>
			<div className='wrapper'>
				<div className={styles.content}>
					<div className={styles.footer_left}>
						<h4>Adlan Miranda</h4>
						<p>
							Não deixe que as limitações físicas atrapalhem seus sonhos. Agende
							sua consulta hoje e dê o primeiro passo rumo a uma vida mais
							saudável e ativa. Seu corpo merece cuidado especializado. Conte
							comigo para alcançar seus objetivos de saúde e bem-estar.
						</p>
					</div>
					<div className={styles.footer_right}>
						<h5>Entre em Contato:</h5>
						<div className={styles.social_links}>
							<a
								href='https://pt-br.facebook.com/adlan.dejesusmiranda'
								target='_blank'
							>
								<AiFillFacebook />
							</a>
							<a
								href='https://www.instagram.com/dradlanmiranda/'
								target='_blank'
							>
								<RiInstagramFill />
							</a>
							<a
								href='https://www.youtube.com/@adlanmiranda6373'
								target='_blank'
							>
								<IoLogoYoutube />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
