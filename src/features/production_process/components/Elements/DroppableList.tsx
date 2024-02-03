import React from 'react';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { Box, Grid } from '@mui/material';
import { DraggableItemProps, DroppableListProps } from '../../types';
import { DraggableItem } from './DraggableItem';

export const DroppableList: React.FC<DroppableListProps> = ({list, index, onDrop}) => {
  const [, drop] = useDrop({
    accept: 'ITEM',
    drop: (item: DraggableItemProps, monitor: DropTargetMonitor) => {
      const draggedListIndex = item.listIndex;
      const droppedListIndex = index;
      const draggedIndex = item.index;
      const droppedIndex = list.length;

      onDrop(draggedListIndex, droppedListIndex, draggedIndex, droppedIndex);
    },
  });

  return (
    <Grid ref={drop}
          container
          direction={'row'}
          justifyContent={'left'}
          alignItems={'stretch'}
          spacing={0.5}
          sx={{minHeight:'40px',backgroundColor:'#FCEEFC',mt:2}}>
      {list.map((item, i) => (
        <Grid item xs={12} md={ 12/list.length}>
        <DraggableItem key={item.id} index={i} item={item} listIndex={index} tooltipStatus={index===0 ? false : true}/>
        </Grid>
      ))}
    </Grid>
  );
};