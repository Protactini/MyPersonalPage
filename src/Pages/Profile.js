import React, { forwardRef, useState} from 'react';
import Button from 'react-bootstrap/Button';



import profilePic from "../Components/img/profilePic.png";
import Resume from "../Components/doc/Hongzhi_Resume.pdf";
import {BsGithub as Github} from 'react-icons/bs';
import {AiOutlineFilePdf as ResumeIcon} from 'react-icons/ai';
import {SiLeetcode as Leetcode} from 'react-icons/si'
import {FaLinkedinIn as Linkedin} from 'react-icons/fa'
import Slides from '../Components/Slides';
import Slides2 from '../Components/Slides2';
import PicLineBar from '../Components/PicLineBar';


const Profile = forwardRef((props, ref) => {

  const [isHovered0, setIsHovered0] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseOver0 = () => {
    setIsHovered0(true);
  };
  const handleMouseOut0 = () => {
    setIsHovered0(false);
  };

  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };
  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };
  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };


  const styles = {
    myStyle: {
      background:'#F0EFF4',
      paddingBottom: '6rem',
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "50px",
      alignItems: "center",
    },
    container2: {
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      padding: "50px",
    },
    profilePic: {
      width: "90%",
      height: "90%",
      borderRadius: "50%",
      objectFit: "cover",
      justifyContent: "center",
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      listStyle: 'none',
      textAlign: 'center',
    },
    button: {
      justifyContent: "center",
      alignItems: "center",
      fontSize: '25px',
      lineHeight: '35px',
      display: 'block',
      width: '40px',
      height: '40px',
      transition: 'all 0.2s',
      color: 'white',
      borderRadius: '100%',
      outline: 'none',
    },
    info: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    name: {
      marginTop: "40px",
      fontFamily: "Times New Roman, serif",
      fontSize: "32px",
      fontWeight: "bold",
    },
    position: {
      fontFamily: "Times New Roman, serif",
      fontSize: "24px",
      fontWeight: "normal",
    },
    profileImageContainer: {
      width: "280px",
      height: "280px",
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
      <div id = 'profilePage' className="content-section" style={styles.myStyle} ref={ref}>
        <PicLineBar/>
        <div className="container personal-info" >
          <div className="row">
            <div className="col-lg-4" style={styles.container}>
              <div className="profile-image-container" style={styles.profileImageContainer}>
                <img src={profilePic} alt="Profile Pic" style={styles.profilePic}/>
              </div>
              <div className='mt-4' style={styles.buttons}>
                <li >
                  <a href="https://leetcode.com/Protactini/" onMouseOver={handleMouseOver0} onMouseOut={handleMouseOut0} 
                  style={{...styles.button, backgroundColor: isHovered0 ? '#FCA311' :  '#000000'}}  target="blank" ><Leetcode /></a>
                </li>
                <li >
                  <a href="https://www.linkedin.com/in/alex-zhu-77753b194/" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1} 
                  style={{...styles.button, backgroundColor: isHovered1 ? '#FCA311' :  '#000000'}} target="blank"><Linkedin /></a>
                </li>
                <li >
                  <a href="https://github.com/Protactini" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2} 
                  style={{...styles.button, backgroundColor: isHovered2 ? '#FCA311' :  '#000000'}} target="blank" ><Github /></a>
                </li>
              </div>
            </div>



            <div className="col-lg-8"  style={styles.container2}>
              <h1 className="featurette-heading fw-normal lh-1">Alex Zhu</h1>
              <h2 className="lead"> Experienced Back-End Java Developer Seeking New Opportunities</h2>
              <div>
                <p>Welcome to the personal web of Alex Zhu!  
                  I have a Master's degree in Computer Engineering from Arizona State University, 
                  and I am well-versed in various programming languages and technical tools.</p>
                <p>I finished my position at Silicon Valley Bank as a Back-end Developer this year and actively seeking job opportunities that will allow me to leverage my strong background in computer engineering.. </p>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
                  <Button variant="secondary" size="lg" href={Resume} download="Alex Zhu - Resume.pdf" style={{display: "flex", justifyContent: "center", alignItems: "center",width:"130px", height: "60px", borderRadius: '2px'}}>
                    <ResumeIcon/>  Resume
                  </Button>
                </div>
                
              </div>
            </div>

          </div>
        </div>

        <div className="container company list" style={{ display: "flex", flexDirection: "column", width: '90%'}} >
          <div id="myCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{height:'280px',}}>
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
            </div>
            <div class="carousel-inner" >
              <div class="carousel-item">
                <Slides/>
              </div>
              <div class="carousel-item active">
                <Slides2/> 
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>
    );
  });
  
  export default Profile;