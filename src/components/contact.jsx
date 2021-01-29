import React from "react";

export class Contact extends React.Component {
  constructor(){
    super()
    this.state={
        contatoes: []
    }
  }

  componentDidMount(){
  fetch('http://localhost:1337/contatoes').then((response) => {
      if(response.status >= 400){
          throw new Error("Bad Response From Server")
      }
      return response.json();
  }).then((contatoes) => {
      this.setState({contatoes: contatoes});
  })
  }
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            {
              this.state.contatoes.map(({id, contatotitle, contatocontent, endereco, telefone, email, facebookicon,
              facebooklink, twitterlink, youtubelink}) => (
                <div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="section-title">
                        <h2>{contatotitle}</h2>
                        <p>
                          {contatocontent}
                        </p>
                      </div>
                      <form name="sentMessage" id="contactForm" noValidate>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Nome"
                                required="required"
                              />
                              <p className="help-block text-danger"></p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                required="required"
                              />
                              <p className="help-block text-danger"></p>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows="4"
                            placeholder="Mensagem"
                            required
                          ></textarea>
                          <p className="help-block text-danger"></p>
                        </div>
                        <div id="success"></div>
                        <button type="submit" className="btn btn-custom btn-lg">
                          Enviar
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-3 col-md-offset-1 contact-info">
                    <div className="contact-item">
                      <h3>Contato</h3>
                      <p>
                        <span>
                          <i className="fa fa-map-marker"></i> Endereço
                        </span>
                        {endereco}
                      </p>
                    </div>
                    <div className="contact-item">
                      <p>
                        <span>
                          <i className="fa fa-phone"></i> Telefone
                        </span>{" "}
                        {telefone}
                      </p>
                    </div>
                    <div className="contact-item">
                      <p>
                        <span>
                          <i className="fa fa-envelope-o"></i> Email
                        </span>{" "}
                        {email}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="social">
                        <ul>
                          <li>
                            <a href={facebooklink} target="_blank">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href={twitterlink} target="_blank">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href={youtubelink} target="_blank">
                              <i className="fa fa-youtube"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Landing Page Template 1. Design by{" "}
              <a href="https://www.globalad.com.br" rel="nofollow" target="_blank">
                Global AD
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
