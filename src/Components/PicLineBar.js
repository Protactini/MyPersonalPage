import React from 'react';

import ASU from "../Components/img/asu.png";
import Epics from "../Components/img/epics.jpg";
import SVB from "../Components/img/SVB_LOGO.jpg";
import BeaconFire from "../Components/img/beaconfire.jpeg";

function PicLineBar() {

    const styles = {
        companyLine: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '120px',
            background:'#FFFFFF',
        },

        companyLogo: {
            width: 'auto',
            height: '85%',
            margin: '0 10px',
        }
    }


  return (
    <div className="company-line" style={styles.companyLine}>
      <img src={ASU} alt="Company 1" className="company-logo" style={styles.companyLogo}/>
      <img src={Epics} alt="Company 2" className="company-logo" style={styles.companyLogo}/>
      <img src={SVB} alt="Company 3" className="company-logo" style={styles.companyLogo}/>
      <img src={BeaconFire} alt="Company 3" className="company-logo" style={styles.companyLogo}/>
    </div>
  );
}

export default PicLineBar;