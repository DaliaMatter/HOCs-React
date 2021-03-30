import React from 'react'

const Counter = (WrappedComponent, incrementNumber=1) => {
    class NewCounter extends React.Component {
       constructor(props) {
           super(props);

           this.state = {
               count: 0,
           };
       }
       incrementHandler = () => {
           this.setState((prevState) => {
               return { count: prevState.count + incrementNumber };
           });
       };
       render() {
           return (
               <WrappedComponent
                   count={this.state.count}
                   incrementHandler={this.incrementHandler}
                   {...this.props}
               />
           );
       }
   }
   
   return NewCounter;
   
}
export default Counter;