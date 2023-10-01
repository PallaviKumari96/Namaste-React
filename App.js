const parent = React.createElement(
    "div",
    {id:"parent"},
React.createElement("div", 
 {id:"child2"},
[React.createElement("h1", {}, "I am h1"),  React.createElement("h1", {}, "I am h2")]

)
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);