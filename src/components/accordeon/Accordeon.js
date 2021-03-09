import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: '#FFFFFFB3',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  col: {
    backgroundColor:'#171941',
  },
  details: {  
    alignItems: 'center',
    
  },
  column: {
    flexBasis: '33.3%',
  },
  helper: {
    borderLeft: `0px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 1),
  },
}));

export default function DetailedAccordion({text}) {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Accordion className={classes.root} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.col}
        >
          <span> {text} </span>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={clsx(classes.column, classes.helper)}>
            <Chip label="完全沒有" onDelete={() => {}} />
          </div>

          <div className={clsx(classes.column, classes.helper)}>
            <Chip label="有一點點" onDelete={() => {}} />
          </div>

          <div className={clsx(classes.column, classes.helper)}>
            <Chip label="還算不少" onDelete={() => {}} />
          </div>

          <div className={clsx(classes.column, classes.helper)}>
            <Chip label="非常的多" onDelete={() => {}} />
          </div>
        </AccordionDetails>
        <Divider />
        {/* <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
}
