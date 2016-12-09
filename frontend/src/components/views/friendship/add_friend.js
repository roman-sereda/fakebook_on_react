import React from 'react';

export default React.createClass({

render: function() {
  return (
    <div>
      <button onClick={this.props.onSubmitFriend}>Add to friend</button>
    </div>
  );
}
});
