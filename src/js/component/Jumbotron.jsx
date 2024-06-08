import React from "react";
import PropTypes from 'prop-types';

const Jumbotron = (props) => {

    return (
        <div>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </div>
    );
};

// Jumbotron.propTypes = {
// title: PropTypes.string,
// description: PropTypes.string,
// buttonText: PropTypes.string,
// };



export default Jumbotron