import React,{useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

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

  function ActivateDeactivate() {
    setLoading(true);

    // activate or deactive the listner
    axios.post(listeners[idx].ActionURL)
    .then((res)=>{
      const listener = res.data.Body.Listeners[0];
      listeners[idx] = listener;
    // changing the state of button
    setState(!state);

    //updating the data that we have
    props.action([...listeners])
    setName(getNewName(name))
    setLoading(false);

    }).catch(err=>{
      console.log(err)
    })
  
    

    // // changing the state of button
    // setState(!state);

    // //updating the data that we have
    // listeners[idx].IsActive = listeners[idx].IsActive?false:true;
    // props.action([...listeners])
    // setName(getNewName(name))
    // setLoading(false);
   
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
