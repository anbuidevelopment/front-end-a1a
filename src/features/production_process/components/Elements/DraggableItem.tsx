import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import { DraggableItemProps } from '../../types';
import * as process from 'process';

export const DraggableItem: React.FC<DraggableItemProps> = ({ index, item, listIndex, tooltipStatus }) => {
  const [, drag] = useDrag({
    type: 'ITEM',
    item: { index, listIndex },
  });
  const [isOpen, setIsOpen] = useState(tooltipStatus);

  const handleMouseEnter = () => {
    tooltipStatus ? setIsOpen(true) : setIsOpen(false);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <Tooltip
      open={isOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      placement={'right'}
      sx={{backgroundColor:'#FCEEFC'}}
      title={<Card>
        <CardContent>
          <CardMedia
            image={process.env.PUBLIC_URL+`/static/images/panel/${item.panel}.png`}
            component='img'
            alt='Profile Image'
            sx={{ width: '200px'}}
          />
          <Typography variant='h3'>{item.text}</Typography>
        </CardContent>
      </Card>}
    >
      <Card sx={{height:'100%'}}>
        <CardContent ref={drag}>
          <CardMedia
              image={process.env.PUBLIC_URL+`/static/images/panel/${item.panel}.png`}
            component='img'
            alt='Profile Image'
            sx={{ width: '200px',height:'200px' }}
          />
          <Typography variant='h3'>{item.text}</Typography>
        </CardContent>
      </Card>
    </Tooltip>
  );
};
