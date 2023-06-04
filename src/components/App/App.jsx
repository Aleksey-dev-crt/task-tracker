import TaskTracker from '../TaskTracker/TaskTracker';
import Header from '../Header/Header';
import { Box } from '@mui/material';

function App() {
	return (
		<Box sx={{maxWidth: '1540px', margin: 'auto'}}>
			<Header />
			<TaskTracker />
		</Box>
	);
}

export default App;
