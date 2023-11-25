// Chakra imports
import { Box } from '@chakra-ui/react';

// Custom components
import Form from './components/Form'
import FormContextProvider from "../../contexts/FormContextProvider";


export default function NewPitch() {
	return (
		<FormContextProvider>
			<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
				<Form/>
			</Box>
		</FormContextProvider>

	);
}
