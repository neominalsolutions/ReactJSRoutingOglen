import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';
import { Outlet } from 'react-router';

function App() {
	return (
		<div className="App">
			{/*  */}
			<Layout>
				<Outlet />
				{/* renderbody */}
			</Layout>
		</div>
	);
}

export default App;
