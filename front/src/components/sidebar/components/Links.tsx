import { NavLink, useLocation } from 'react-router-dom';
import {Box, Flex, HStack, Icon, Text, useColorModeValue} from '@chakra-ui/react';
import {
	MdApi,
	MdDeviceThermostat,
	MdMap,
	MdNotificationsNone,
	MdOutlineCases,
	MdOutlineFileOpen,
	MdOutlinePayment,
} from "react-icons/md";
const customMenuItems = [
	{title: 'Карта объектов', link: 'https://datalens.yandex/5opgit1q88gsu', icon: MdMap },
	{title: 'Климат', link: 'https://datalens.yandex/zinuo9f240a4o', icon: MdDeviceThermostat },
	{title: 'Расходы', link: 'https://datalens.yandex/8rwakotjx9cax', icon: MdOutlinePayment },
	{title: 'Инвестиции', link: 'https://datalens.yandex/sbgxku3yeqruh', icon: MdOutlineCases },
	{title: 'Уведомления', link: 'https://t.me/cb_real_estate', icon: MdNotificationsNone },
	{title: 'API', link: 'http://aicbr.ru:7000/hack/api/swagger-ui.html#/', icon: MdApi },
	{title: 'Документация', link: 'https://docs.google.com/document/d/1XRPBWNn4ysUCqxofd12J_ytp845eBD0ew6oD86Gd-RM/edit?usp=sharing', icon: MdOutlineFileOpen },
]

export function SidebarLinks(props: {
	routes: RoutesType[];
}) {
	let location = useLocation();
	let activeColor = useColorModeValue('gray.700', 'white');
	let inactiveColor = useColorModeValue('secondaryGray.600', 'secondaryGray.600');
	let activeIcon = useColorModeValue('brand.500', 'white');
	let textColor = useColorModeValue('secondaryGray.500', 'white');
	let brandColor = useColorModeValue('brand.500', 'brand.400');

	const { routes } = props;

	const activeRoute = (routeName: string) => {
		return location.pathname.includes(routeName);
	};

	const createLinks = (
		routes: RoutesType[],
	) => {
		return (<>
			{routes.map(
				(
					route: RoutesType,
					index: number
				) => {
					return (
						<NavLink key={route.path} to={route.path}>
							{route.icon ? (
								<Box>
									<HStack
										spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
										py='5px'
										ps='10px'>
										<Flex w='100%' alignItems='center' justifyContent='center'>
											<Box
												color={activeRoute(route.path.toLowerCase()) ? activeIcon : textColor}
												me='18px'>
												{route.icon}
											</Box>
											<Text
												me='auto'
												color={activeRoute(route.path.toLowerCase()) ? activeColor : textColor}
												fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}>
												{route.name}
											</Text>
										</Flex>
										<Box
											h='36px'
											w='4px'
											bg={activeRoute(route.path.toLowerCase()) ? brandColor : 'transparent'}
											borderRadius='5px'
										/>
									</HStack>
								</Box>
							) : (
								<Box>
									<HStack
										spacing={activeRoute(route.path.toLowerCase()) ? '22px' : '26px'}
										py='5px'
										ps='10px'>
										<Text
											me='auto'
											color={activeRoute(route.path.toLowerCase()) ? activeColor : inactiveColor}
											fontWeight={activeRoute(route.path.toLowerCase()) ? 'bold' : 'normal'}>
											{route.name}
										</Text>
										<Box h='36px' w='4px' bg='brand.400' borderRadius='5px'/>
									</HStack>
								</Box>
							)}
						</NavLink>
					);
				}
			)}
			{customMenuItems.map(menuItem => (
				<a key={menuItem.link} href={menuItem.link} target='_blank'>
					<HStack
						spacing='26px'
						py='5px'
						ps='10px'>
						<Flex w='100%' alignItems='center' justifyContent='center'>
							<Box
								color={textColor}
								me='18px'>
								<Icon as={menuItem.icon} width='20px' height='20px' color='inherit' />
							</Box>
							<Text
								me='auto'
								color={textColor}
								fontWeight={'normal'}>
								{menuItem.title}
							</Text>
						</Flex>
						<Box
							h='36px'
							w='4px'
							bg='transparent'
							borderRadius='5px'
						/>
					</HStack>
			</a>))}
		</>)}


	return <>{createLinks(routes)}</>
}

export default SidebarLinks;
