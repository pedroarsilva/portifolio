import React from 'react';
import styled from "styled-components";
import { useTheme } from '../../context/themeContext';
import { PagesLayout } from '../../styles/Layouts';
import Title from '../../Components/Title';
import Timeline from '../../Components/Timeline';

const ExperienceStyled = styled(PagesLayout)`
    .timeline-con{
        margin-top: 3.5rem
    }
`;

function Experience() {
  const theme = useTheme()

  return (
    <ExperienceStyled theme={theme}>
      <Title 
        name={'Expeirence'} 
        desc={'It is a long established fact that a reader will be distracted by the readable'}
      />
        <div className='timeline-con'>
            <Timeline />
        </div>
    </ExperienceStyled>
  )
}

export default Experience;
