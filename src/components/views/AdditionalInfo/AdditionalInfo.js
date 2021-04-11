import React from 'react';
import styles from './AdditionalInfo.module.scss';

import AdditionalIntro from '../../common/AdditionalIntro/AdditionalIntro';
import Renders from '../../common/Renders/Renders';
import Theatre from '../../common/Theatre/Theatre';
import Filmmaking from '../../common/Filmmaking/Filmmaking';

const AdditionalInfo = () => {
  return (
    <div className={styles.additionalInfo}>
      <AdditionalIntro />
      <Renders />
      <Theatre />
      <Filmmaking />
    </div>
  );
};

export default AdditionalInfo;
