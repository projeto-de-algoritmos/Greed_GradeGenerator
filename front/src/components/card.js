import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import check from "../img/check.png";
import x from "../img/x.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardActivity = (props) => {

  return (
    <Card bg={props.variant}>
      <Card.Header as="h5"> 
        <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="0">
            <Row>
          <b style={{color:"orange"}} class="m-3">{props.header} </b>
          <p className="m-3"> {props.obj.name}</p>
          </Row>
          </Col>
          <Col xs lg="2"></Col>
          <Col xs lg="2">
          <div>
          {props.obj.color === "light" ? (
            <Button
              variant="outline-light"
              onClick={() => props.changeColor(props.obj, props.array)}
            >
              <Image padding="0" src={check} width="40px" alt="check"></Image>
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() => props.changeColor(props.obj, props.array)}
            >
              <Image padding="0" src={x} width="40px" alt="check"></Image>
            </Button>
          )}
        </div>
          </Col>
        </Row>
      </Container>

</Card.Header>
      <Card.Body>
        <div class="container mb-3 center">
          <div class="row w-100 center mb-3">
            <div class="col">
              {" "}
              <Card.Text>
                {" "}
                <b> Deadline: </b> {props.deadline}
              </Card.Text>
            </div>

            <div class="col center">
              <Card.Text>
                <b> Dias de duração:</b> {props.description}
              </Card.Text>
            </div>
            {props.lateness && props.lateness !== 0 ? (
              <div class="col">
                <Card.Text>
                  <b> Tempo de atraso: </b>
                  {props.lateness}
                </Card.Text>
              </div>
            ) : (
              <> </>
            )}
          </div>
         
         
        </div>
        {props.end&&  <div >
              <div class="center m-3">
              <Card.Text>
                <b> Término da Atividade:</b> {props.end}
              </Card.Text>
              </div>
          </div>}
      </Card.Body>
    </Card>
  );
};

export default CardActivity;
