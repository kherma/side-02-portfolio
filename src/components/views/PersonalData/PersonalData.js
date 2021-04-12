import React from 'react';

import PersonalInfo from '../../common/PersonalInfo/PersonalInfo';
import PersonalSkills from '../../common/PersonalSkills/PersonalSkills';
import PersonalSoft from '../../common/PersonalSoft/PersonalSoft';

const PersonalData = () => {
  return (
    <div>
      <PersonalInfo />
      <PersonalSkills />
      <PersonalSoft />
    </div>
  );
};

export default PersonalData;
