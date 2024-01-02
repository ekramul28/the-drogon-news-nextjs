"use client"
import { Facebook } from '@mui/icons-material';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
    const navLink = [
        {
            route: 'Home',
            pathName: '/'
        },
        {
            route: 'Pages',
            pathName: '/pages'
        },
        {
            route: 'Category',
            pathName: '/category'
        },
        {
            route: 'News',
            pathName: '/news'
        },
        {
            route: 'About',
            pathName: '/about'
        },
        {
            route: 'Contact',
            pathName: '/contact'
        },
    ];

    return (
        <Box className="bg-black py-10 px-2">
            <Container className='w-full text-center' sx={{ "& svg": { color: "white" } }}>
                <Box>
                    <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                    <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                    <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                </Box>
                <Box className='w-full  flex justify-center items-center'>
                    {navLink.map((nav) => (
                        <Link key={nav.route} href={nav.pathName}>
                            <Button className='text-white'>{nav.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography variant='body2' color={'white'} textAlign={'center'}>
                    @2024 The Dragon News.Develop by Md Ekramul Hassan
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;