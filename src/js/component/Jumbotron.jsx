import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => {

    return (
        <div class="d-flex flex-column mb-3 align-items-center " style = {{width: '100vw'}} > 
        <h1>A Warm Welcome! </h1>
        <p style = {{width: '80vw'}}>
        A hero unit, also known as a jumbotron, is a large area at the beginning 
        of a webpage that draws the visitor's eye to the most important content or message. 
        It typically uses clear headings, bold text, and sometimes even images or videos to 
        make the information stand out from the rest of the page.
        </p>
        <button type="button" class="btn btn-primary">Call To Action!</button>
      </div>
    );
};

// Jumbotron.propTypes = {
// title: PropTypes.string,
// description: PropTypes.string,
// buttonText: PropTypes.string,
// };



export default Jumbotron