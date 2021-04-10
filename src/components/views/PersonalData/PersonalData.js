import React from 'react';
import styles from './PersonalData.module.scss';

import PersonalInfo from '../../common/PersonalInfo/PersonalInfo';
import PersonalSkills from '../../common/PersonalSkills/PersonalSkills';
import PersonalSoft from '../../common/PersonalSoft/PersonalSoft';

const PersonalData = () => {
  return (
    <div className={styles.personalData}>
      <PersonalInfo />
      <PersonalSkills />
      <PersonalSoft />
    </div>
  );
};

export default PersonalData;
