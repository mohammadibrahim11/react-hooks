// import { render } from "@testing-library/react";
import React, { useState } from "react";

function Example(){
    const [count,setCount] = useState(0)

    return(
        <div>
            <p>Using useState</p>
            <p>
                you clicked {count} times
            </p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example;



// // equivalent class Example
// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count : 0
//         };
//     }
    


// render(){
//     return(
//         <div>
//             <p>
//                 you clicked {this.state.count} times
//             </p>
//             <button onClick={()=>this.setState({count:this.state.count + 1})}>
//                 click me
//             </button>
//         </div>
//     );
// }
// }
// export default Example;