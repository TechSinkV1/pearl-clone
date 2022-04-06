import { Component } from 'react'

export default class Delayed extends Component {
    constructor(props){
        super(props);
        this.state = {hidden: true}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({hidden: false})
        }, this.props.waitBeforeShow);
    }

  render() {
    return this.state.hidden ? '': this.props.children
  }
}

