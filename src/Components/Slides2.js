import React from 'react';
import svbPic from "../Components/img/beaconfire.jpeg";


export const Slides2 = (props) => {

    const styles = {
        companyPic: {
          width: "90%",
          height: "90%",
          borderRadius: "50%",
          objectFit: "contain",
          justifyContent: "center",
        },
        companyImageContainer: {
          width: "200px",
          height: "200px",
          borderRadius: "100%",
          overflow: "hidden",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "rgba(255,255,255, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
      };

  return (
    <div style={{display: 'flex', justifyContent: "center",alignItems: "center", marginTop: '20px', marginBottom: '20px', marginLeft:'30px', marginRight:'30px'}}>
       <div className="row featurette" style={{width: '85%', justifyContent: "center",alignItems: "center",}}>
            <div className="col-md-4">
                <div className="profile-image-container" style={styles.companyImageContainer}>
                <img src={svbPic} alt="Your Name" className="profile-image" style={styles.companyPic}/>
                </div>
            </div>
            <div className="col-md-8" style={{marginTop: '15px'}}>
                <h2 className="featurette-heading fw-normal lh-1">BeaconFire Solution</h2>
                <h2 className="lead"> Full-stack Engineer</h2>
                <p>Developing a web-based application using Angular and Spring Boot for user management system. 
                    Including function of login, on-boarding, and visa status management for both employee and HR users. 
                    Designing the database structure and deployed it on Amazon RDS database using MySQL,integratinf file uploading functionality with AWS S3.</p>
            </div>
        </div>  
    </div>
  )
}

export default (Slides2)