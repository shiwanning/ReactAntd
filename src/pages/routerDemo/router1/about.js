import React from 'react'
export default class About extends React.Component {


   
    render() {
        console.log(this.props);
        return (
            <div>
                this is about page.+{this.props.match.params.id}
            </div>
        );
    }
}