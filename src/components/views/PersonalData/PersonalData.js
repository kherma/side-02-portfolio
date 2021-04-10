import React from 'react';
import styles from './PersonalData.module.scss';

import PersonalInfo from '../../common/PersonalInfo/PersonalInfo';
import PersonalSkills from '../../common/PersonalSkills/PersonalSkills';

const PersonalData = () => {
  return (
    <div className={styles.personalData}>
      <PersonalInfo />
      <PersonalSkills />
    </div>
  );
};

export default PersonalData;
