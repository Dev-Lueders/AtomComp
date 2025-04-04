import "../../components_styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ModularWrapper from "./ModularWrapper"; // Assuming this path is correct

const T_Navbar = ({
  links = [],
  children,
  gridPosition = {},
  style = {},
  ariaLabel,
}) => {
  return (
    <ModularWrapper
      isVisible={true}
      gridColumn={gridPosition.gridColumn}
      gridRow={gridPosition.gridRow}
      zIndex={2}
      opacity={1}
      style={{
        justifyContent: "center", // Center items
        ...style,
      }}
      ariaLabel={ariaLabel} // ✅ Added ARIA label for accessibility
    >
      <nav
        className="t_NavBar"
        aria-label={ariaLabel} // ✅ Added ARIA label for accessibility
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {links.map((link, index) => (
            <li key={index} style={{ margin: "0 10px" }}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {children}
      </nav>
    </ModularWrapper>
  );
};

T_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  gridPosition: PropTypes.object,
  style: PropTypes.object,
  ariaLabel: PropTypes.string, // ✅ Added PropType for ARIA label
};

T_Navbar.defaultProps = {
  links: [],
  children: null,
  gridPosition: {
    gridColumn: "1/38",
    gridRow: "1/4",
  },
  style: {},
  ariaLabel: "Main navigation", // ✅ Default ARIA label for screen readers
};

export default T_Navbar;


import "../../components_styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ModularWrapper from "./ModularWrapper"; // Assuming this path is correct

const T_Navbar = ({
  links = [],
  children,
  gridPosition = {},
  style = {},
  ariaLabel,
}) => {
  return (
    <ModularWrapper
      isVisible={true}
      gridColumn={gridPosition.gridColumn}
      gridRow={gridPosition.gridRow}
      zIndex={2}
      opacity={1}
      style={{
        justifyContent: "center", // Center items
        ...style,
      }}
      ariaLabel={ariaLabel} // ✅ Added ARIA label for accessibility
    >
      <nav
        className="t_NavBar"
        aria-label={ariaLabel} // ✅ Added ARIA label for accessibility
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {links.map((link, index) => (
            <li key={index} style={{ margin: "0 10px" }}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {children}
      </nav>
    </ModularWrapper>
  );
};

T_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  gridPosition: PropTypes.object,
  style: PropTypes.object,
  ariaLabel: PropTypes.string, // ✅ Added PropType for ARIA label
};

T_Navbar.defaultProps = {
  links: [],
  children: null,
  gridPosition: {
    gridColumn: "1/38",
    gridRow: "1/4",
  },
  style: {},
  ariaLabel: "Main navigation", // ✅ Default ARIA label for screen readers
};

export default T_Navbar;

