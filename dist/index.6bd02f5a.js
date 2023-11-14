/*
<div id="parent">
   <div id ="child">
    <h1> I'm h1 tag</h1>
   </div>
</div>

ReactElement(object) => HTML(Browser Understands)


*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I'm an hl tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
]), React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {}, "I'm an hl tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
]));
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
 // const root = ReactDOM.createRoot(document.getElementById("root"));
 // root.render(heading)

//# sourceMappingURL=index.6bd02f5a.js.map
