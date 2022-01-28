import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layouts/MainLayout';
import { IComment, ITrack } from '../../types/track';

const index = () => {
  const router = useRouter()
  const tracks: ITrack[] =  [
    
  ]
  return (
    <MainLayout>
      <Grid container justifyContent = 'center'>
        <Card style ={{width: 900}}>
          <Box p = {5}>
            <Grid container justifyContent='space-between'>
              <h1>Список треков</h1>
              <Button onClick = {() => router.push('/tracks/create')}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks ={tracks}/>
        </Card>
      </Grid>
      </MainLayout>
    
  );
};

export default index;