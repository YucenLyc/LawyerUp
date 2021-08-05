import React, {useState, useEffect} from 'react';
import DefinedLawFieldBox from './definedLawFieldBox';


const axios = require('axios');

export default function AllDefinedLawlist(props) {
  const [specialities, setSpecialities] = useState([])
  
  useEffect(() => {
    axios.get("/api/specialities").then(response => {
      setSpecialities(response.data);
      console.log('specialities:', specialities);
    });
  }, [])


  console.log('specialities:', specialities);

  const DefinedItemList = specialities.map((singleSpeciality) => {
    return <DefinedLawFieldBox
      name={singleSpeciality.name}
      definition={singleSpeciality.definition}
      onClick={props.onClick}
   />
  });

  return(
    <ul className="DefinitionList">
      <h3>definition of a field of law:</h3>
      {DefinedItemList}
    </ul>
  )

}