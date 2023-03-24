import React, { useState, useEffect } from 'react';
import svbPic from "../Components/img/SVB_LOGO.jpg";


export const Slides = (props) => {

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
                <h2 className="featurette-heading fw-normal lh-1">Silicon Valley Bank</h2>
                <h2 className="lead"> Back-end developer</h2>
                <p>Focusing on building a robust Wires API for SVB GO and WIRES service to support small businesses and community engagement. 
                Including design, implementation, and testing, working on various application layers and utilizing technologies like JDK 1.8, Spring Boot, and Git.</p>
            </div>
        </div>  
    </div>
  )
}

export default (Slides)