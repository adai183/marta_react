var React = require('react');
require('../styles/main.scss');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>

        <header className="container-fluid">
			<nav>
				<div className="logo">
					<div className="title">
						MARTA DE LA TORRE
					</div>
					<div className="subtitle">
						Fotógrafa
					</div>
				</div>
				<ul>
					<li>
						<a href="/" className="active">Inicio</a>
					</li>
					<li>
						<a href="/#/about">Sobre mí</a>
					</li>
					<li>
						<a href="/#/contact">Contacto</a>
					</li>
				</ul>
			</nav>
		</header>

        <div className="container-fluid">
            {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
