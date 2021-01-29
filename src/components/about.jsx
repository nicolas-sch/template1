import React from 'react'

export class about extends React.Component {
  constructor(){
    super()
    this.state={
        sobres: []
    }
  }

  componentDidMount(){
  fetch('http://localhost:1337/sobres').then((response) => {
      if(response.status >= 400){
          throw new Error("Bad Response From Server")
      }
      return response.json();
  }).then((sobres) => {
      this.setState({sobres: sobres});
  })
  }
  render() {
    return (
        <div id="about">
        <div className="container">
                  {
                    this.state.sobres.map(({id, sobretitle, sobrecontent, sobreimagem, sobresubtitle, item1, item2, item3, item4, item5, item6, item7, item8}) => (
                      <div>
                        <div className="row">
                          <div className="col-xs-12 col-md-6"> <img src={`http://localhost:1337${sobreimagem.formats.small.url}`} className="img-responsive" alt=""/> </div>
                          <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                          <h2>{sobretitle}</h2>
                          <p>{sobrecontent}</p>
                          <h3>{sobresubtitle}</h3>
                          <div className="list-style">
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                              <ul>
                                <li>{item1}</li>
                                <li>{item2}</li>
                                <li>{item3}</li>
                                <li>{item4}</li>
                              </ul>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-xs-12">
                              <ul>
                                <li>{item5}</li>
                                <li>{item6}</li>
                                <li>{item7}</li>
                                <li>{item8}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                      ))
                  }
        </div>
      </div>
    )
  }
}

export default about
