import React from "react";

export class testimonials extends React.Component {
  constructor(){
    super()
    this.state={
        depoimentos: []
    }
  }

  componentDidMount(){
  fetch('http://localhost:1337/depoimentos').then((response) => {
      if(response.status >= 400){
          throw new Error("Bad Response From Server")
      }
      return response.json();
  }).then((depoimentos) => {
      this.setState({depoimentos: depoimentos});
  })
  }
  render() {
    return (
      <div id="testimonials">
        {
          this.state.depoimentos.map(({id, depoimentostitle, depoimentostext1, depoimentostext2, depoimentostext3, depoimentostext4, depoimentostext5, depoimentostext6,
          depoimentosnome1, depoimentosnome2, depoimentosnome3, depoimentosnome4, depoimentosnome5, depoimentosnome6, 
          depoimentosimage1, depoimentosimage2, depoimentosimage3, depoimentosimage4, depoimentosimage5, depoimentosimage6}) => (
            <div>
              <div className="container">
                <div className="section-title text-center">
                  <h2>{depoimentostitle}</h2>
                </div>
                <div className="row">
                        <div className="testimonial-container">
                          <div className="testimonial">
                            <div className="testimonial-image">
                              {" "}
                              <img src={`http://localhost:1337${depoimentosimage1.formats.thumbnail.url}`} alt="" />{" "}
                            </div>
                            <div className="testimonial-content">
                              <p>{depoimentostext1}</p>
                              <div className="testimonial-meta"> - {depoimentosnome1} </div>
                            </div>
                          </div>
                          <div className="testimonial">
                            <div className="testimonial-image">
                              {" "}
                              <img src={`http://localhost:1337${depoimentosimage2.formats.thumbnail.url}`} alt="" />{" "}
                            </div>
                            <div className="testimonial-content">
                              <p>{depoimentostext2}</p>
                              <div className="testimonial-meta"> - {depoimentosnome2} </div>
                            </div>
                          </div>
                          <div className="testimonial">
                            <div className="testimonial-image">
                              {" "}
                              <img src={`http://localhost:1337${depoimentosimage3.formats.thumbnail.url}`} alt="" />{" "}
                            </div>
                            <div className="testimonial-content">
                              <p>{depoimentostext3}</p>
                              <div className="testimonial-meta"> - {depoimentosnome3} </div>
                            </div>
                          </div>
                          <div className="testimonial">
                            <div className="testimonial-image">
                              {" "}
                              <img src={`http://localhost:1337${depoimentosimage4.formats.thumbnail.url}`} alt="" />{" "}
                            </div>
                            <div className="testimonial-content">
                              <p>{depoimentostext4}</p>
                              <div className="testimonial-meta"> - {depoimentosnome4} </div>
                            </div>
                          </div>
                          <div className="testimonial">
                            <div className="testimonial-image">
                              {" "}
                              <img src={`http://localhost:1337${depoimentosimage5.formats.thumbnail.url}`} alt="" />{" "}
                            </div>
                            <div className="testimonial-content">
                              <p>{depoimentostext5}</p>
                              <div className="testimonial-meta"> - {depoimentosnome5} </div>
                            </div>
                          </div>
                          <div className="testimonial">
                            <div className="testimonial-image">
                              {" "}
                              <img src={`http://localhost:1337${depoimentosimage6.formats.thumbnail.url}`} alt="" />{" "}
                            </div>
                            <div className="testimonial-content">
                              <p>{depoimentostext6}</p>
                              <div className="testimonial-meta"> - {depoimentosnome6} </div>
                            </div>
                          </div>
                        </div>
                </div>
              </div>
            </div>
            ))
        }
        
      </div>
    );
  }
}

export default testimonials;
