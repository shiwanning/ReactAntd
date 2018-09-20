import React from 'react'
import { Link } from 'react-router-dom'
export default class Main extends React.Component {

    render() {
        return (
            <div>
                this is main page.
                <ul>
                    <li>
                        <Link to="/main/about/2">嵌套About</Link>
                    </li>
                    <li>
                        <Link to="/main/topic">嵌套Topics</Link>
                    </li> 
                    <li>
                        <Link to="/main/KR">KR</Link>
                    </li> 
                    
                </ul>
                <hr />
                {this.props.children}
            </div>
        );
    }
}