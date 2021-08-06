import React from 'react';
import { useParams } from "react-router-dom";
import Header from './Header';
import Years_of_experience from '../components/LawyerDropdownList/yearsOfExprience';
import Locations from '../components/LawyerDropdownList/locations';
import Rating from '../components/LawyerDropdownList/rating';
import LawyerList from '../components/LawyerList';

const clientLawyerListView = () => {
  const { lawType } = useParams();
  console.log(lawType);
  return (
    <>
      <Header />
      <div className="definition-of-law">
        Definition of law: Something Here
      </div>
      <div>
        <Years_of_experience />
        <Locations />
        <Rating />
      </div>
      <div>
        <LawyerList lawType={lawType} />
      </div>
    </>
  );
}

export default clientLawyerListView;