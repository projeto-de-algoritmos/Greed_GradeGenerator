import { Button, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import check from "../img/check.png";
import x from "../img/x.png";

const CardActivity = (props) => {
  return (
    <Card bg={props.variant}>
      <Card.Header as="h5">{props.header}</Card.Header>
      <Card.Body>
        <div class="container mb-3 center">
          <div class="row w-100 center">
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
        <div class="center">
          {props.variant === "light" ? (
            <Button
              variant="primary"
              onClick={() => props.changeColor("success")}
            >
              <Image padding="0" src={check} width="250px" alt="check"></Image>
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => props.changeColor("light")}
            >
              <Image padding="0" src={x} width="50px" alt="check"></Image>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardActivity;
