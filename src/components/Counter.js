import React from 'react'

const UpdatedComp = OriginalComp => {
    class NewComp extends React.Component {
       constructor(props) {
           super(props);

           this.state = {
               count: 0,
           };
       }
       incrementHandler = () => {
           this.setState((prevState) => {
               return { count: prevState.count + 1 };
           });
       };
       render() {
           return (
               <OriginalComp
                   count={this.state.count}
                   incrementHandler={this.incrementHandler}
                   {...this.props}
               />
           );
       }
   }
   
   return NewComp;
   
}
export default UpdatedComp;