import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className="log-form">
        <h2>Sign Up</h2>
        <form id="new_user" onSubmit={this.props.onSubmit} className="search">
          <p><input type="text" name="name" placeholder="Name" /></p>
          <p><input type="text" name="surname" placeholder="Surname" /></p>
          <p><input type="text" name="email" placeholder="Email" /></p>
          <p><input type="text" name="password" placeholder="Password" /></p>
          <p><input type="text" name="password_confirmation" placeholder="Password Confirmation" /></p>
          <p><input type="file" id="file" /></p>
          <button>Search</button>
        </form>
      </div>
    );
  }

});
