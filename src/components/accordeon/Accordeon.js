import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
    backgroundColor: '#171941',
  },
  details: {
    alignItems: 'center',
    backgroundColor:'#32325d',
    color: '#171941'

  },
  column: {
    flexBasis: '33.3%',
  },
  helper: {
    borderLeft: `0px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 1),
  },
}));

export default function DetailedAccordion({ text }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

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
          <FormControl component="fieldset" >
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} row>
              <FormControlLabel value="female" control={<Radio />} label="完全沒有" />
              <FormControlLabel value="male" control={<Radio />} label="有一點點" />
              <FormControlLabel value="other" control={<Radio />} label="還算不少" />
              <FormControlLabel value="both" control={<Radio />} label="非常的多" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
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
