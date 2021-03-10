import React, { Component } from 'react';

class StatePractice extends Component {
    constructor(props){
        super(props)
        this.state = {
            btnText: 'agree',
            inputText: '',
            message: '',
            imageWidth: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    }

    
    handleSubmit(e){
        e.preventDefault()
        console.log('Form submitted: ', this.state.message)
    }

    handleFocus= () => {
        this.setState({
            message: 'You agree to the site terms'
        })
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleEnter(){
        this.setState({
            message: ''
        })
    }

    handleImage(e){
        const imgWidth = e.target.width
        if(imgWidth > 100){
          console.log("Your image is big!")
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder={this.state.placeholder} onFocus={this.handleFocus} onChange={this.handleChange} />
                {/* <button className="btn" type="submit" >{this.state.btnText}</button> */}
                <h3 onMouseEnter={this.handleEnter}>{this.state.message}</h3>
                <img src="https://picsum.photos/200" onLoad={this.handleImage}/>
                </form>
            </div>
        );
    }
}

export default StatePractice;
<input
onFocus={() => {
  console.log('Focused on input');
}}
placeholder="onFocus is triggered when you click this input."

/>