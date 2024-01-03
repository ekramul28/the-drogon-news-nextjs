import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import image from '@/assets/The Dragon News.png';
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const date = getCurrentDate()

    return (
        <div>
            <Box>
                <Container>
                    <Image height={500} width={500} src={image} alt='header'></Image>
                </Container>
                <Typography variant='body2' textAlign={'center'} >
                    @2024 The Dragon News.Develop by Md Ekramul Hassan

                </Typography>
                <Typography className='text-center mt-4'>
                    {date}
                </Typography>
            </Box>
        </div>
    );
};

export default Header;