import { Fragment } from "react";

function ListGroup() {

    const items = ['NYC','SF', 'Hartford', 'Dallas'];

    

    return (
    <>
        <h1>Title</h1>
        <ul className="list-group">
            {items.map(item => <li key= {item} onClick = {() => console.log(item)} className="list-group-item">{item}</li>)}
        </ul>
    </>
    );
}
export default ListGroup;