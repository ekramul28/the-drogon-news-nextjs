"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "@/assets/R (4).png";

import Image from 'next/image';
import { IconButton } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import Link from 'next/link';
import Header from './Header';

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

function ResponsiveAppBar() {

    return (
        <>
            <Box className="w-full flex justify-center items-center">
                <Header></Header>
            </Box>
            <AppBar position="static" className='bg-black'>

                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box>
                            <Image height={100} width={100} src={logo} alt='logo'></Image>

                        </Box>
                        <Box className='w-full  flex justify-center items-center'>
                            {navLink.map((nav) => (
                                <Link key={nav.route} href={nav.pathName}>
                                    <Button className='text-white'>{nav.route}</Button>
                                </Link>
                            ))}
                        </Box>

                        <Box className="flex justify-end items-end" sx={{ "& svg": { color: "white" } }}>
                            <IconButton>
                                <Facebook></Facebook>
                            </IconButton>
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
                    </Toolbar>
                </Container>
            </AppBar>
        </>

    );
}
export default ResponsiveAppBar;