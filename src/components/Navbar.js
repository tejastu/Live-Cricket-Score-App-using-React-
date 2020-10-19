import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";


const Navbar = () => {
   return (
      <AppBar position='static' style={{ backgroundColor: "transparent" }}>
         <Toolbar>
            <Typography style={{fontWeight:'bolder'}} variant='h5'> T20 Buzz 🏏</Typography>
            {/* <Button color='inherit'>News</Button> */}
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;
