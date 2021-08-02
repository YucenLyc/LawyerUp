import React from 'react';
import { PageContainer } from '../pageContainer';
import { TopSection } from '../topSection';
import Dropdown from '../pageContainer/Dropdown';

export function ClientHomePage(props){
  return (
    <PageContainer>
      <TopSection>
        <div className="container">
          <Dropdown />
        </div>
      </TopSection>
    </PageContainer>
  )
}