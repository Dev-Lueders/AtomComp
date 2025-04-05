//These are the nessesary imports for the whole grid system to work. adjust the grid size as you wish. 
// for a component to be rendered you will need to set the visible prop to true. it is set at false to avoid unintended rendering of components.

const nucleon_Grid = {
    display: "grid",
    gridTemplateColumns: "repeat(36,1fr)",
    gridTemplateRows: "repeat(36,1fr)",
    width: "100vw",
    height: "100vh",
    position: "relative",
    
}

export default nucleon_Grid;

