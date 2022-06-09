import styles from './Header.module.scss';
import { logo } from '../../assets/images';

export const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src={logo} alt='logo' />
				</div>
				<ul className={styles.nav}>
					<li>
						<a href='#'>news</a>
					</li>
					<li>
						<a href='#'>news</a>
					</li>
					<li>
						<a href='#'>champions</a>
					</li>
					<li>
						<a href='#'>support</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
