import React, { forwardRef } from 'react';
import {BsFillDatabaseFill as Database, BsFiletypeJava as Java,} from 'react-icons/bs';
import { SiSpringboot as Spring} from 'react-icons/si';
import {FaReact as ReactIcon, FaPython as Python} from 'react-icons/fa';
import {AiOutlineCloudServer as CloudServer} from 'react-icons/ai';


const Skills = forwardRef((props, ref) => {

  const iconPes = '70%'

  const styles = {
    pageStyle: {
      background:'#14213D',
      paddingTop: '4rem',
      paddingBottom: '6rem',
      color: '#FFFFFF',
      display: "flex",
      flexDirection:'column',
      alignItems: "center",
      justifyContent: "center",
    },
    skillsIconContainer: {
      width: "140px",
      height: "140px",
      borderRadius: "100%",
      overflow: "hidden",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgba(255,255,255, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color:"#FFFFFF",
    },
    skillsTitle: {
      fontSize: "60px",
      fontWeight: "bold",
      fontFamily: "Times New Roman, serif",
      margin: "0",
      textAlign: "center",
      color: "rgba(F0EFF4, 0.1)",
    },
    skillsSecondLine: {
      paddingTop: "20px",
      fontSize: "15px",
      fontFamily: "Times New Roman, serif",
      margin: "0",
      textAlign: "center",
      color: "#F0EFF4",
    },
  
  }


    return (
      <div id = 'skillsPage' style={styles.pageStyle} ref={ref}>
        <h1 style={styles.skillsTitle}>SKILLS</h1>
        {/* <div style ={{height: '20px'}}></div> */}
        <h2 className="lead" style={styles.skillsSecondLine}> Below are some of my skills, and I'm always looking to learn more.</h2>
        <div className='container' style={{width:'80%', paddingTop:'3rem',}}>
          <div class="row">
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Java style={{width: iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Java</h2>
              <p>My recent projects have primarily been focused on Java, specifically building back-end API servers. I've had the opportunity to apply this expertise in my work at SVB as a back-end server developer.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Python style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Python</h2>
              <p>Over the past four years, I have gained extensive experience in Python through both my coursework and personal projects. These projects have included fake news detection and the creation of an IoT system using a Raspberry Pi.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Spring style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Spring and SpringBoot</h2>
              <p>I have utilized the Spring and Spring Boot frameworks for several projects, including two that I worked on during my time at SVB, as well as my own time-sheet management project.</p>
            </div>
          </div>

          <div style ={{paddingTop: "20px"}} class="row">
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <ReactIcon style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">React and Bootstrap</h2>
              <p>I have utilized React to build several single-page web applications, including the web page you are currently viewing, which was built with React and components from Bootstrap.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Database style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Database</h2>
              <p>I have worked with several databases for different projects, including SQL databases such as MySQL and a NoSQL database like MongoDB.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <CloudServer style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">CloudServer</h2>
              <p>I have deployed some of my projects to various cloud servers, including AWS and GCP. Although most of them have been deleted from the cloud for cost-saving purposes, this page is currently deployed on AWS Amplify.</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  
  export default Skills;