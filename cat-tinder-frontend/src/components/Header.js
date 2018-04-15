import React, {Component} from 'react';

class Header extends Component {

  render(){
    return(
		<div>
			<div className="title-container">
				<div id="logo">
					<img src={require("../cat.png")} alt="Cat logo"/>
				</div>
				<div id="brand">
					<h1>Cat Tinder</h1>
					<h3>...like tinder but for Cats!</h3>
				</div>
			</div>
			<div className="nav-container">
				<a href="/">
					<button id="button1" type="button" className="nav-button1">
						Add a Cat
					</button>
				</a>
				<a href="/cats" >
					<button id="button2" type="button" className="nav-button2">
						Show me the Cats
					</button>
				</a>
			</div>
		</div>
    )}
}

export default Header
