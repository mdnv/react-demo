import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="py-5 bg-black"> 
                    <div className="container"> 
                    <p className="m-0 text-center text-white small">
                        {this.props.text}
                    </p>
                    </div> 
                </footer>
            </div>
        )
    }
}
