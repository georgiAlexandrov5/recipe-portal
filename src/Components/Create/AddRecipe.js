import { Component } from 'react';
import { Form, Button, Col, Spinner, Alert } from 'react-bootstrap';
import './AddRecipe.css';
import background1 from '../../public/background1.jpg';
import firebase from "../../firebase/firebase";
import {v4 as uuidv4} from "uuid";




class  AddRecipe extends Component {


    

    constructor(props) {
        super(props);
        this.state = { title: "", time: "", description: "", author: props.username,  imgUrl: "", ingredients: ""};
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
    }
    onChangeHandler(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    
    };

    addRecipe(newRecipe){
        const ref = firebase.firestore().collection('recipes');
        newRecipe.preventDefault()
        newRecipe = {...this.state};
        console.log(newRecipe)
        ref.doc(newRecipe.id = uuidv4())
        .set(newRecipe)
        .catch((err) => {
            console.log(err)
        })

        this.props.history.push('/');

        console.log(newRecipe);
    }

    render() {
        return (
            <>
                <div className='container' style={{ backgroundImage: `url(${background1})`,backgroundSize: 'cover' }}>
                    <h1 className="heading">Add a Recipe</h1>
                    <Form onSubmit={this.addRecipe}>
                        {this.state.alertShow &&
                            <Alert variant="danger" onClose={() => this.setState({ alertShow: false })} dismissible>
                                <p>
                                    {this.state.errors}
                                </p>
                            </Alert>
                        }
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" name="title" required onChange={this.onChangeHandler} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="number" step="1" placeholder="Time" name="time" required onChange={this.onChangeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridDescription.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" required onChange={this.onChangeHandler} />
                        </Form.Group>

                        <Form.Group controlId="formGridDescription.ControlTextarea1">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control as="textarea" rows={3} name="ingredients" required onChange={this.onChangeHandler} />
                        </Form.Group>

                        <Form.Row>
                                    

                            <Form.Group as={Col} controlId="formGridImage" >
                                <Form.Label>Image</Form.Label>
                                <Form.Control name="imgUrl" type="text" required onChange={this.onChangeHandler} />
                            </Form.Group>
                        </Form.Row>
                        {this.state.loading ?
                            <Button className="col-lg-12" variant="dark" disabled >
                                Please wait... <Spinner animation="border" />
                            </Button>
                            :
                            <Button className="col-lg-12" variant="dark" type="submit">Add Recipe</Button>
                        }
                    </Form>
                </div>
            </>
        )
    }
}



export default AddRecipe;