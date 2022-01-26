import React from 'react';



class Footer extends React.Component {

    render() {


        return (

            <footer className="page-footer font-small unique-color-dark bg-info text-white" >

                <div style={{ backgroundColor: "green" }}>
                    <div className="container">


                        <div className="row py-4 d-flex align-items-center">


                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0">Get connected with us on social networks!</h6>
                            </div>





                        </div>


                    </div>
                </div>


                <div className="container text-center text-md-left mt-5">


                    <div className="row mt-3">


                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">


                            <h6 className="text-uppercase font-weight-bold">Company name</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width="60px" />
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consecteturadipisicing elit.
                            </p>
                        </div>











                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width="60px" />
                            <p>
                                <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!">Bootstrap Angular</a>
                            </p>

                        </div>





                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width="60px" />
                            <p>
                                <a href="#!">Your Account</a>
                            </p>
                            <p>
                                <a href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>


                        </div>



                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" width="60px" />
                            <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>

                        </div>


                    </div>



                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                    </div>




                </div>





            </footer>

        );

    }
}

export default Footer;