import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


function Status404() {
  return (
    <>
      <Helmet>
        <title>Status - 404</title>
      </Helmet>
      <Container maxWidth='md'>
        <Box textAlign='center'>
          <img alt='404' height={180} src='/static/images/status/404.svg' />
          <Typography variant='h2' sx={{ my: 2 }}>
            The page you were looking for doesn't exist.
          </Typography>
          <Typography
            variant='h4'
            color='text.secondary'
            fontWeight='normal'
            sx={{ mb: 4 }}
          >
            It's on us, we moved the content to a different page.
          </Typography>
        </Box>
        <Container maxWidth='sm'>
          <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
            <Button href='/' variant='outlined'>
              Go to homepage
            </Button>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default Status404;
