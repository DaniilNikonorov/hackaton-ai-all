import React, {useEffect, useState, useCallback} from 'react';
import { Box, Flex, Grid, Link, Text, useColorModeValue, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import {ObjectCard} from './components/ObjectCard';
import {Search} from "../../components/search/Search";
import {ObjectPage} from "../ObjectPage";
import {BuildingObject, getObjects} from "../../methods/getObjects";

let objects: BuildingObject[] | [] = []

export function ObjectsPage() {
	const [filteredObjects, setFilteredObjects] = useState<BuildingObject[] | []>([]);
	const [currentObject, setCurrentObject] = useState<BuildingObject | null>(null);
	const { isOpen, onOpen, onClose } = useDisclosure()

	const openModal = (object: BuildingObject) => {
		setCurrentObject(object)
		onOpen()
	}

	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.500', 'white');
	useEffect(() => {
		getObjects().then((res) => {
			objects = res
			setFilteredObjects(res)
		})
	}, []);
//@ts-ignore
	const filterHandler = useCallback((value: string, type: string, e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e?.preventDefault()
		if(type === "search"){
			setFilteredObjects(objects.filter(object => {
				return object.realtyDtoSet[0]?.address?.toLowerCase()?.includes(value.toLowerCase())
			}))
			return;
		}
		else if(type === "tag"){
			setFilteredObjects(objects.filter(complex => {
				return complex.technicalCondition === value
			}))
			return
		}
		else {setFilteredObjects(objects)}
	}, [])
	return (
		<Box >
			<Grid
				mb='20px'
				gridTemplateColumns={{ xl: 'repeat(1)', '2xl': '1fr 0.46fr' }}
				gap={{ base: '20px', xl: '20px' }}
				display={{ base: 'block', xl: 'grid' }}>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 3' }}>
					<div style={{height: '50px'}}></div>
					<Search secondary={true} filter={filterHandler}/>
					<Flex direction='column'>
						<Flex
							mt='45px'
							mb='20px'
							justifyContent='space-between'
							direction={{ base: 'column', md: 'row' }}
							align={{ base: 'start', md: 'center' }}>
							<Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
								Объекты
							</Text>
							<Flex
								align='center'
								me='20px'
								ms={{ base: '24px', md: '0px' }}
								mt={{ base: '20px', md: '0px' }}>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									href='#' onClick={(e) => filterHandler('', '', e)}>
									Все
								</Link>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									href='#' onClick={(e) => filterHandler('Хорошее', 'tag', e)}>
									Хорошее
								</Link>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									href='#' onClick={(e) => filterHandler('Удовлетворительное', 'tag', e)}>
									Удовлетворительное
								</Link>
								<Link
									color={textColorBrand}
									fontWeight='500'
									me={{ base: '34px', md: '44px' }}
									href='#' onClick={(e) => filterHandler('Ветхое', 'tag', e)}>
									Ветхое
								</Link>
								<Link color={textColorBrand} fontWeight='500' href='#' onClick={(e) => filterHandler('Аварийное', 'tag', e)}>
									Аварийное
								</Link>
							</Flex>
						</Flex>
						<SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
							{filteredObjects.map(obj => (
								<ObjectCard key={obj.id}
										  object={obj}
										  openModal={openModal}
							/>))}
						</SimpleGrid>
					</Flex>
				</Flex>
			</Grid>
			<Modal isOpen={isOpen} onClose={onClose} size={'full'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Информация об объекте недвижимости</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Box maxW='100%'>
							<ObjectPage object={currentObject}/>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	);
}
