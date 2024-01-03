'use client'
import LatestNews from '@/components/ui/letestNews/LatestNews';
import SlideNews from '@/components/ui/slideNews/SlideNews';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews></LatestNews>

        </Grid>
        <Grid item xs={4}>
          <SlideNews></SlideNews>
        </Grid>

      </Grid>
    </>
  );
};

export default HomePage;