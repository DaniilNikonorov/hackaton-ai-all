import { Icon } from '@chakra-ui/react';
import { MdHome, MdCreateNewFolder, MdMovieFilter, MdOutlineFilePresent} from 'react-icons/md';
import MainPage from 'views/mainpage';
import {NewObjectPage} from "./views/NewObjectPage";
import {PresentationPage} from "./views/PresentationPage/PresentationPage";
import {UploadFilePage} from "./views/UploadFilePage";

const routes = [
	{
		name: 'Недвижимость',
		path: '/main',
		icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
		component: MainPage
	},
	{
		name: 'Добавить инвестицию',
		path: '/newobject',
		icon: <Icon as={MdCreateNewFolder} width='20px' height='20px' color='inherit' />,
		component: NewObjectPage
	},
	{
		name: 'Загрузить файл',
		path: '/uploadfile',
		icon: <Icon as={MdOutlineFilePresent} width='20px' height='20px' color='inherit' />,
		component: UploadFilePage
	},
	{
		name: 'Презентация',
		path: '/presentation',
		icon: <Icon as={MdMovieFilter} width='20px' height='20px' color='inherit' />,
		component: PresentationPage
	},
];

export default routes;
