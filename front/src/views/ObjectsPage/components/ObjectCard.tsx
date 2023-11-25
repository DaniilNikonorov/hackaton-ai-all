import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import {BuildingObject} from "../../../methods/getObjects";

export const getPictureIndex = (id: string) => {
	return (+id % 18) || 19
}

export function ObjectCard(props: {
	object: BuildingObject
	openModal: (object: BuildingObject) => void
}) {
	const { object, openModal } = props;
	const textColor = useColorModeValue('navy.700', 'white');
	const textColorBid = useColorModeValue('brand.500', 'white');
	return (
		<Card p='20px' onClick={() => openModal(object)} _hover={{
			cursor: 'pointer'
		}}>
			<Flex direction={{ base: 'column' }} justify='center'>
				<Box mb={{ base: '20px', '2xl': '20px' }} position='relative'>
					<Image
						src={`images/cardImages/${getPictureIndex(object.id)}.jpg`}
						w={{ base: '100%', '3xl': '100%' }}
						h={{ base: '100%', '3xl': '100%' }}
						borderRadius='20px'
					/>
				</Box>
				<Flex flexDirection='column' justify='space-between' h='100%'>
					<Flex
						justify='space-between'
						direction={{
							base: 'row',
							md: 'column',
							lg: 'row',
							xl: 'column',
							'2xl': 'row'
						}}
						mb='auto'>
						<Flex direction='column'>
							<Text
								color={textColor}
								fontSize={{
									base: 'xl',
									md: 'lg',
									lg: 'lg',
									xl: 'lg',
									'2xl': 'md',
									'3xl': 'lg'
								}}
								mb='5px'
								fontWeight='bold'
								me='14px'>
								{object.realtyDtoSet[0]?.street}
							</Text>
							<Text
								color='secondaryGray.600'
								fontSize={{
									base: 'sm'
								}}
								fontWeight='400'
								me='14px'>
								{object.realtyDtoSet[0]?.city}
							</Text>
						</Flex>
					</Flex>
					<Flex
						align='end'
						justify='space-between'
						direction={{
							base: 'row',
						}}
						mt='25px'>
						<Flex
							direction='column'
						>
							<a>
								<Text fontWeight='700' fontSize='sm' color={textColorBid}>
									Кол-во объектов: {object.count}
								</Text>
								<Text fontWeight='700' fontSize='sm' color={textColorBid}>
									Общая площадь: {object.area && `${object.area } кв.м.`}
								</Text>
								<Text fontWeight='700' fontSize='sm' color={textColorBid}>
									Общая стоимость: {object.sum && `${object.sum } р.`}
								</Text>
								<Text fontWeight='700' fontSize='sm' color={textColorBid}>
									Общее состояние: {object.technicalCondition}
								</Text>
							</a>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Card>
	);
}
