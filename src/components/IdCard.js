import React, { Component } from 'react'
import data from '../data'
import Nav from './Nav';
import DataList from './DataList'

class IdCard extends Component {
    constructor() {
        super();
        this.state = {
            data,
            index: 0

        }
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
        if (this.state.index < this.state.data.length - 1) {
            this.setState({ index: this.state.index + 1 })
        }
    }

    decrease() {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 })
        }
    }

    render() {

        return (
            <div>
                <Nav increase={this.increase} decrease={this.decrease} />
                <DataList data={this.state.data} index={this.state.index} />
            </div>
        )
    }

}


export default IdCard