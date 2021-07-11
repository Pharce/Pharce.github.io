import './App.css';
import {Navbar } from "react-bootstrap";
import {Container, Row, Col, Image, CardDeck, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import personal from './static/personal.jpg';
import OTAPH from './static/volunteer/otaphv2.jfif';
import oppa from './static/volunteer/oppa.PNG';


function App() {
  return (
    <div className="App">
      <Container fluid>
        <Navbar expand="lg" variant="dark" bg="dark" >
          <Navbar.Brand href="#">Faris Gulamali, B.A., MS-1</Navbar.Brand>
        </Navbar>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={12} md={3}>
            <Image style = {{padding: "10px 10px 10px 10px"}}src={personal} rounded fluid/>
          </Col>
          <Col xs={12} md={9}>
            <div style={{fontSize: 18, textAlign: "left", padding: "10px 10px 10px 10px"}}>
            <p >
              Hello! I'm Faris, an MS-1 student at the Icahn School of Medicine at Mt. Sinai. 
              I obtained my Bachelors of Arts in Chemistry and Statistics from Williams College
              as a member of Phi Beta Kappa my junior year, 
              and was awarded the Harrold H Warren Prize in Chemistry, 
              the Kolzeka Prize in Statistics and 
              the Muriel B. Rowe Prize in rhetorical speaking. 
            </p>
            <p>
              I'm interested in the intersection of neuroscience, genetics and deep learning. 
              I have research experience in orthopedics, biophysical chemistry, systems neuroscience, 
              machine learning and computational genetics.
              I have posters in the Society for Neuroscience Conference, have a licensed orthopedic add-on and 
              have contributed articles to the news site InfoQ. 
            </p>
            <p>
              Clinically, I am a certified EMT and have worked as Spanish Translator at a pediatrics clinic. 
              Working as an EMT, I learned about the short-term effects of trauma as well as a the long-term 
              psychiatric effects following injury, and the decisions made during the few seconds, minutes 
              or days following a trauma can make a world of difference for the affected people. 
            </p>
            <p>
              Recreationally, I enjoy playing chess, tenor saxophone and travelling!
            </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <h2>Selected Volunteer Projects</h2>
        <CardDeck style={{ textAlign: "left", padding: "10px 10px 10px 10px"}}>
          <Card>
            <Card.Img variant="top" src={OTAPH} style={{padding: "10px 10px 10px 10px"}}/>
            <Card.Body>
              <Card.Title>OTAPH - Opposable Thumb Add-On for Prosthetic Hands</Card.Title>
              <Card.Text>
                With simple adjustments, this design permits the user to
                change the orientation of the thumb, permitting it to function as an
                opposable thumb, which current deisngs lack. The benefits of an opposable thumb 
                include more grip strength, increased mobility and visual appeal. Used by global 
                non-profit EnablingTheFuture in hand designs. 
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={oppa} style={{padding: "10px 10px 10px 10px"}}/>
            <Card.Body>
              <Card.Title>Opportunity Atlas API</Card.Title>
              <Card.Text>
                The Opportunity Atlas API uses opportunityatlas.org, a project developed by Raj Chetty,
                John Friedman and others at Harvard that maps county level opportunity levels measured
                in a generational longitdual country-wide survey. The Opportunity Atlas API combines
                data scraped from the opportunity atlas in conjunction with Niche.com and Greatschools.org 
                to calculate educational equity and quality associated with a student living in a certain
                area attending a certain school. 
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      <h2>Blogs and Posters</h2>
      <div style={{padding: "10px 10px 10px 10px"}}>
        <ol style={{ textAlign: "left"}}>
          <li>OpenAI Approximates Scaling Laws for Neural Language Models, <b>Faris Gulamali</b>, InfoQ, April 27, 2020.</li>
          <li>COVID-19 and AI: Virtual Conference at Stanford Discusses the Future, <b>Faris Gulamali</b>, InfoQ, April 07, 2020.</li>
          <li>AlphaFold algorithm predicts COVID 19 protein structures, <b>Faris Gulamali</b>, InfoQ, March 31, 2020.</li>
          <li>Tachykinin-1-expressing neurons in the parasubthalamic nucleus (PSTN) signal food availability and suppress food consumption, Olivia Barnhill, Jacob Sperber, <b>Faris Gulamali</b>, Jessica Kim, Theresa Legan, Matt Carter. Department of Biology, Program in Neuroscience, Williams College, Williamstown, MA, USA. November 13, 2019. Poster. Society for Neuroscience.</li>
          <li>Asprosin administration promotes wakefulness and blunts torpor bouts in mice, Erin M Cohn, Kene Odenigbo, Steven Swoap, <b>Faris Gulamali</b>, Matt Carter. Department of Biology, Program in Neuroscience, Williams College, Williamstown, MA, USA. November 13, 2019. Poster. Society for Neuroscience.</li>
          <li>Characterization of the Parasubthalamic Nucleus as an Appetite Suppression Center, Olivia Barnhill, Jacob Sperber, <b>Faris Gulamali</b>, Jessica Kim, Theresa Legan, Matt Carter. Williams College, Williamstown, MA, USA. July 19, 2020. Poster. Society for Study of Ingestive Behaviors.</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
