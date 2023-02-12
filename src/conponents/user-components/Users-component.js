import {Component} from "react";

import {UsersService} from "../../services";
import {UserComponent} from "../";

class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []}||{}
    }

    componentDidMount() {
        UsersService().then(({data}) => this.setState({users: [...data]}))
    }

    render() {
        return (
            <div>
                {this.state.users && this.state.users.map(user => <UserComponent key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {UsersComponent}
