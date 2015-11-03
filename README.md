# relay-decorator

ES2015 decorator style relay containers.


Write:

```jsx
import React from 'react';
import relay from 'relay-decorator';

@relay({
  fragments: {
    viewer: () => Relay.QL`
    	fragment on Viewer {
          name
        }
    `
  }
})
export default class App extends React.Component {
  render() {
    const {name} = this.props.viewer;
  	return (
    	<h1>Hello {name}</h1>
    );
  }
}
```


instead of:

```jsx
import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    const {name} = this.props.viewer;
    return (
        <h1>Hello {name}</h1>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
    	fragment on Viewer {
          name
        }
    `
  }
});
```
