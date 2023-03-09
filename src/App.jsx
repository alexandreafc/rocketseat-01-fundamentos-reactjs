import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post author='Alexandre Costa' content='dfdfd fd fdfdf df df dfdf' />
				</main>
			</div>
		</div>
	);
}

export default App;
