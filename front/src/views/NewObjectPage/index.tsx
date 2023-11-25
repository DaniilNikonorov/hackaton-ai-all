import React from 'react';

import {Box,} from '@chakra-ui/react';

import FormContextProvider from "../../contexts/FormContextProvider";
import Form from './components/Form';


export function NewObjectPage() {

	return (
		<FormContextProvider>
			<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
				<Form/>
			</Box>
		</FormContextProvider>
	);
}
