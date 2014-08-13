/** @jsx React.DOM */

var dataSource = {
    name: 'Andrew McDowell',
    tagline: 'Javascript engineer with a side of grumpy cat',
    icons: [
        {github: 'http://github.com/madole'},
        {twitter: 'http://twitter.com/madole'},
        {facebook: 'http://facebook.com/madole404'},
        {linkedin: 'http://linkedin.com/andrew.mcdowell'},
        {envelope: 'mailto:madoliole@gmail.com'}
    ],
    blog: 'http://madole.github.io',
    gravitar: 'https://pbs.twimg.com/profile_images/378800000342584802/a3c1efafd175e220231ef582549abec5_400x400.jpeg'
};

var iconsList = React.createClass({
    render: function(){
      var icons = this.props.data.icons;
      return (
          <ul>
              {
                  icons.map(function(icon){
                      var key = Object.keys(icon)[0] ;
                      var classes = "fa fa-" + key + " fa-3x buzz";
                      var val = '' + icon[key] + '';
                      return <li ><a href= {val} ><i className={classes}></i></a></li>;
                  })
              }
          </ul>
      );
    }
});

var BusinessCard = React.createClass({
    render: function() {
        return (
            <div className = "card shadow">
                <h2 className = "name">
                    {this.props.data.name}
                </h2>
                <img className = "meHead" src={this.props.data.gravitar}></img>
                <blockquote>{this.props.data.tagline}</blockquote>
                <div className = "socialMedia">
                    <iconsList data = {this.props.data}/>
                </div><br/>
                <div className = "blog"><a href={this.props.data.blog}>{this.props.data.blog}</a></div>
            </div>
            );
    }
});


React.renderComponent(
    <BusinessCard data={dataSource}/>,
    document.getElementById("content")
);