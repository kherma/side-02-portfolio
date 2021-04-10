import React from 'react';
import styles from './PersonalData.module.scss';

import PersonalInfo from '../../common/PersonalInfo/PersonalInfo';

const PersonalData = () => {
  return (
    <div className={styles.personalData}>
      <PersonalInfo />
    </div>
  );
};

export default PersonalData;
