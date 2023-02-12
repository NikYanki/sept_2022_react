import React, {Component} from 'react';

class PostComponent extends Component{

    render() {
        const {id, title} = this.props.post ||{};
        return(
            <div>
                <div>id: {id}</div>
                <div>title: {title}</div>
            </div>
        )
    }
}

export {PostComponent}
