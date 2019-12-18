import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postUser } from '../Redux/User/UserActions'
class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            email: ''
        }
    }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
       this.props.postUser();
    }



    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <label>
                        Id:
            <input type="text" name="id" value={this.state.id} onChange={this.ChangeHandler} />
                    </label>

                    <label>
                        Name:
            <input type="text" name="Name" value={this.state.name} onChange={this.ChangeHandler} />
                    </label>

                    <label>
                        Email:
            <input type="text" name="email" value={this.state.email} onChange={this.ChangeHandler} />
                    </label>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }

}
const mapDispatchToProps = dispatch => {
    return {
        postUser: () => dispatch(postUser(this.state))
    }
}

export default connect(mapDispatchToProps)(PostForm)
