import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { ListItem } from '@/features/production_process/types';
import { DroppableList } from './Elements/DroppableList';

const MuiDragDrop: React.FC = () => {
  const [lists, setLists] = useState<ListItem[][]>([
    [
      { id: 1, text: 'Item 1', panel: 'ThanSau' },
      { id: 2, text: 'Item 2', panel: 'ThanTruoc' },
      { id: 3, text: 'Item 3', panel: 'TayPhai' },
      { id: 4, text: 'Item 4', panel: 'TayTrai' }
    ],
    [],
    [],
    [],
    [],
    [],
  ]);

  const department = ['Cut panel', 'Printing', 'Bonding', 'Embroidery', 'PadPrint', 'Heat Transfer'];


  const handleDrop = (
    draggedListIndex: number,
    droppedListIndex: number,
    draggedIndex: number,
    droppedIndex: number,
  ) => {
    const updatedLists = [...lists];
    const [draggedItem] = updatedLists[draggedListIndex].splice(draggedIndex, 1);

    if (droppedListIndex >= 1 && droppedListIndex <= 4) {
      const duplicateItem = updatedLists[droppedListIndex].find(item => item.text === draggedItem.text);
      if (!duplicateItem) {
        updatedLists[droppedListIndex].splice(droppedIndex, 0, draggedItem);
      }
    }

    while (updatedLists[0].length < 4) {
      updatedLists[0].push(draggedItem);
    }

    setLists(updatedLists);
  };

  return (
    <DndProvider backend={HTML5Backend}>

      <Grid container
            direction={'row'}
            spacing={1}
            justifyContent={'center'}
            alignItems={'stretch'}>
        {lists.map((list, index) => (
          <Grid item xs={12} md={index === 0 ? 12 : 2.4}>
            <Typography sx={{ color: '#555555' }} align={'center'} variant={'h3'}>{department[index]}</Typography>
            <DroppableList list={list} index={index} onDrop={handleDrop} />
          </Grid>
        ))}
      </Grid>

    </DndProvider>
  );
};

export default MuiDragDrop;