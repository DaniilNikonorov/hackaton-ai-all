// Chakra imports
import { Flex, Text } from '@chakra-ui/react';

// Assets
import banner from 'assets/img/banners/Banner.png';

export default function Banner() {
	// Chakra Color Mode
	return (
		<Flex
			direction='column'
			bgImage={banner}
			bgSize='cover'
			py={{ base: '30px', md: '56px' }}
			px={{ base: '30px', md: '64px' }}
			borderRadius='30px'>
			<Text
				fontSize={{ base: '24px', md: '34px' }}
				color='#111214'
				mb='14px'
				ms='auto'
				maxW={{
					base: '100%',
					md: '64%',
					lg: '46%',
					xl: '70%',
					'2xl': '50%',
					'3xl': '42%'
				}}
				fontWeight='700'
				lineHeight={{ base: '32px', md: '42px' }}>
				Дальневосточный банк
			</Text>
		</Flex>
	);
}
