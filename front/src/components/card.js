import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardActivity = (props) => {
    return (
        <Card>
            <Card.Header as="h5">{props.header}</Card.Header>
            <Card.Body>
                <Card.Title> Deadline: {props.deadline}</Card.Title>
                <div class="container mb-3" >
                    <div class="row">
                        <div class="col">
                            <Card.Text>
                                <b> Dias de duração:</b> {props.description}
                            </Card.Text>
                        </div>
                        {props.lateness && <div class="col">
                            <Card.Text>
                                <b> Tempo de atraso: </b>{props.lateness}
                            </Card.Text>
                        </div>}
                    </div>
                </div>
                <div class="center">
                    <Button variant="primary"> Feito! </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardActivity;