import React, { forwardRef } from 'react';


import backgroundImg1 from "../Components/img/F_WYSS_1-1.jpg"

import profilePic from "../Components/img/Coffee.jpeg";
import backgroundImg from "../Components/img/F_WYSS_1-1.jpg"

export const Home = forwardRef((props, ref) => {

    const containerStyle={
      // backgroundImage: "url('https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/F_WYSS_1-2.jpg?crop=0%2C234%2C4000%2C2200&wid=4000&hei=2200&scl=1.0')",
      // marginTop:'-70px',
      // fontSize:'50px',
      height: '100vh',
    };

    const myStyles = {
      backgroundImg: {
        // backgroundImage: `url(${backgroundImg})`,
        // backgroundImage: "url('https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/F_WYSS_1-2.jpg?crop=0%2C234%2C4000%2C2200&wid=4000&hei=2200&scl=1.0')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: "center center",
        zIndex: -2,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      profileContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      },
      profileImageContainer: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        overflow: "hidden",
        marginBottom: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",

        backgroundColor: "rgba(255,255,255, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      profileImage: {
        width: "95%",
        height: "95%",
        borderRadius: "50%",
        objectFit: "cover",
      },
      profileName: {
        fontSize: "80px",
        fontWeight: "bold",
        margin: "0",
        textAlign: "center",
        color: "rgba(255,255,255, 1)",
      },
      profilePosition: {
        fontFamily: "Times New Roman, serif",
        fontSize: "30px",
        fontWeight: "bold",
        fontStyle: "italic",
        margin: "0",
        textAlign: "center",
        color: "rgba(255,255,255, 1)",
      },
      overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: -1,
      },
    };

  
  
    return (
      <div id = 'homePage' className="homepage-container" style={containerStyle} ref={ref}>
        <div className="overlay" style={myStyles.overlay}></div>
        <img src={backgroundImg} className="background-image" style={myStyles.backgroundImg} alt="Background-Pic"></img>
        <div className="profile-container" style={myStyles.profileContainer}>
          <div className="profile-image-container" style={myStyles.profileImageContainer}>
            <img src={profilePic} alt="Your Name" className="profile-image" style={myStyles.profileImage}></img>
          </div>
          <div className="profile-info-container">
            <h1 className="profile-name" style={myStyles.profileName}>Alex Zhu</h1>
            <h2 className="profile-position" style={myStyles.profilePosition}>Former back-end developer in SVB, Looking for a job</h2>
          </div>
        </div>
      </div>
    );
  });
  
  export default Home;