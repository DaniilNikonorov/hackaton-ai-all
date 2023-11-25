import React from 'react';

import {Box, Grid,} from '@chakra-ui/react';

import Upload from './components/Upload';

export function UploadFilePage() {

	return (
			<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
				<Grid
					templateColumns={{
						base: '1fr',
						// lg: '1.34fr 1fr 1.62fr'
					}}
					templateRows={{
						base: 'repeat(3, 1fr)',
						lg: '1fr'
					}}
					gap={{ base: '20px', xl: '20px' }}
					>
					<Upload
						minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
						// pe='20px'
						pb={{ base: '100px', lg: '20px' }}
					/>
				</Grid>
			</Box>
	);
}
