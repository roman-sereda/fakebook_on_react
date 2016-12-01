import React from 'react';

export default React.createClass({

render: function() {
  return (
    <div className="data-list">
      <button onClick={this.props.onSubmitFriend}>Add to friend</button>
    </div>
  );
}
});
