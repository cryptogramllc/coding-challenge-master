var React = require('react');
var Images = require('./Images');
var Header  = require('./Header');

var App = React.createClass({


	render: function(){

			return (

				<div className="App" >
                  <Header />
                  <Images />
				</div>

			);
		}
});


module.exports = App;