/**
 * Build this structure
 * <div id = parent>
 *      <div id =child1>
 *          <h1>H1tag</h1>
 *          <h2>H2tag</h2>
 *      </div>
 *      <div id =child2>
 *          <h1>H1tag</h1>
 *          <h2>H2tag</h2>
 *      </div>
 * </div>
 * To pass multiple children in react ,create them in 3rd arg of createelement in ARRAY form 
 */
const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",{id:"child1"},
    [
        React.createElement("h1",{},"H1tag"),
        React.createElement("h2",{},"h2tag")
    ]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"H1tag"),
        React.createElement("h2",{},"h2tag")]
    )]
    );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


//const heading = React.createElement("h1",{id:"heading"},"Hello world from React");
//console.log(heading);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);