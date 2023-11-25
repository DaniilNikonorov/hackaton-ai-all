import {Box, Grid, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue} from '@chakra-ui/react';
import Banner from 'views/ObjectPage/components/Banner';
import banner from 'assets/img/banners/Banner.png';
import React from "react";
// import {useLineChart} from "../../hooks/useLineChart";
import {BuildingObject} from 'methods/getObjects';
import { PaymentsTab } from './components/PaymentsTab/PaymentsTab';
import {ClimatTab} from "./components/ClimatTab/ClimatTab";
import {CapRepairExpensesTab} from "./components/CapRapairExpentsTab/CapRepairExpensesTab";
import {CapBuildingExpensesTab} from "./components/CapBuildingExpentsTab/CapBuildingExpensesTab";
import {BuildingsTab} from "./components/BuildingsTab/BuildingsTab";

interface ObjectPageProps {
	object: BuildingObject
}

export function ObjectPage(props: ObjectPageProps) {
	const {object} = props
	// const {options, data} = useLineChart()

	let tabsColor = useColorModeValue('navy.800', 'white');

	return (
		<Box pt={{ base: '50px', md: '20px', xl: '20px' }}>
			<Grid
				templateColumns={{
					base: '1fr',
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 2 / 2'
					banner={banner}
					object={object}
				/>
				{/*{options && data &&*/}
				{/*<Box minH='260px' minW='75%' mt='auto'>*/}
				{/*	<LineChart chartData={data} chartOptions={options} />*/}
				{/*</Box>*/}
				{/*}*/}
				<Tabs _focus={{ boxShadow: "none", }} style={{outline: 'none', color: tabsColor}}>
					<TabList>
						<Tab>Строения</Tab>
						<Tab>Вложения</Tab>
						<Tab>Cодержание</Tab>
						<Tab>Климат</Tab>
						<Tab>Информация по кварталам</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<BuildingsTab object={object}/>
						</TabPanel>
						<TabPanel>
							<>
								<CapBuildingExpensesTab object={object}/>
								<CapRepairExpensesTab object={object}/>
							</>
						</TabPanel>
						<TabPanel>
							<PaymentsTab object={object}/>
						</TabPanel>
						<TabPanel>
							<ClimatTab object={object}/>
						</TabPanel>
						<TabPanel>
							Информация по кварталам
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Grid>
		</Box>
	);
}

