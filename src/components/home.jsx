import Nav from "react-bootstrap/esm/Nav";
import Row from "react-bootstrap/esm/Row";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import cvPhoto from "../assets/cvphoto.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  useEffect(() => {
    const mainSubHeader = document.getElementById("mainSubHeader");
    const aboutHeader = document.getElementById("aboutHeader");

    const originalMainSubHeaderText = mainSubHeader.textContent;
    const originalAboutHeaderText = "<About Me>";
    const newAboutHeaderText = "<Hover My Photo for Contact Info>";

    let isReplacingMainSubHeader = true;
    let isReplacingAboutHeader = true;
    let isReversingAboutHeader = false;
    let currentMainSubHeaderIndex = 0;
    let currentAboutHeaderIndex = 0;
    let mainSubHeaderInterval;
    let aboutHeaderInterval;

    // Animation for mainSubHeader
    const startMainSubHeaderAnimation = () => {
      mainSubHeaderInterval = setInterval(() => {
        if (mainSubHeader) {
          const mainSubHeaderTextArray = mainSubHeader.textContent.split("");

          if (isReplacingMainSubHeader) {
            // Replace one letter at a time with random ASCII
            mainSubHeaderTextArray[currentMainSubHeaderIndex] =
              String.fromCharCode(
                33 + Math.floor(Math.random() * 94) // ASCII range 33-126
              );
            mainSubHeader.textContent = mainSubHeaderTextArray.join("");

            currentMainSubHeaderIndex++;
            if (currentMainSubHeaderIndex >= originalMainSubHeaderText.length) {
              isReplacingMainSubHeader = false; // Switch to restoring
              currentMainSubHeaderIndex = 0; // Reset index
            }
          } else {
            // Restore one letter at a time to the original text
            mainSubHeaderTextArray[currentMainSubHeaderIndex] =
              originalMainSubHeaderText[currentMainSubHeaderIndex];
            mainSubHeader.textContent = mainSubHeaderTextArray.join("");

            currentMainSubHeaderIndex++;
            if (currentMainSubHeaderIndex >= originalMainSubHeaderText.length) {
              isReplacingMainSubHeader = true; // Switch back to replacing
              currentMainSubHeaderIndex = 0; // Reset index
            }
          }
        }
      }, 100); // Adjust speed as needed
    };

    // Animation for aboutHeader
    const startAboutHeaderAnimation = () => {
      aboutHeaderInterval = setInterval(() => {
        if (aboutHeader) {
          const aboutHeaderTextArray = aboutHeader.textContent.split("");

          if (isReplacingAboutHeader) {
            aboutHeaderTextArray[currentAboutHeaderIndex] =
              newAboutHeaderText[currentAboutHeaderIndex];
            aboutHeader.textContent = aboutHeaderTextArray.join("");

            currentAboutHeaderIndex++;
            if (currentAboutHeaderIndex >= newAboutHeaderText.length) {
              isReplacingAboutHeader = false; // Stop replacing
              isReversingAboutHeader = true; // Start reversing
              currentAboutHeaderIndex = newAboutHeaderText.length - 1; // Start from the end
              clearInterval(aboutHeaderInterval); // Pause before reversing
              setTimeout(() => startAboutHeaderAnimation(), 1000); // Wait 1 second before reversing
            }
          } else if (isReversingAboutHeader) {
            aboutHeaderTextArray[currentAboutHeaderIndex] =
              originalAboutHeaderText[currentAboutHeaderIndex];
            aboutHeader.textContent = aboutHeaderTextArray.join("");

            currentAboutHeaderIndex--;
            if (currentAboutHeaderIndex < 0) {
              isReversingAboutHeader = false; // Stop reversing
              isReplacingAboutHeader = true; // Start replacing again
              currentAboutHeaderIndex = 0; // Reset index
              clearInterval(aboutHeaderInterval); // Pause before restarting
              setTimeout(() => startAboutHeaderAnimation(), 1000); // Wait 1 second before restarting
            }
          }
        }
      }, 100); // Adjust speed as needed
    };

    // Start animations with individual timeouts
    setTimeout(() => startMainSubHeaderAnimation(), 500); // Start mainSubHeader animation after 500ms
    setTimeout(() => startAboutHeaderAnimation(), 1000); // Start aboutHeader animation after 1 second

    return () => {
      clearInterval(mainSubHeaderInterval); // Cleanup mainSubHeader interval
      clearInterval(aboutHeaderInterval); // Cleanup aboutHeader interval
    };
  }, []);

  return (
    <div>
      {/* Website Header */}
      <div>
        <div>
          <h1 className="mainHeader">
            {"{ "}René Vorster{" }"}
          </h1>
          <button
            className="darkModeToggle"
            onClick={toggleDarkMode}
            style={{
              margin: "20px",
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: isDarkMode ? "#ffffff" : "#121212",
              color: isDarkMode ? "#121212" : "#ffffff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=5Yjf1lCjbLsy&format=png&color=000000"
              width={25}
              height={25}
            ></img>
          </button>
          <p id="mainSubHeader" className="mainSubHeader">
            // Junior Full Stack Web Developer
          </p>
        </div>
        <Navbar className="navbar" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="#home">{"{R.V}"}</Navbar.Brand>
              {/* <Nav.Link href="#aboutSection">Projects</Nav.Link>
              <Nav.Link href="#contactSection">Contact</Nav.Link> */}
            </Nav>
            <div className="navbar-images">
              <img
                src="https://img.icons8.com/color/512/javascript.png"
                width={25}
                height={25}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                width={25}
                height={25}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
                width={25}
                height={25}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
                width={25}
                height={25}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                width={25}
                height={25}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
                width={25}
                height={25}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                width={25}
                height={25}
              ></img>
              <img
                src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                width={25}
                height={25}
              ></img>
            </div>
          </Container>
        </Navbar>
      </div>

      <div className="aboutSection sectionSharedProps">
        <hr></hr>
        <h2 id="aboutHeader">
          {"<"}About Me{">"}
        </h2>
        <div className="aboutContent">
          <p>
            /* Motivated career-changer with a 9-year background in advertising.
            I recently completed a Full Stack Web Development bootcamp but have
            always loved problem-solving and coding, having self-taught C# for
            Unity, and Unreal Engine over the years. I am committed to
            leveraging strong analytical and communication capability from the
            advertising sector to excel in collaborative web development
            environments. Eager to apply adaptability and problem-solving
            abilities, having gained proficiency in JavaScript, HTML, CSS,
            React, Node, Express, MongoDB, Mongoose, and PostgreSQL. */
          </p>
          <div className="aboutPhotoContainer">
            <div className="aboutPhotoInner">
              {/* Front side (photo) */}
              <div className="aboutPhotoFront">
                <img
                  src={cvPhoto}
                  className="aboutPhoto"
                  width={250}
                  height={290}
                  alt="About Me"
                />
              </div>
              {/* Back side (links) */}
              <div className="aboutPhotoBack">
                <ul>
                  <li>
                    <a
                      href="https://github.com/ReneVorsterCode"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rene-vorster-b54981b6/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:renevorster121@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email Me
                    </a>
                  </li>
                  I am currently located in Cape Town, South Africa
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>

      <h3 className="projectSectionHeader">
        {"<"}Project Showcase{">"}
      </h3>
      <div className="projectSection sectionSharedProps">
        <Row>
          <Card
            className="projectCard"
            style={{ width: "18rem" }}
            bg={isDarkMode ? "dark" : "light"}
            text={isDarkMode ? "white" : "dark"}
            border={isDarkMode ? "info" : "primary"}
          >
            <Card.Body>
              <Card.Title>JWT Auth Todo</Card.Title>
              <Card.Text>
                A todo app that allows user registration, login, and utilises
                JWT as middleware to authenticate user CRUD actions for their
                set of todo-list items. Hosted on AWS EC2 instance.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  window.open(
                    "https://github.com/ReneVorsterCode/fullstack-todo",
                    "_blank"
                  )
                }
              >
                View GitHub
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  window.open("https://todoapp.renev-dev.site/", "_blank")
                }
              >
                Test Project
              </Button>
              <Card.Subtitle>
                <hr></hr>
                <div
                  className="techStackBox"
                  style={{
                    backgroundColor: isDarkMode ? "#65d1fc" : "transparent", // Gray box in dark mode
                    borderRadius: "5px", // Optional: Rounded corners
                    padding: "10px", // Optional: Add padding for spacing
                  }}
                >
                  <i>Tech Stack: </i>
                  <img
                    src="https://img.icons8.com/color/512/javascript.png"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                </div>
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card
            className="projectCard"
            style={{ width: "18rem" }}
            bg={isDarkMode ? "dark" : "light"}
            text={isDarkMode ? "white" : "dark"}
            border={isDarkMode ? "info" : "primary"}
          >
            <Card.Body>
              <Card.Title>iTunes Media Library Manager</Card.Title>
              <Card.Text>
                A project focused on API interaction that allows users to
                register and create a favourites list from the iTunes Media
                Library. Hosted on AWS EC2 instance.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  window.open(
                    "https://github.com/ReneVorsterCode/itunes-media-search",
                    "_blank"
                  )
                }
              >
                View GitHub
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  window.open("https://itunesapp.renev-dev.site/", "_blank")
                }
              >
                Test Project
              </Button>
              <Card.Subtitle>
                <hr></hr>
                <div
                  className="techStackBox"
                  style={{
                    backgroundColor: isDarkMode ? "#65d1fc" : "transparent", // Gray box in dark mode
                    borderRadius: "5px", // Optional: Rounded corners
                    padding: "10px", // Optional: Add padding for spacing
                  }}
                >
                  <i>Tech Stack: </i>
                  <img
                    src="https://img.icons8.com/color/512/javascript.png"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                </div>
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card
            className="projectCard"
            style={{ width: "18rem" }}
            bg={isDarkMode ? "dark" : "light"}
            text={isDarkMode ? "white" : "dark"}
            border={isDarkMode ? "info" : "primary"}
          >
            <Card.Body>
              <Card.Title>Multi-Page Storefront</Card.Title>
              <Card.Text>
                Pure frontend React.js app that utilises BrowserRouter and
                Redux.js to create a multi-page storefront where users can
                register and log in, as well as browse a storefront and
                add/remove items to/from a cart.
              </Card.Text>
              <Button
                variant="primary"
                onClick={() =>
                  window.open(
                    "https://github.com/ReneVorsterCode/GalleryExpedio.com",
                    "_blank"
                  )
                }
              >
                View GitHub
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  window.open(
                    "https://galleryexpedio-com.onrender.com",
                    "_blank"
                  )
                }
              >
                Test Project
              </Button>
              <Card.Subtitle>
                <hr></hr>
                <div
                  className="techStackBox"
                  style={{
                    backgroundColor: isDarkMode ? "#65d1fc" : "transparent", // Gray box in dark mode
                    borderRadius: "5px", // Optional: Rounded corners
                    padding: "10px", // Optional: Add padding for spacing
                  }}
                >
                  <i>Tech Stack: </i>
                  <img
                    src="https://img.icons8.com/color/512/javascript.png"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                </div>
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card
            className="projectCard"
            style={{ width: "18rem" }}
            bg={isDarkMode ? "dark" : "light"}
            text={isDarkMode ? "white" : "dark"}
            border={isDarkMode ? "info" : "primary"}
          >
            <Card.Body>
              <Card.Title>DMTools</Card.Title>
              <Card.Subtitle
                className={`mb-2 ${isDarkMode ? "text-white" : "text-muted"}`}
              >
                <i>
                  Please note this is an in-progress hobby project and as such I
                  will likely not make the code public.
                </i>
              </Card.Subtitle>
              <Card.Text>
                A tool I built for myself to help me run my Dungeons & Dragons
                games. Uses a relational database and local storage.
              </Card.Text>
              <Button variant="danger">In Progress</Button>
              <Card.Subtitle>
                <hr></hr>
                <div
                  className="techStackBox"
                  style={{
                    backgroundColor: isDarkMode ? "#65d1fc" : "transparent", // Gray box in dark mode
                    borderRadius: "5px", // Optional: Rounded corners
                    padding: "10px", // Optional: Add padding for spacing
                  }}
                >
                  <i>Tech Stack: </i>
                  <img
                    src="https://img.icons8.com/color/512/javascript.png"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                  <img
                    src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                    width={25}
                    height={25}
                  ></img>
                </div>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <hr></hr>
    </div>
  );
}
