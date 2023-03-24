import React, { forwardRef } from 'react';
const Contact = forwardRef((props, ref) => {
  const myStyle={
    // backgroundImage: "url('https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/F_WYSS_1-2.jpg?crop=0%2C234%2C4000%2C2200&wid=4000&hei=2200&scl=1.0')",
    // marginTop:'-70px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundAttachment: 'fixed',
  };


    return (
      <div id = 'contactPage' style={myStyle} ref={ref}>
        <h1>Contact Info</h1>
      </div>
    );
  });
  
  export default Contact;