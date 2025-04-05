const Mod_var = () => {
    
    const translate3d = "translate3d(0px,0px,0px)";
    const scale3d = "scale3d(1,1,1)";
    const rotate3d = "rotate3d(0deg,0deg,0deg)";
    return (
        <div
            className="nucleon_grid"
            id= "nucleon3d"
            style={{
                display: "grid",
                position: "relative",
                gridTemplateAreas: "",
                gridTemplateColumns: "repeat(36,1fr)",
                gridTemplateRows: "repeat(36,1fr)",
                width: "100vw",
                height: "100vh",
                zIndex: "1",
                opacity: "1",
                transform: `${translate3d} ${scale3d} ${rotate3d}`  //moves object in in space             
            }}
        ></div>

        
    );
}
        
export default Mod_var;