import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';

function Dropzone(props: { content: JSX.Element | string; [x: string]: any, uploadedFiles: any[], setUploadedFiles: any }) {
	const { content, uploadedFiles, setUploadedFiles, ...rest } = props;
	console.log(uploadedFiles)
	const { getRootProps, getInputProps } = useDropzone({
		onDrop: (acceptedFiles) => {
			setUploadedFiles(acceptedFiles);
		}});
	const bg = useColorModeValue('gray.100', 'navy.700');
	const borderColor = useColorModeValue('secondaryGray.100', 'whiteAlpha.100');

	return (
		<Flex
			align='center'
			justify='center'
			bg={bg}
			border='1px dashed'
			borderColor={borderColor}
			borderRadius='16px'
			w='100%'
			h='max-content'
			minH='100%'
			cursor='pointer'
			{...getRootProps({ className: 'dropzone' })}
			{...rest}>
			<input {...getInputProps()} />
			{uploadedFiles.length ? (<ul style={{listStyleType: 'none'}}>
				{uploadedFiles.map((file) => (
					<li key={file.name}>{file.name}</li>
				))}
			</ul>) : <Button variant='no-effects'>{content}</Button>}


		</Flex>
	);
}

export default Dropzone;
