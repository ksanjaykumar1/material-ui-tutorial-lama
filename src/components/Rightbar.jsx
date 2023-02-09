import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import React from 'react';
import itemData from '../utils/imageData';

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt='Remy Sharp'
            src='https://material-ui.com/static/images/avatar/1.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://material-ui.com/static/images/avatar/2.jpg'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://material-ui.com/static/images/avatar/3.jpg'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://material-ui.com/static/images/avatar/4.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://material-ui.com/static/images/avatar/5.jpg'
          />
          <Avatar
            alt='Amy'
            src='https://material-ui.com/static/images/avatar/6.jpg'
          />
          <Avatar
            alt='Trent'
            src='https://material-ui.com/static/images/avatar/7.jpg'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

export default Rightbar;
