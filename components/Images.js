var React = require('react');


var Images = React.createClass({
  getInitialState: function(){
        
        
        return { pictures: [], favorites: [] };
    },


    componentDidMount: function(){
        

        var self = this;

        Date.prototype.yyyymmdd = function() {
          var mm = this.getMonth() + 1; 
          var dd = this.getDate() - 2;

          return [this.getFullYear(), !mm[1] && '-', mm, !dd[1] && '-', dd].join(''); 
        };

        var date = new Date();
        var formattedDate = date.yyyymmdd();

        var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+ formattedDate +'&api_key=aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM';

        fetch(url, {
           method: 'GET',
            headers: {
              'Access-Control-Allow-Origin':'*',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        }).then(function(obj) {
              console.log(obj);
              var pictures = obj.data.map(function(p){
              console.log(p);
               

            });

        }).catch(function(error) {  
            console.log('Request failed', error);  
        });


    },

    render: function() {

       
        return (

            <div>
                <h1>Mars Rover Pics</h1>
                <div className="pictures"> {pictures} </div>
            </div>

        );
    }
});


module.exports = Images;