import {Component} from "react";

import {PostService} from "../../services";
import {PostComponent} from "../";

class PostsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: []}||{}
    }

    componentDidMount() {
        PostService().then(({data}) => this.setState({posts: [...data]}))
    }

    render() {
        return (
            <div>
                {this.state.posts && this.state.posts.map(post => <PostComponent key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {PostsComponent}
