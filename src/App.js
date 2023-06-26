import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Card from './components/Card/Card';
import Product from './asset/jsonData/data.json';
import './styles.css';
import './asset/fonts/Vazirmatn-Regular.ttf';

export default function App() {
	return (
		<div className="App">
			<Header />
			<Search />
			<Card card={Product} />
		</div>
	);
}
