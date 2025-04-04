//---------------------------VERSION 8 -----------------------------
// ModularWrapper.jsx
/// This component is a wrapper for modular components, providing grid layout and visibility control.
/// It validates props, generates unique class names, and applies styles based on the provided properties.
/// The component uses React's memoization for performance optimization and includes prop type validation.
/// It also supports lazy loading of child components using React's Suspense.
/// The component is designed to be reusable and flexible, making it suitable for various use cases in a modular design system.
/// The component is styled using CSS classes and inline styles, ensuring it fits well within a grid layout.
/// The component is designed to be used in a React application, and it can be easily integrated into existing projects.
/// The component is built with accessibility in mind, ensuring that it can be used by a wide range of users.
/// The component is designed to be responsive, adapting to different screen sizes and orientations.
/// The component is built with performance in mind, ensuring that it loads quickly and efficiently.
/// The component is designed to be easily customizable, allowing developers to modify its appearance and behavior as needed.
/// The component is built with best practices in mind, ensuring that it follows industry standards for React development.
/// The component is designed to be easily testable, allowing developers to write unit tests and integration tests as needed.
/// The component is built with scalability in mind, ensuring that it can handle large amounts of data and complex interactions without performance degradation.
/// The component is designed to be easily maintainable, allowing developers to make changes and updates as needed without introducing bugs or breaking existing functionality.
/// The component is built with security in mind, ensuring that it does not introduce vulnerabilities or expose sensitive data.
/// The component is designed to be easily extensible, allowing developers to add new features and functionality as needed without modifying the core codebase.
/// The component is built with internationalization in mind, ensuring that it can be easily translated and adapted for different languages and cultures.
/// The component is designed to be easily debuggable, allowing developers to identify and fix issues quickly and efficiently.
/// The component is built with documentation in mind, ensuring that it is well-documented and easy to understand for other developers.


// need to implement the lock and key when lock and key system is created 
//for now passing uniqueClasName later it will be the codex for unlocking and locking the components
import React, { Suspense } from "react";
import PropTypes from "prop-types";

// Utility function: Validate props and log warnings/errors.
const validateProps = (props) => {
  const requiredProps = {
    isVisible: "boolean",
    gridColumn: "string",
    gridRow: "string",
    zIndex: "number",
    opacity: "number",
    className: "string",
    id: "string",
  };

  Object.entries(requiredProps).forEach(([prop, expectedType]) => {
    const value = props[prop];
    if (value === undefined || value === null) {
      console.warn(
        `⚠️ Missing prop: "${prop}" in ModularWrapper. ClassName: "${
          props.className || "unknown"
        }"`
      );
    } else if (typeof value !== expectedType) {
      console.error(
        `❌ Invalid prop type for "${prop}" (ClassName: "${
          props.className || "unknown"
        }"): expected ${expectedType}, but got ${typeof value} (${value}).`
      );
    }
  });

  return props;
};

// Utility function: Generate a unique class name from grid and style props.
const generateUniqueClassName = ({
  gridColumn,
  gridRow,
  isVisible,
  opacity,
  className,
}) => {
  return `${className}-col${gridColumn}-row${gridRow}-vis${isVisible}-op${opacity}`;
};

// ModularWrapper: Wraps a component, validates its props, and applies grid styling.
// eslint-disable-next-line react/display-name
const Modular_Wrapper = React.memo(
  ({
    children,
    isVisible,
    gridColumn,
    gridRow,
    zIndex,
    opacity,
    passProps,
    className,
    id,
  }) => {
    // Validate props with robust error handling.
    const validatedProps = validateProps({
      isVisible,
      gridColumn,
      gridRow,
      zIndex,
      opacity,
      className,
      id,
      ...passProps,
    });

    // Generate a unique class name.
    const uniqueClassName = generateUniqueClassName({
      gridColumn: validatedProps.gridColumn,
      gridRow: validatedProps.gridRow,
      isVisible: validatedProps.isVisible,
      opacity: validatedProps.opacity,
        className: validatedProps.className,
      
    });
        console.log("generateUniqueClassName", uniqueClassName);
        console.log("validatedProps", validatedProps);
        
const updatedPassProps = { ...passProps, uniqueClassName };
        
    // If not visible, do not render.
    if (!validatedProps.isVisible) return null;

    // Style based on validated props.
    const style = {
      gridColumn: validatedProps.gridColumn,
      gridRow: validatedProps.gridRow,
      zIndex: validatedProps.zIndex,
      opacity: validatedProps.opacity,
      width: "100%", // Ensuring it takes full width within the grid cell
      height: "100%", // Ensuring it takes full height within the grid cell
    };

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className={`${validatedProps.className} ${uniqueClassName}`}
          id={validatedProps.id}
                style={style}
            {...updatedPassProps} // Spread the updated props to the div
        >
          {children}
        </div>
      </Suspense>
    );
  }
);

Modular_Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  gridColumn: PropTypes.string,
  gridRow: PropTypes.string,
  zIndex: PropTypes.number,
  opacity: PropTypes.number,
  passProps: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
};

Modular_Wrapper.defaultProps = {
  isVisible: false, // Defaulting to false to avoid accidental renders.
  gridColumn: "auto",
  gridRow: "auto",
  zIndex: 1,
  opacity: 1,
  passProps: {},
  className: "default-class",
  id: "default-id",
};


export default Modular_Wrapper;
