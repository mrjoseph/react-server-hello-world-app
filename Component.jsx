var React = require('react');

const divStyle = {
  color: 'blue'
};

module.exports = React.createClass({
	_handleClick : function(){
		alert('');
	},
	render: function(){
		return (
			<html>
				<head>
					<title>Universal APP</title>
					<link rel='stylesheet' href='/style.css' />
				</head>
				<body>
					<div>
						<h1 style={divStyle}>Hello world</h1>
						<p> Serverside rendering is awesome</p>
						<button onClick={this._handleClick}>Click Me</button>
					</div>
					<script src="/bundle.js" />
				</body>
			</html>
			)
	}
})