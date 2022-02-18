import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Layout from './components/Layout';

function App() {
	return (
		<div className="App">
			{/*  */}
			<Layout>
				<Alert variant={'primary'}>This is a alert—check it out!</Alert>
				<Alert variant={'secondary'}>This is a alert—check it out!</Alert>
			</Layout>
		</div>
	);
}

export default App;
