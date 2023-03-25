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
  
  }


    return (
      <div id = 'skillsPage' style={styles.pageStyle} ref={ref}>
        <h1>Skills Articles</h1>
        <div className='container' style={{width:'80%', paddingTop:'3rem',}}>
          <div class="row">
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Java style={{width: iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Java</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Python style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Python</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Spring style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Spring and SpringBoot</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <ReactIcon style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">React</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <Database style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">Database</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            </div>
            <div class="col-lg-4">
              <div className='skillIconContainer' style={styles.skillsIconContainer}> <CloudServer style={{width:iconPes, height:iconPes, color: '#FCA311'}}/></div>
              <h2 class="fw-normal">CloudServer</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  
  export default Skills;