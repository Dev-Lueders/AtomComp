import React from 'react';
import { useSelector } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../components_styles.css";
import PropTypes from 'prop-types';
import Modular_Wrapper from "../../Mod_Wrapper/Modular_Wrapper";
import { useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';

const Stats_Container = ({ SC_Style, children }) => {
 
  const [localState, setLocalState] = useState(null); // lo
  useEffect(() => {
    console.log(
      `Rendering Stats_Container with props: SC_Style =`,
      SC_Style,
      `children =`,
      children
    );
  }, [SC_Style, children]); // This will log whenever SC_Style or children change

  return (
    <Modular_Wrapper>
      <div
        className="Stats_Content"
        style={SC_Style}
        role="region"
        aria-label="Statistics Section"
        isVisible = "true"

      >
        <h3 className="SC_class">Stats Content</h3>

        {children}
      </div>
    </Modular_Wrapper>
  );
};

Stats_Container.propTypes = {
  SC_Style: PropTypes.object,
  children: PropTypes.node,
  mediaType: PropTypes.oneOf(['map', 'image', 'video']),
  isVisible: PropTypes.bool,
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,
  zIndex: PropTypes.number,
  opacity: PropTypes.number,
  passProps: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,

};

Stats_Container.defaultProps = {
  SC_Style: {},
  children: null,
  mediaType: 'image',
  isVisible: false,
  gridColumn: '1/6',
  gridRow: '1/6',
  zIndex: 1,
  opacity: 1,
  passProps: {},
  className: 'Stats_Content',
  id: 'Stats_Content',
};

export default Stats_Container;