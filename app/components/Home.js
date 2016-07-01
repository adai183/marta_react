var React = require('react');
require('../styles/home.scss');

var Home = React.createClass({
    render : function () {
        return (
            <div className="category-container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="card">
                            <img src={'http://placehold.it/480x480'} className="img-responsive" alt="Card image cap" />
                            <div className="card-block">
                	               <p className="card-text">Some quick example</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={'http://placehold.it/480x480'} className="img-responsive card-img-top" alt="Card image cap" />
                            <div className="card-block">
                	               <p className="card-text">Some quick example</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6">
                        <div className="card">
                            <img src={'http://placehold.it/480x480'} className="img-responsive" alt="Card image cap" />
                            <div className="card-block">
                	               <p className="card-text">Some quick example</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <img src={'http://placehold.it/480x480'} className="img-responsive card-img-top" alt="Card image cap" />
                            <div className="card-block">
                	               <p className="card-text">Some quick example</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;
