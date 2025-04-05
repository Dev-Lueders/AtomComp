import "../../components_styles.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modular_Wrapper from "./ModularWrapper"; // Assuming this path is correct
const T_Navbar = ({ links = [],
  children,
  gridPosition = {},
  style = {},
  nucleon_Grid = {},
  passProps = {},
  className = "",
  id = "",
  isVisible = false,
  opacity = 1,
  zIndex = 1,
  gridColumn = "1/6",
  gridRow = "4/36",
  
}) =>
{

   console.log("From T_Navbar"),
            console.log("gridposition:", gridPosition),
            console.log("style:", style),
            console.log("links:", links),
            console.log("children:", children)
  return (
    
    <Modular_Wrapper
      isVisible={isVisible}
      gridColumn={gridColumn}
      gridRow={gridRow}
      zIndex={zIndex}
      opacity={opacity}
      className={className}
      id={id}
      passProps={passProps}
      nucleon_Grid={nucleon_Grid}
    
    >
        {/* Top Navbar */}
        <nav          className="t_NavBar"
          style={{
            zIndex: 1,
            ...gridPosition,
            ...style,
            color: 'white',
           

          }}>
          {children}
          <div style={{ display: 'flex', flexDirection: 'row', color: 'white' }}>

            {links.map((link, index) => (

              <Link key={index} to={link.path} className="Link" style={{ color: 'white' }}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
    </Modular_Wrapper>
    
  )
}
T_Navbar.propTypes = {
  links: PropTypes.array,
  children: PropTypes.node,
  gridPosition: PropTypes.object,
  style: PropTypes.object,
  nucleon_Grid: PropTypes.object,
  passProps: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  opacity: PropTypes.number,
  zIndex: PropTypes.number,
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,

};
console.log("T_Navbar propTypes", T_Navbar.propTypes)
console.log("T_Navbar defaultProps", T_Navbar.defaultProps)
console.log("T_Navbar", T_Navbar)

T_Navbar.defaultProps = {
  links: [],
  children: null,
  gridPosition: {
    gridColumn: "1/6",
    gridRow: "4/36",
  },
  passProps: {},
  className: "",
  id: "",
  isVisible: false,
  opacity: 1,
  zIndex: 1,
  style: {},
  }



export default T_Navbar;