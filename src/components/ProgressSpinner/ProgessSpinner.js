import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";


export default function CircularColor () {
  return (
    <Stack sx={{ color: "grey.300" }} spacing={1} direction="row">
      <CircularProgress style={{color:"#222A42"}} size={15}/>
    </Stack>
  );
};