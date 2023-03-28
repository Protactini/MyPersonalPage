import React, { forwardRef } from 'react';

import {AiTwotoneMail as Email, AiFillPhone as Phone} from 'react-icons/ai';



const Contact = forwardRef((props, ref) => {
  const styles = {
    pageStyle: {
      background:'#14213D',
      paddingTop: '4rem',
      paddingBottom: '6rem',
      color: '#E5E5E5',
      display: "flex",
      flexDirection:'column',
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Times New Roman",
    },
  }


    return (
      <div id = 'contactPage' style={styles.pageStyle} ref={ref}>
        <div class="row">
          <div class="col-lg-12 text-center">
              <h2 class="section-heading" style={{fontWeight: "bold",}}>Contact Me</h2>
              <h5 class="contact-info" style={{fontSize: "20px",}}><Email/> Email: <a style={{fontSize: "18px",}} class="lead" href="mailto:hzhu85@asu.edu">hzhu85@asu.edu</a> ||  <a style={{fontSize: "18px",}} 
              class="lead" href="mailto:protactini0819@gmail.com">protactini0819@gmail.com</a>
              , <Phone/> Phone: <a style={{fontSize: "18px",}} class="lead" href="tel:4809384588">480-938-4588</a></h5>
          </div>
        </div>
      </div>
    );
  });
  
  export default Contact;