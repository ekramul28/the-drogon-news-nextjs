import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Image2 from "@/assets/Rectangle 3979.png"

const SlideNews = () => {
    return (
        <>
            <Card className='my-6'>

                <CardMedia>

                    <Image src={Image2} alt="cover" width={800} ></Image>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default SlideNews;