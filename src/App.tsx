
import { Container, Grid, Typography } from '@mui/material';
import './App.css';


const App = () => {
  return (
    <Container className="app-container" style={{ justifyContent: "center", alignItems: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h1">
            Agape Kids
          </Typography>
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
