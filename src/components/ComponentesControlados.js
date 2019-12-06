import React, { Component } from 'react'



class ComponentesControlados extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
       alert('O nome enviado foi:' + this.state.value)
       event.preventDefault()
    }
    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'columnS'}}>
                <label>
                    Nome:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
            </>
        )
    }
}

export default ComponentesControlados;