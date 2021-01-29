import React from "react";
import fetch from 'isomorphic-fetch';

export class Header extends React.Component {
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
  render() {
    return (
      <div>
        {
          this.state.headers.map(({id, headertitle, headercontent, headerimage}) => (
            <div>
                        <header id="header">
                          <div className="intro">
                            <div className="overlay">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-8 col-md-offset-2 intro-text">
                                    <h1>
                                      {headertitle}
                                      <span></span>
                                    </h1>
                                    <p>
                                      {headercontent}
                                    </p>
                                    <a
                                      href="#about"
                                      className="btn btn-custom btn-lg page-scroll"
                                    >
                                      Saiba Mais
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </header>
                {/* <img width="100%" alt="imagem" src={`http://localhost:1337${headerimage.formats.medium.url}`}/> */}
            </div>

            ))
        }
      </div>
    );
  }
}

export default Header;
