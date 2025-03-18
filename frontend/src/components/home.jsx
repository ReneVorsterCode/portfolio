import Nav from "react-bootstrap/esm/Nav";
import Row from "react-bootstrap/esm/Row";
import Navbar from "react-bootstrap/esm/Navbar";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

export default function Home() {
  return (
    <div>
      {/* Website Header */}
      <div>
        <div>
          <h1 className="mainHeader">
            {"{ "}René Vorster{" }"}
          </h1>
          <p className="mainSubHeader">// Junior Full Stack Web Developer</p>
        </div>
        <Navbar className="navbar" bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="#home">{"{R.V}"}</Navbar.Brand>
              <Nav.Link href="#aboutSection">Projects</Nav.Link>
              <Nav.Link href="#contactSection">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <div className="aboutSection sectionSharedProps">
        <hr></hr>
        <h2>
          {"<"}About Me{">"}
        </h2>
        <p>
          /* Motivated career-changer with a 9-year background in advertising. I
          recently completed a Full Stack Web Development bootcamp but have
          always loved problem-solving and coding, having self-taught C# for
          Unity, and Unreal Engine over the years. I am committed to leveraging
          strong analytical and communication capability from the advertising
          sector to excel in collaborative web development environments. Eager
          to apply adaptability and problem-solving abilities, having gained
          proficiency in JavaScript, HTML, CSS, React, Node, Express, MongoDB,
          Mongoose, and PostgreSQL. */
        </p>
        <hr></hr>
      </div>

      <h3 className="projectSectionHeader">
        {"<"}Project Showcase{">"}
      </h3>
      <div className="projectSection sectionSharedProps">
        <Row>
          <Card className="projectCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>JWT Auth Todo</Card.Title>
              <Card.Text>
                A todo app that allows user registration, login, and utilises
                JWT as middleware to authenticate user CRUD actions for their
                set of todo-list items.
              </Card.Text>
              <Button variant="primary">View GitHub</Button>
              <Button variant="primary">Test Project</Button>
              <Card.Subtitle>
                <hr></hr>
                <i>MERN Stack: </i>
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
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="projectCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>iTunes Media Library Manager</Card.Title>
              <Card.Text>
                A project focused on API interaction that allows users to
                register and create a favourites list from the iTunes Media
                Library.
              </Card.Text>
              <Button variant="primary">View GitHub</Button>
              <Button variant="primary">Test Project</Button>
              <Card.Subtitle>
                <hr></hr>
                <i>MERN Stack: </i>
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
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="projectCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Multi-Page Storefront</Card.Title>
              <Card.Text>
                Pure frontend React.js app that utilises BrowserRouter and
                Redux.js to create a multi-page storefront where users can
                register and log in, as well as browse a storefront and
                add/remove items to/from a cart.
              </Card.Text>
              <Button variant="primary">View GitHub</Button>
              <Button variant="primary">Test Project</Button>
              <Card.Subtitle>
                <hr></hr>
                <i>Frontend Only: </i>
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
              </Card.Subtitle>
            </Card.Body>
          </Card>

          <Card className="projectCard" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>DMTools</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <i>Please note this is an in-progress hobby project</i>
              </Card.Subtitle>
              <Card.Text>
                A tool I built for myself to help me run my Dungeons & Dragons
                games. Uses a relational database and local storage.
              </Card.Text>
              <Button variant="primary">View GitHub</Button>
              <Button variant="primary">Test Project</Button>
              <Card.Subtitle>
                <hr></hr>
                <i>PERN Stack: </i>
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
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Row>
      </div>

      <hr></hr>
      <div className="contactSection sectionSharedProps">
        <h2>
          {"<"}Contact Information{">"}
        </h2>
        <ls>
          <li>
            {" "}
            <a href="mailto:renevorster121@gmail.com">Email Me</a>
          </li>
          <li>I am currently located in Cape Town, South Africa.</li>
        </ls>
      </div>
    </div>
  );
}
