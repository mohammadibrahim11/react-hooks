import React, { useEffect, useState } from 'react';

// const UseEffect = () => {
//     const [count,setCount] = useState(0);

//     useEffect(()=>{
//         // update the document title using the browser API
//         document.title = `you clicked ${count} times`; 
//     });
//     return (
//         <div>
//             <p>
//                 Using useEffect
//             </p>
//             <p>
//                 you clicked {count} times
//             </p>
//             <button onClick={()=>setCount(count + 1)}>
//                 click me
//             </button>
//         </div>
//     );
// };

// export default UseEffect;

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  export default Example;