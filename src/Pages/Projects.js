import React, { forwardRef, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import {BsGithub as Github} from 'react-icons/bs';

import Project1 from "../Components/img/project1.png";
import Project2 from "../Components/img/project2.png";
import Project3 from "../Components/img/project3.png";
import Project3Detail from "../Components/img/project3-detail.png";

import Resume from "../Components/doc/Hongzhi_Resume.pdf";




const Projects = forwardRef((props, ref) => {

  const styles = {
    pageStyle: {
      background:'#E5E5E5',
      paddingTop: '4rem',
      paddingBottom: '3rem',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
    projectContainerStyle: {
      width:'80%', 
      paddingTop:'3rem',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
    },
    overlayStyle: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'transparent',
      zIndex: '1',
    },
    skillsTitle: {
      fontSize: "60px",
      fontWeight: "bold",
      fontFamily: "Times New Roman, serif",
      margin: "0",
      textAlign: "center",
      color: '#14213D',
    },
    skillsSecondLine: {
      paddingTop: "20px",
      fontSize: "15px",
      fontFamily: "Times New Roman, serif",
      margin: "0",
      textAlign: "center",
      color: '#14213D',
    },
  }

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);





    return (
      <div id = 'projectsPage' style={styles.pageStyle} ref={ref}>
        <h1 style={styles.skillsTitle}>Personal Projects</h1>
        <h2 className="lead" style={styles.skillsSecondLine}> Below are some of my personal projects all these code should be able to be found on my Github</h2>
        <div className='container' style={styles.projectContainerStyle}>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={Project3} />
            <Card.Body>
              <Card.Title>TimeSheet managment</Card.Title>
              <Card.Text>
                It is web application with both front-end an back-end server and work with NoSql database
              </Card.Text>
              <Button variant="outline-light" style={styles.overlayStyle} onClick={() => setShow1(true)}  ></Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '16rem' }}  >
            <Card.Img variant="top" src={Project1} />
            <Card.Body>
              <Card.Title>IoT with Resperberry Pi</Card.Title>
              <Card.Text>
                Writen a Python program on Resperberry Pi and worked with AWS
              </Card.Text>
              <Button variant="outline-light" style={styles.overlayStyle} onClick={() => setShow2(true)} ></Button>
              {/* <a href className="stretched-link" onClick={handleShow}>Go somewhere</a> */}
            </Card.Body>
          </Card>

          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={Project2} />
            <Card.Body>
              <Card.Title>Web Chat App</Card.Title>
              <Card.Text>
                An simple React pragram worked with a simple back end to achieve chat function.
              </Card.Text>
              <Button variant="outline-light" style={styles.overlayStyle} onClick={() => setShow3(true)} ></Button>
            </Card.Body>
          </Card>
        </div>

        {/* <div className='container' style={styles.projectContainerStyle}>
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={Project2} />
            <Card.Body>
              <Card.Title>FaceBook Chrome Extensionp</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="outline-light" style={styles.overlayStyle} onClick={handleShow} ></Button>
            </Card.Body>
          </Card>
        </div> */}

        <h2 className="lead" style={{...styles.skillsSecondLine, paddingTop: "40px"}}> I didn't put all my personal project on Github since I only start using it about 3 years ago.</h2>
        <h2 className="lead" style={styles.skillsSecondLine}> But I still have many ideas want to be realized.</h2>

        <div className='container' style={{...styles.projectContainerStyle, paddingTop : "20px"}}>
          <Button href="https://github.com/Protactini" variant="secondary" size="lg" style={{fontSize: "20px",fontWeight: "bold",}}>
            Viste my Github <Github/>
          </Button>
        </div>
        
        
        
        <Modal show={show1} size="lg" onHide={() => setShow1(false)}>
          <Modal.Header closeButton>
            <Modal.Title>TimeSheet managment</Modal.Title>
          </Modal.Header>
          <Modal.Body  style={{...styles.projectContainerStyle, width:'100%', flexDirection :"column"}}>
            <Image fluid = 'true' src = {Project3Detail}></Image>
            <p style={{width: " 80%"}}>
              As it shown in the pic above, it is a web application is a time-sheet management system that allows employees to manage their weekly time sheets
            , upload or set default schedules, and modify their personal profile
            . The front-end of the application is built using React, which provides a modern and responsive user interface
            . The back-end of the application is built using a combination of Spring Security for single sign-on (SSO)
            , MongoDB for quick and easy data retrieval and manipulation, and Netflix Eureka for building microservices with a gateway and composite server.
            </p>
            {/* <p>
              The React-thunk library is used to handle asynchronous calls between the front-end and back-end
            , providing a seamless user experience. Employees can log in using their SSO credentials and view their time sheets
            , schedules, and profile information. They can modify their time sheets and schedules
            , upload new schedules, and update their profile information. The application provides an easy-to-use interface for managing time sheets
            , helping employees to stay organized and on track. The use of MongoDB ensures that data is stored securely and can be easily accessed and manipulated
            . The microservices architecture provides scalability and flexibility, allowing the application to be easily adapted to changing requirements
            . Overall, this web application provides a powerful and flexible solution for time-sheet management in a modern workplace.
            </p> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow1(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="lg"  show={show2} onHide={() => setShow2(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Raspberry Pi IoT-Based Motion Detection and Video Analysis System</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{...styles.projectContainerStyle, width:'100%', flexDirection :"column"}}>
          <p style={{width: " 80%"}}>
            <p>
              This project aimed to develop an IoT-enabled motion detection and video analysis system using a Raspberry Pi
            , Python programming language, and deep learning technologies
            . The system captures videos when a movement sensor is triggered and processes them for object detection, classification, and recognition.
            </p>

            <p>
              The core components of the project include:
            </p>

            <ul>
              <li>A Raspberry Pi setup with a motion sensor and a camera module to capture videos.</li>
              <li>A Python program running on the Raspberry Pi, which starts recording and saving videos locally upon the detection of movement.</li>
              <li>Integration of Darknet, a deep learning framework, for processing the captured videos locally on the Raspberry Pi
                . This enables the system to perform object detection, classification, and recognition in real-time.
              </li>
              <li> A video queue system that uploads the newest video to AWS S3 when there are four videos waiting to be processed on the Raspberry Pi.</li>
              <li>AWS Lambda code, which automatically generates a new instance to process the uploaded video using Darknet when a new video is uploaded to AWS S3.</li>
            </ul>

            <p>
              The project's outcome is a smart, IoT-based motion detection system capable of analyzing video content in real-time
              , utilizing the power of deep learning for object identification and classification
              . This system has potential applications in security, home automation, and various other fields that require efficient and automated video analysis.
            </p>
            
          </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow2(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal size="lg"  show={show3} onHide={() => setShow3(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Web Chat App</Modal.Title>
          </Modal.Header>
          <Modal.Body  style={{...styles.projectContainerStyle, width:'100%', flexDirection :"column"}}>
            <Image fluid = 'true' src = {Project3Detail}></Image>
            <p style={{width: " 80%"}}>
              This project involves the development of a real-time chat application built using web technologies to facilitate instant messaging between users
              . The chat application utilizes the following core technologies: Node.js, Express.js, Socket.IO, EJS and react-speech-recognition. User can use both text and voice as message
              . the voice with be translate into text using react-speech-recognition.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow3(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      
    );
  });
  
  export default Projects;