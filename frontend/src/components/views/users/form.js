import React from 'react';

export default React.createClass({

  render: function() {
    return (
      <div className="user-profile">
        <form id="edit_user" onSubmit={this.props.UpdateUser} className="search">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="surname" placeholder="Surname" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="password_confirmation" placeholder="Password confirmation" />
          <p><input type="file" id="file" /></p>
          <button>Search</button>
        </form>
      </div>
    );
  }

});
