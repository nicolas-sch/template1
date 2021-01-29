import React from "react";

export class Services extends React.Component {
  constructor(){
    super()
    this.state={
        servicos: []
    }
  }

  componentDidMount(){
  fetch('http://localhost:1337/servicos').then((response) => {
      if(response.status >= 400){
          throw new Error("Bad Response From Server")
      }
      return response.json();
  }).then((servicos) => {
      this.setState({servicos: servicos});
  })
  }
  render() {
    return (
      <div id="services" className="text-center">
        {
          this.state.servicos.map(({id, servicostitle, servicoscontent, servicoslisttitle1, servicoslisttitle2, servicoslisttitle3, servicoslisttitle4, servicoslisttitle5, servicoslisttitle6,
            servicoslisttext1, servicoslisttext2, servicoslisttext3, servicoslisttext4, servicoslisttext5, servicoslisttext6}) => (
            <div>
              
                <div className="container">
                  <div className="section-title">
                    <h2>{servicostitle}</h2>
                    <p>
                      {servicoscontent}
                    </p>
                  </div>
                  <div className="row">
                    {/* {this.props.data
                      ? this.props.data.map((d, i) => ( */}
                          <div   className="services-container">
                            {/* {" "} */}
                            {/* <i ></i> */}

                            <div className="service-desc">
                              <h3>{servicoslisttitle1}</h3>
                              <p>{servicoslisttext1}</p>
                            </div>
                            <div className="service-desc">
                              <h3>{servicoslisttitle2}</h3>
                              <p>{servicoslisttext2}</p>
                            </div>
                            <div className="service-desc">
                              <h3>{servicoslisttitle3}</h3>
                              <p>{servicoslisttext3}</p>
                            </div>
                            <div className="service-desc">
                              <h3>{servicoslisttitle4}</h3>
                              <p>{servicoslisttext4}</p>
                            </div>
                            <div className="service-desc">
                              <h3>{servicoslisttitle5}</h3>
                              <p>{servicoslisttext5}</p>
                            </div>
                            <div className="service-desc">
                              <h3>{servicoslisttitle6}</h3>
                              <p>{servicoslisttext6}</p>
                            </div>


                          </div>
                      {/* //   ))
                      // : "loading"} */}
                  </div>
                </div>
              

            </div>
            ))
        }
      </div>
    );
  }
}

export default Services;
