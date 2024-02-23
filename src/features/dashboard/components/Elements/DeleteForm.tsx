import { Avatar, Grid, Typography } from '@mui/material';
import { DeleteSharp } from '@mui/icons-material';
import { customStyles } from '@/utils/format';

export const DeleteForm = () => {
  return(
        <Grid container
              justifyContent={'center'}
              alignItems={'center'}
              spacing={1}
              direction={'row'}>
          <Grid item xs={12} md={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Avatar sx={{backgroundColor: customStyles['colorButtonDelete']}}>
              <DeleteSharp />
            </Avatar>
          </Grid>
          <Grid item xs={12} md={10} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography>
              Are you sure you want to delete this item? This action cannot be undone.
            </Typography>
          </Grid>
        </Grid>
  )
}