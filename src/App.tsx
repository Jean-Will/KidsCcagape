import { Button, Container, Grid, Typography,  } from "@mui/material"
import Estudo from "../src/Pdf/AgapeKids_2804.pdf"
import "./App.css"




const  App = () => {
  return (
    <>
      <Container className="app-container" style={{justifyContent:"center", alignItems:"center"}}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Typography variant="h1">
              
              Agape Kids 
            </Typography>
          </Grid>
          <Grid item xs={12} className="button-download">
            <Button>
              
              <a
                href={Estudo}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                
                Estudo
              </a>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography></Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App
