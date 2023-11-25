import { Flex, Box, Table, Checkbox, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable
} from '@tanstack/react-table';

import Card from 'components/card/Card';

type RowObj = {
	"name": "Помещения убежища здания Главного управления Центрального банка Российской Федерации по Камчатскому краю",
	"reestrCode": "24-07-01-00-01-097(комп.)",
	"address": "683031, Камчатский край, г. Петропавловск-Камчатский, пр-т Карла Маркса, д. 29/2",
	"id": 302,
	"department": "Отделение Петропавловск-Камчатский",
	"objectId": "24-07-01-00-01-097",
	"street": "проспект Карла Маркса, 29/2",
	"region": "Камчатский край",
	"area": "городской округ Петропавловск-Камчатский",
	"city": "Петропавловск-Камчатский",
	"yaAddress": "Россия, Камчатский край, Петропавловск-Камчатский, проспект Карла Маркса, 29/2",
	"lng": 158.626956,
	"lat": 53.065144,
	"img": null,
	"lastYearDto": {
		"technicalConditionCol25": "Хорошее",
		"id": 10883,
		"builtYearCol3": 1995,
		"balanceAcceptDateCol4": "09.01.2016",
		"year": 2022,
		"quarter": 3,
		"department": "Отделение Петропавловск-Камчатский",
		"strId": 61,
		"objInfo": "Помещения убежища здания Главного управления Центрального банка Российской Федерации по Камчатскому краю, 683031, Российская Федерация, Камчатский край, Петропавловск-Камчатский городской округ, город Петропавловск-Камчатский, проспект  Карла Маркса, дом № 29/2, 24-07-01-00-01-097(комп.)",
		"name": "Помещения убежища здания Главного управления Центрального банка Российской Федерации по Камчатскому краю",
		"address": "683031, Российская Федерация, Камчатский край, Петропавловск-Камчатский городской округ, город Петропавловск-Камчатский, проспект  Карла Маркса, дом № 29/2",
		"reestrCode": "24-07-01-00-01-097(комп.)",
		"totalAreaCol5": 332.4,
		"totalAreaBuildingCol6": 332.4,
		"bankAreaCol7": 332.4,
		"bankAreaSecondCol14": 332.4,
		"freeAreaCol8": 0,
		"leasedOutByBankAreaCol9": 0,
		"leasedByBankAreaCol10": 0,
		"leasedByBankAreaSecondCol11": 0,
		"transferredByBankCol12": 0,
		"transferredByBankSecondCol13": 0,
		"freeAreaSecondCol15": 0,
		"leasedOutByBankAreaCol16": 0,
		"leasedByBankAreaThirdCol17": 0,
		"leasedByBankAreaFourthCol18": 0,
		"transferredByBankThirdCol19": 0,
		"transferredByBankFourthCol20": 0,
		"carryingAmountCol21": null,
		"revaluationCol22": null,
		"accruedAmountCol23": null,
		"residualSumCol24": null,
		"test": 0,
		"objectId": "24-07-01-00-01-097"
	}
};

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export function BuildingsTable(props: { tableData: any }) {
	const { tableData } = props;
	const [ sorting, setSorting ] = React.useState<SortingState>([]);
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	let defaultData= tableData;
	const columns = [
		columnHelper.accessor('name', {
			id: 'name',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					название
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('reestrCode', {
			id: 'reestrCode',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					номер
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			)
		}),
		columnHelper.accessor('street', {
			id: 'street',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					адрес
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
		columnHelper.accessor('lastYearDto.technicalConditionCol25', {
			id: 'lastYearDto.technicalConditionCol25',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					состояние
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
		columnHelper.accessor('lastYearDto.builtYearCol3', {
			id: 'lastYearDto.builtYearCol3',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					год постройки
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
		columnHelper.accessor('lastYearDto.balanceAcceptDateCol4', {
			id: 'lastYearDto.balanceAcceptDateCol4',
			header: () => (
				<Text
					justifyContent='space-between'
					align='center'
					fontSize={{ sm: '10px', lg: '12px' }}
					color='gray.400'>
					на балансе
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			)
		}),
	];
	const [ data, setData ] = React.useState(() => [ ...defaultData ]);
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true
	});
	return (
		<Card flexDirection='column' w='100%' px='0px' overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px='25px' mb="8px" justifyContent='space-between' align='center'>
				<Text color={textColor} fontSize='22px' mb="4px" fontWeight='700' lineHeight='100%'>
					Строения
				</Text>
			</Flex>
			<Box>
				<Table variant='simple' color='gray.500' mb='24px' mt="12px">
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr  key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th
											key={header.id}
											colSpan={header.colSpan}
											pe='10px'
											borderColor={borderColor}
											cursor='pointer'
											onClick={header.column.getToggleSortingHandler()}>
											<Flex
												justifyContent='space-between'
												align='center'
												fontSize={{ sm: '10px', lg: '12px' }}
												color='gray.400'>
												{flexRender(header.column.columnDef.header, header.getContext())}{{
													asc: '',
													desc: '',
												}[header.column.getIsSorted() as string] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.map((row) => {
							return (
								<Tr key={row.id}>
									{row.getVisibleCells().map((cell) => {
										return (
											<Td
												key={cell.id}
												fontSize={{ sm: '14px' }}
												minW={{ sm: '150px', md: '200px', lg: 'auto' }}
												borderColor='transparent'>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										);
									})}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</Box>
		</Card>
	);
}
