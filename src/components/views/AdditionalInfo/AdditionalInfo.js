import React from 'react';
import styles from './AdditionalInfo.module.scss';

import AdditionalIntro from '../../common/AdditionalIntro/AdditionalIntro';
import Renders from '../../common/Renders/Renders';

const AdditionalInfo = () => {
  return (
    <div className={styles.additionalInfo}>
      <AdditionalIntro />
      <Renders />
    </div>
  );
};

export default AdditionalInfo;
