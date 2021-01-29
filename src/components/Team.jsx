import React from "react";

export class Team extends React.Component {
  constructor(){
    super()
    this.state={
        equipes: []
    }
  }

  componentDidMount(){
  fetch('http://localhost:1337/equipes').then((response) => {
      if(response.status >= 400){
          throw new Error("Bad Response From Server")
      }
      return response.json();
  }).then((equipes) => {
      this.setState({equipes: equipes});
  })
  }
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          {
            this.state.equipes.map(({id, equipetitle, equipecontent, equipenome1, equipenome2, equipenome3, equipenome4,
            equipecargo1, equipecargo2, equipecargo3, equipecargo4, equipeimagem1, equipeimagem2, equipeimagem3, equipeimagem4}) => (
              <div>
                  <div className="col-md-8 col-md-offset-2 section-title">
                    <h2>Nosso time</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                      dapibus leonec.
                    </p>
                  </div>
                  <div id="row">
                          <div className="col-md-3 col-sm-6 team">
                            <div className="thumbnail">
                              <img src={`http://localhost:1337${equipeimagem1.formats.thumbnail.url}`} alt="..." className="team-img" />
                              <div className="caption">
                                <h4>{equipenome1}</h4>
                                <p>{equipecargo1}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 team">
                            <div className="thumbnail">
                              <img src={`http://localhost:1337${equipeimagem2.formats.thumbnail.url}`} alt="..." className="team-img" />
                              <div className="caption">
                                <h4>{equipenome2}</h4>
                                <p>{equipecargo2}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 team">
                            <div className="thumbnail">
                              <img src={`http://localhost:1337${equipeimagem3.formats.thumbnail.url}`} alt="..." className="team-img" />
                              <div className="caption">
                                <h4>{equipenome3}</h4>
                                <p>{equipecargo3}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6 team">
                            <div className="thumbnail">
                              <img src={`http://localhost:1337${equipeimagem4.formats.thumbnail.url}`} alt="..." className="team-img" />
                              <div className="caption">
                                <h4>{equipenome4}</h4>
                                <p>{equipecargo4}</p>
                              </div>
                            </div>
                          </div>
                  </div>
              </div>
              ))
          }
        </div>
      </div>
    );
  }
}

export default Team;
