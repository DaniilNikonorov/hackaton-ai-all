// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import { BuildingObject } from 'methods/getObjects';
import {Avatar} from '../../../components/avatar'
import {getPictureIndex} from "../../ObjectsPage/components/ObjectCard";

export default function Banner(props: {
	banner: string;
	object: BuildingObject;
	[x: string]: any;
}) {
	const { banner, object, ...rest } = props;

	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const borderColor = useColorModeValue('white !important', '#111C44 !important');
	return (
		<Card mb={{ base: '0px', lg: '20px' }} alignItems='center' {...rest}>
			{/*<Box bg={`url(${banner})`} bgSize='cover' borderRadius='16px' h='131px' w='100%' />*/}
			<Avatar mx='auto' src={`images/cardImages/${getPictureIndex(object.id)}.jpg`} h='87px' w='87px' mt='-43px' border='4px solid' borderColor={borderColor} />
			<Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
				{object.realtyDtoSet[0]?.street}
			</Text>
			<Text color={textColorSecondary} fontSize='sm'>
				{object.realtyDtoSet[0]?.address}
			</Text>
			<Flex w='max-content' mx='auto' mt='26px'>
				<Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{object.count}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Количество объектов
					</Text>
				</Flex>
				<Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{object.area && `${object.area } кв.м.`}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Общая площадь
					</Text>
				</Flex>
				<Flex mx='auto' alignItems='center' flexDirection='column'>
					<Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
						{object.sum && `${object.sum } р.`}
					</Text>
					<Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
						Общая стоимость
					</Text>
				</Flex>
			</Flex>

		</Card>
	);
}
