import React from 'react';
import { PageContainer } from '../pageContainer';
import { TopSection } from '../topSection';
import Dropdown from '../pageContainer/Dropdown';
import Navbar from '../ClientHomeNavbar';

export function ClientHomePage(props){
  return (
    <PageContainer>
      <Navbar />
      <TopSection>
        <div className="container">
          <Dropdown />
        </div>
      </TopSection>
    </PageContainer>
  )
}