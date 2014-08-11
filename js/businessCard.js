/** @jsx React.DOM */

var dataSource = {
    name: 'Andrew McDowell',
    tagline: 'Javascript nutter with a side of grumpy cat',
    github: 'http://github.com/madole',
    twitter: 'http://twitter.com/madole',
    facebook: 'http://facebook.com/madole404',
    linkedIn: 'http://linkedin.com/andrew.mcdowell',
    email: 'mailto:madoliole@gmail.com',
    gravitar: 'https://pbs.twimg.com/profile_images/378800000342584802/a3c1efafd175e220231ef582549abec5_400x400.jpeg'
};

var BusinessCard = React.createClass({
    render: function() {
        return (
            <div className = "card shadow">
                <h2 className = "name">
                    {this.props.data.name}
                </h2>
                <img className="meHead" src={this.props.data.gravitar}></img>
                <blockquote>{this.props.data.tagline}</blockquote>
                <div className = "socialMedia">
                    <ul>
                        <li><a href = {this.props.data.github}><i className="icons buzz fa fa-github fa-3x"></i></a></li>
                        <li><a href = {this.props.data.twitter}><i className="icons buzz fa fa-twitter fa-3x"></i></a></li>
                        <li><a href = {this.props.data.facebook}><i className="icons buzz fa fa-facebook fa-3x"></i></a></li>
                        <li><a href = {this.props.data.linkedIn}><i className="icons buzz fa fa-linkedin fa-3x"></i></a></li>
                        <li><a href = {this.props.data.email}><i className="icons buzz fa fa-envelope fa-3x"></i></a></li>
                    </ul>
                </div>
            </div>
            );
    }
});


React.renderComponent(
    <BusinessCard data={dataSource}/>,
    document.getElementById("content")
);