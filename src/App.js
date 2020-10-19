import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { getMatches } from "./api/Api";
import MyCard from "./components/MyCard";
import { Grid } from "@material-ui/core";

function App() {
   const [matches, setMatches] = useState([]);

   useEffect(() => {
      getMatches()
         .then((data) => {
            setMatches(data.matches);
            console.log(data.matches);
         })
         //  .catch(error => alert('Something went Wrong :('));
         .catch();
   });

   return (
      <div className='App'>
         <Navbar />

         <Grid container style={{ justifyContent: 'center' }}>
            <Grid sm='0'></Grid>
            <Grid sm='7'>
               {matches.map((match) => (
                  <Fragment key={match.unique_id}>
                     {match.type == "Twenty20" ? (
                        <MyCard key={match.unique_id} match={match} />
                     ) : (
                        ""
                     )}
                  </Fragment>
               ))}
            </Grid>
         </Grid>
      </div>
   );
}

export default App;
