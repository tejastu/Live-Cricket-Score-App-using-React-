import {
   Button,
   Card,
   CardActions,
   CardContent,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Grid,
   Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Fragment } from "react";
import { getMatchDetail } from "../api/Api";
const MyCard = ({ match }) => {
   const [detail, setDetail] = useState({});
   const [open, setOpen] = useState(false);

   const handleClick = (id) => {
      getMatchDetail(id)
         .then((data) => {
            console.log("MATCH DATA", data);
            setDetail(data);
            handleOpen();
         })
         .catch((error) => console.log(error));
   };

   const getMatchCard = () => {
      return (
         <Card
            style={{ marginTop: 23, backgroundColor: "white", opacity: "0.77" }}
         >
            <CardContent>
               <Grid container justify='center' alignItems='center' spacing={4}>
                  <Grid item>
                     <Typography variant='h5'>{match["team-1"]}</Typography>
                  </Grid>
                  <Grid item>
                     {/* <img
                        style={{ width: 85 }}
                        src={require("../img/vs2.png")}
                        alt=''
                     /> */}
                     <Typography variant='h6'>VS</Typography>
                  </Grid>
                  <Grid item>
                     <Typography variant='h5'>{match["team-2"]}</Typography>
                  </Grid>
               </Grid>
            </CardContent>

            <CardActions>
               <Grid container justify='center'>
                  <Button
                     onClick={() => {
                        handleClick(match.unique_id);
                     }}
                     item
                     variant='contained'
                     color='primary'
                  >
                     Match Status
                  </Button>
                  <Button
                     style={{ marginLeft: 8 }}
                     item
                     variant='contained'
                     color='primary'
                  >
                     Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                  </Button>
               </Grid>
            </CardActions>
         </Card>
      );
   };

   const handleClose = () => {
      setOpen(false);
   };
   const handleOpen = () => {
      setOpen(true);
   };

   const getDialog = () => (
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle id='alert-dialog-title'>{"Match Detail"}</DialogTitle>

         <DialogContent>
            <DialogContentText id='alert-dialog-description'>
               <Typography>{detail.stat}</Typography>
               <Typography>
                  Match
                  <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                     {detail.matchStarted ? "Started" : "Still not Started"}
                  </span>
               </Typography>

               <Typography>
                  Score
                  <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                     {detail.score}
                  </span>
               </Typography>
            </DialogContentText>
         </DialogContent>

         <DialogActions>
            <Button onClick={handleClose} color='primary' autoFocus>
               Close
            </Button>
         </DialogActions>
      </Dialog>
   );

   return (
      <Fragment>
         {getMatchCard()}
         {getDialog()}
      </Fragment>
   );
};

export default MyCard;
