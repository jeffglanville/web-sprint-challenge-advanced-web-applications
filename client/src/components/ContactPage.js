import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

class ContactPage extends React.Component {
    state = {
        visitor: {
            name: "",
            email: "",
            comments: ""
        }
    };

    handleChange = e => {
        this.setState({
            visitor: {
                ...this.state.visitor,
                [e.target.name]: e.target.value
            }
        });
    };

    render(){
        return (
            <div>
            <h1>Visitor Information:</h1>
            <form>
                <input
                    type="text"
                    name="name"
                    value={this.state.visitor.name}
                    placeholder="Enter Your Name"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="email"
                    value={this.state.visitor.email}
                    placeholder="Enter Your Email"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="comments"
                    value={this.state.visitor.comment}
                    placeholder="Enter Your Comments"
                    onChange={this.handleChange}
                />
            </form>
            <button>Submit</button>
            </div>
        )
    }




};

export default ContactPage;