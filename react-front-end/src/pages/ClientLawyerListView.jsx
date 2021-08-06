import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Header from './Header';
import Years_of_experience from '../components/LawyerDropdownList/yearsOfExprience';
import Locations from '../components/LawyerDropdownList/locations';
import Rating from '../components/LawyerDropdownList/rating';
import LawyerList from '../components/LawyerList';

const clientLawyerListView = () => {
  const { lawType } = useParams();
  console.log(lawType);
  const [lacationSelected, setLoactionSelected] = useState('Choose One');
  const [rateSelected, setRateSelected] = useState('Choose One');
  const [yearSelected, setYearSelected] = useState('Choose One');
  return (
    <>
      <Header />
      <div className="definition-of-law">
        Definition of law: Something Here
      </div>
      <div>
        <div>
          <label className="years">Years_of_experience</label>
          <Years_of_experience selected={yearSelected} setSelected={setYearSelected} />
        </div>
        <div>
          <label className="locations">Locations</label>
          <Locations selected={lacationSelected} setSelected={setLoactionSelected} />
        </div>
        <div>
          <label className="rating">Hourly Rate</label>
          <Rating selected={rateSelected} setSelected={setRateSelected} />
        </div>
      </div>
      <div>
        <LawyerList lawType={lawType} location={lacationSelected} rate={rateSelected} year={yearSelected}/>
      </div>
    </>
  );
}

export default clientLawyerListView;