import React from "react";
import { User } from "../components/User";



class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: {}
        }
    }


    getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json()
        this.setState({ users })
    }

    componentDidMount() {
        this.getUsers()
    }

    getOneUser = (oneUser) => {
        this.setState({
            user: oneUser
        })
    }

    render() {
        return (
            <>
                <h1>users list</h1>

                <ul>
                    <li>id: {this.state.user.id}</li>
                    <li>name: {this.state.user.name}</li>
                    <li>username: {this.state.user.username}</li>
                    <li>email: {this.state.user.email}</li>
                    <li>website: {this.state.user.website}</li>
                </ul>


                <ul>
                    {this.state.users.map(user => <User userInfo={user} key={user.id} getOneUser={this.getOneUser} />)}
                </ul>
            </>
        )
    }
}

export default UsersPage;