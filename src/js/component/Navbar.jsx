import React from "react";
import PropTypes from 'prop-types';

const NavBar = (props) => {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>

    );
};

NavBar.propTypes = {
NavLeftLabel: PropTypes.string,
NavRightLabel1: PropTypes.string,
NavRightLabel2: PropTypes.string,
NavRightLabel3: PropTypes.string,
NavRightLabel4: PropTypes.string,

NavLink : PropTypes.link,


// NavLeftButton: PropTypes.string


};



ReactDOM.render(<NavBar 

    NavLeftLabel= "StarBootstrap"
    NavRightLabel1= "Home"
    NavRightLabel2= "About"
    NavRightLabel3= "Services"
    NavRightLabel4= "Contact"


/>, 
document.querySelector("#app"));