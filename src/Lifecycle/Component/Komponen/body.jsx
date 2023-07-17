import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./style.css";


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 'tesla',
            articles: []
        }
    }

    getData = () => {
        fetch('https://newsapi.org/v2/everything?q=' + this.state.input + '&from=2023-06-17&sortBy=publishedAt&apiKey=468dc73a648c440292da56bf25aceb95')
            .then(response => response.json())
            .then(response => {
                this.setState({ articles: response.articles })
            })
            .finally(() => document.querySelector('.loading').innerHTML = "");
    }

    componentDidMount() {
        this.getData(this.state.input)
    }

    // handleSubmit = (e) => {
    //     this.setState({ input: e.target.value })
    //     alert(this.state.input)
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.input);
        if (prevState.input !== this.state.input) {
            this.getData(this.state.input)
        }
    }
    render() {
        console.log(this.state.input);
        return (
            <Container style={{ marginTop: "40px" }}>
                <Row>
                    <Col>
                        <input type="text" className="myInput" onChange={e => this.setState({ input: e.target.value }, () => console.log(this.state.input))} placeholder="Search for names.."
                            title="Type in a name" />
                        {/* <button onClick={this.handleSubmit}>search</button> */}

                        <h1 style={{ display: "flex", justifyContent: "center" }}>Berita Hari Ini</h1>
                        <div className="loading">
                            <div className="loader2">Loading..</div>
                            <h4>{this.state.input}</h4>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {
                        this.state.articles && this.state.articles.map((m) => {
                            return <Col md={4}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={m.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{m.title}</Card.Title>
                                        <Card.Text>{m.description}</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    </Card.Body>
                                </Card>
                            </Col>
                        })}
                </Row>
            </Container>
        );
    }
}

export default Body;