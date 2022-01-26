import React from 'react';



class Body extends React.Component {

    render() {
        console.log("Props", this.props)
        return (
            <React.Fragment>

                <div class="container-fluid m-0">
                    <div class="row">

                        <div class="col-md-12 mb-3">
                            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                </ol>
                            
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="Images/2040033.webp" className="d-block w-100" alt=".." />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>First slide label</h5>
                                                <p>Some representative placeholder content for the first slide.</p>
                                            </div>
                                    </div>
                                    <div class="carousel-item">
                                            <img src="Images/business-management-team.jpg" className="d-block w-100" alt="..."/>
                                                <div class="carousel-caption d-none d-md-block">
                                                    <h5>Second slide label</h5>
                                                    <p>Some representative placeholder content for the second slide.</p>
                                                </div>
                                    </div>
                                    <div class="carousel-item">
                                                <img src="Images/istockphoto-882193344-1024x1024.jpg" className="d-block w-100" alt="..."/>
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h5>Third slide label</h5>
                                                        <p>Some representative placeholder content for the third slide.</p>
                                                    </div>
                                    </div>
                                        
                                </div>    
                            
                            
                            </div>

                            
                        </div>

                    </div>
                </div>
                
                    <div className="row justify-content-center">
                        <div className="card-group">
                              <div className="card">
                                  <img src="Images/logo-paypal.png" alt="" className="img-top" width ="150px" />
                                  <div className="card-body">
                                      <h5 className="class-title">Paypal</h5>
                                      <p className="card-text">
                                          Paypal is a 
                                      </p>
                                  </div>
                                  </div>
                              <div className="card">
                                  <img src="Images/payment1.png" alt="" className="img-top" width ="150px" />
                                  <div className="card-body">
                                      <h5 className="class-title">Paypal</h5>
                                      <p className="card-text">
                                          Paypal is a 
                                      </p>
                                  </div>
                                  </div>
                              <div className="card"><img src="Images/payment2.png" alt="" className="img-top"width ="150px"  />
                              <div className="card-body">
                                      <h5 className="class-title">Paypal</h5>
                                      <p className="card-text">
                                          Paypal is a 
                                      </p>
                                  </div>
                              </div>
                        </div>
                    </div>
              
            </React.Fragment>


        );

    }
}

 export default Body;