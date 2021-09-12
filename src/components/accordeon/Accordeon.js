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
import { useDispatch } from "react-redux";
import updateQuestion from '../../views/redux/question/question-action'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    color: '#FFFFFFB3',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  col: {
    backgroundColor: '#171941',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
  },
  //rgba(0, 0, 0, .125)
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

export default function DetailedAccordion({ text, section, questionId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const questionText = ["完全沒有", "有一點點", "還算不少", "非常的多" ]
  const dispatch = useDispatch();
  

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    const answerValue = questionText[event.target.value - 1]
    const answerKey = event.target.value
    const data = {
      answerKey,
      answerValue,
      section,
      questionId
    }
    dispatch(updateQuestion(data));

  };

  return (

    <div className={classes.root}>
      <Accordion className={classes.root}  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
          className={classes.col}
          
        >
          <span> {text} </span>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <FormControl component="fieldset">
           
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} row>
              <FormControlLabel value="1" control={<Radio />} label="完全沒有" />
              <FormControlLabel value="2" control={<Radio />} label="有一點點" />
              <FormControlLabel value="3" control={<Radio />} label="還算不少" />
              <FormControlLabel value="4" control={<Radio />} label="非常的多" />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
