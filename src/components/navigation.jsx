import React from "react";
import fetch from 'isomorphic-fetch';

export class Navigation extends React.Component {
  constructor(){
    super()
    this.state={
        navbars: []
    }
  }

  componentDidMount(){
  fetch('http://localhost:1337/navbars').then((response) => {
      if(response.status >= 400){
          throw new Error("Bad Response From Server")
      }
      return response.json();
  }).then((navbars) => {
      this.setState({navbars: navbars});
  })
  }
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Template 1
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            {
              this.state.navbars.map(({id, Button1, Button2, Button3, Button4, Button5, Button6}) => (
                <div>
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a href="#about" className="page-scroll">
                        {Button1}
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="page-scroll">
                        {Button2}
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="page-scroll">
                        {Button3}
                      </a>
                    </li>
                    <li>
                      <a href="#testimonials" className="page-scroll">
                        {Button4}
                      </a>
                    </li>
                    <li>
                      <a href="#team" className="page-scroll">
                        {Button5}
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="page-scroll">
                        {Button6}
                      </a>
                    </li>
                  </ul>

                </div>
    
                ))
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
