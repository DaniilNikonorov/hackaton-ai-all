import React from 'react';
import Banner from 'views/mainpage/components/Banner';
import {ObjectsPage} from "../ObjectsPage";
import {Box} from "@chakra-ui/react";

export default function MainPage() {
	return (
		<>
			<Box height={70}></Box>
			<Banner/>
			<ObjectsPage/>
		</>
	)
}
