// Chakra imports
import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { MdUpload } from 'react-icons/md';
import Dropzone from './Dropzone';
import {useState} from "react";
import {sendFiles} from "../../../methods/sendFile";

export default function Upload(props: { used?: number; total?: number; [x: string]: any }) {
	const { used, total, ...rest } = props;
	const [uploadedFiles, setUploadedFiles] = useState([]);
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');


	const onSendfile = () => {
		sendFiles(uploadedFiles).then(() => {
			setUploadedFiles([]);
		})
	}
	return (
		<Card {...rest} mb='20px' alignItems='center' p='20px'>
			<Flex h='100%' direction={{ base: 'column', '2xl': 'row' }}>
				<Dropzone
					w={{ base: '100%', '2xl': '268px' }}
					me='36px'
					maxH={{ base: '60%', lg: '50%', '2xl': '100%' }}
					minH={{ base: '60%', lg: '50%', '2xl': '100%' }}
					content={
						<Box>
							<Icon as={MdUpload} w='80px' h='80px' color={brandColor} />
							<Flex justify='center' mx='auto' mb='12px'>
								<Text fontSize='xl' fontWeight='700' color={brandColor}>
									Загрузка файлов
								</Text>
							</Flex>
							<Text fontSize='sm' fontWeight='500' color='secondaryGray.500'>
								доступны форматы XLS, XLSX, CSV
							</Text>
						</Box>
					}
					uploadedFiles={uploadedFiles}
					setUploadedFiles={setUploadedFiles}
				/>
				<Flex direction='column' pe='44px'>
					<Text
						color={textColorPrimary}
						fontWeight='bold'
						textAlign='start'
						fontSize='2xl'
						mt={{ base: '20px', '2xl': '50px' }}>
						Загрузите и отправьте файл
					</Text>
					<Flex w='100%'>
						<Button
							me='100%'
							mb='50px'
							w='140px'
							minW='140px'
							mt={{ base: '20px', '2xl': 'auto' }}
							variant='brand'
							fontWeight='500'
							onClick={onSendfile}
						>
							Отправить
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</Card>
	);
}
