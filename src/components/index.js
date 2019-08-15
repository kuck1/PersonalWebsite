import React from 'react';

export default Index;

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <title>Gourmet — Colorlib Website Template</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800|DM+Serif+Display:400,400i&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="ftco-32x32.png" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800" rel="stylesheet" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="fonts/ionicons/css/ionicons.min.css" />
        <link rel="stylesheet" href="fonts/fontawesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
        {/* Theme Style */}
        <link rel="stylesheet" href="css/style.css" />
        <header role="banner">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="index.html">Gourmet</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarsExample05">
                <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                  <li className="nav-item">
                    <a className="nav-link active" href="index.html">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="recipes.html">Recipes</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown04">
                      <a className="dropdown-item" href="services.html">Delicious Food</a>
                      <a className="dropdown-item" href="services.html">Enjoy Drinks</a>
                      <a className="dropdown-item" href="services.html">Eat All You Can</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* END header */}
    </div>
  );
  }
});