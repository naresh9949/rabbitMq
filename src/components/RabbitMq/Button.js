import React,{useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useErrorHandler } from "react-error-boundary";

const useStyles = makeStyles({
  root: {
    width:120,
  },
});
const getNewName = (name) => {
    if(name==="Activate")
    return "Deactivate";
    else
    return "Activate";
}

export default function ActiveButton(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(props.state);
  const listeners = props.data;
  const idx = props.idx;
  const [name, setName] = useState(props.name);
  const handleError = useErrorHandler();

  function ActivateDeactivate() {
    setLoading(true);

    // activate or deactive the listner
    console.log("Working fine")
    console.log(listeners[idx].ActionURL);
    axios.post(listeners[idx].ActionURL)
    .then((res)=>{
      const listener = res.data.Body.Listeners[0];
      listeners[idx] = listener;
    // changing the state of button
    setState(!state);

    //updating the listeners with out fetching all listeners that we have
    props.action([...listeners])
    setName(getNewName(name))
    setLoading(false);

    }).catch(err=>{
      console.log(err);
      handleError(err);
    })
  }

  return (
      <LoadingButton className={classes.root}
        onClick={ActivateDeactivate}
        loading={loading}
        loadingIndicator="Loading..."
        variant="outlined"
      >
          {name}
      </LoadingButton>
  );
}
