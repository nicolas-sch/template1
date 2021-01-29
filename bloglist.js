import React from 'react';
import fetch from 'isomorphic-fetch';

class BlogList extends React.Component {
    constructor(){
        super()
        this.state={
            headers: []
        }
    }

    componentDidMount(){
    fetch('http://localhost:1337/headers').then((response) => {
        if(response.status >= 400){
            throw new Error("Bad Response From Server")
        }
        return response.json();
    }).then((headers) => {
        this.setState({headers: headers});
    })
    }
    render(){
        return(
            <div>
                {
                    this.state.headers.map(({id, headertitle, headercontent, headerimage}) => (
                    <div className="container">
                        <h1>{headertitle}</h1>
                        <p>{headercontent}</p>
                        <img width="100%" alt="imagem" src={`http://localhost:1337${headerimage.formats.medium.url}`}/>
                    </div>

                    ))
                }
            </div>
        )
    }
}

export default BlogList;