import styles from './Layout.module.scss';
import { Header } from './../index';

export const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
		</div>
	);
};
