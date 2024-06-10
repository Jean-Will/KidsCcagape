import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AgapeKids from "../../Pdf/CultoAgapeKids_0505.pdf";
import EscalaMes from "../../Pdf/Escala_Maio.pdf";
import EscalaEventos from "../../Pdf/EscalaEventos_Maio.pdf";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InventoryIcon from '@mui/icons-material/Inventory';




interface TemporaryDrawerProps {
  open: boolean;
  onClose: () => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ open, onClose }) => {
  const toggleDrawer = () => {
    onClose();
  };

  const handleItemClick = (route: string) => {
    window.open(route, '_blank'); // Abre o PDF em uma nova aba
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {[
          { text: 'Escala do mês', route: EscalaMes, icon: <CalendarMonthIcon /> },
          { text: 'Escala de Eventos', route: EscalaEventos, icon: <CalendarMonthIcon /> },
          { text: 'Lição da semana', route: AgapeKids, icon: <PictureAsPdfIcon /> },
          { text: 'Treinamentos', route: 'https://www.youtube.com/playlist?list=PLuBDMGWXLvervvThHPsz5qwnFC0TBsIre', icon: <PlayCircleIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(item.route)}>
              <ListItemIcon>
                {item.icon ? item.icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: 'Materiais 5 a 8', route: "./" , icon: <InventoryIcon /> },
          { text: 'Materiais ', route: '/trash', icon: <InventoryIcon/> },
          { text: 'Spam', route: '/spam', icon: <MailIcon /> },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => handleItemClick(item.route)}>
              <ListItemIcon>
                {item.icon ? item.icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer}></Button>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
