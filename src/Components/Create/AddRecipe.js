import { Component } from 'react';
import { Form, Button, Col, Spinner } from 'react-bootstrap';
import './AddRecipe.css';
import background1 from '../../public/background1.jpg';
import firebase from "../../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { notifyError, notifySuccess } from "../../services/notificationHandler"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isAuth from "../../hoc/isAuth"







class AddRecipe extends Component {


    constructor(props) {
        super(props);
        this.state = { title: "", time: "", description: "", imgUrl: "", ingredients: [], alertShow: false, errors: [], likesCounter: 0 };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addRecipe = this.addRecipe.bind(this);
    }

    componentDidMount() {

    }


    onChangeHandler(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });

    };

    addRecipe(newRecipe) {
        const ref = firebase.firestore().collection('recipes');
        newRecipe.preventDefault()
        newRecipe = { ...this.state };

        newRecipe.ingredients = this.state.ingredients.split(",")
        console.log(newRecipe.ingredients);

        if (newRecipe.title.length < 4) {
            notifyError('Meal name should be at least 4 characters long.');
            return;
        }

        if (newRecipe.ingredients.length < 4) {
            notifyError('Ingredients should be at least 10 characters long.');
            return;
        }

        if (newRecipe.description.length < 10) {
            notifyError('Description should be at least 10 characters long.');
            return;
        }

        if (newRecipe.imgUrl.length < 1) {
            notifyError('Please enter an image url for this recipe');
            return;
        }




        ref.doc(newRecipe.id = uuidv4())
            .set(newRecipe)
            .catch((err) => {
                console.log(err)
            })

        notifySuccess('Recipe created successfully!');

        setTimeout(
            function () {
                this.props.history.push('/')
            }.bind(this),
            2000
        )
    }

    render() {
        return (
            <>

                <div className='container' style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover' }}>
                    <h1 className="heading">Add a Recipe</h1>
                    <Form onSubmit={this.addRecipe}>
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
                        <ToastContainer />

                    </Form>
                </div>
            </>
        )
    }
}



export default isAuth(AddRecipe);