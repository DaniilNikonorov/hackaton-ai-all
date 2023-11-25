import { Box } from '@chakra-ui/react';
import React from 'react';

export const PresentationPage = () => {
    return (
        <div>
            <Box height={100}></Box>
            <Box display='flex' justifyContent='center'>
                <iframe
                    title='presentation'
                    src="https://docs.google.com/presentation/d/e/2PACX-1vRGdDLLDx73gyn8FPXljMMV5tkkcABuHWYe-YPtj0ELYHJUWv_28rQPRplBISn9I_KAO02m4uzlL8gy/embed?start=false&loop=false&delayms=3000"
                    width="960"
                    height="569"
                    allow="fullscreen"
                ></iframe>
            </Box>

        </div>
    );
};
