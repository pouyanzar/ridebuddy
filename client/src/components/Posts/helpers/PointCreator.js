import {useState} from 'react';

export default function PointCreator(props) {
  const {name} = props;
  const [state, setState] = useState('Toronto');

  const changeHandler = (e) => {
    setState(e.target.value);
  }
  return (
        <select 
          value={state} 
          onChange={changeHandler} 
          className="form-control" 
          name={name}
        >
          <option value="montreal">Montreal</option>
          <option value="ottawa">Ottawa</option>
          <option value="toronto">Toronto</option>
        </select>
  )
}
