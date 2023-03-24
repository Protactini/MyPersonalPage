import React, { forwardRef } from 'react';
const Skills = forwardRef((props, ref) => {

  const styles = {
    pageStyle: {
      background:'#14213D',
      paddingTop: '4rem',
      paddingBottom: '6rem',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      backgroundAttachment: 'fixed',
    },
  
  }


    return (
      <div id = 'skillsPage' style={styles.pageStyle} ref={ref}>
        <h1>Skills Articles</h1>
      </div>
    );
  });
  
  export default Skills;