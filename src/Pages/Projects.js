import React, { forwardRef } from 'react';
const Projects = forwardRef((props, ref) => {

  const styles = {
    pageStyle: {
      background:'#E5E5E5',
      paddingTop: '4rem',
      paddingBottom: '6rem',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      backgroundAttachment: 'fixed',
    },
  
  }



    return (
      <div id = 'projectsPage' style={styles.pageStyle} ref={ref}>
        <h1>Projects Articles</h1>
      </div>
    );
  });
  
  export default Projects;