# mobx-react-devtools

DevTools for MobX to track & log state changes for your app.

## Installation

`npm install --save-dev mobx-react-devtools`


### Configuration

```js
import { configureDevtool } from 'mobx-react-devtools';

// Any configurations are optional
configureDevtool({
  // Turn on logging changes button programmatically:
  logEnabled: true,
  // Turn off displaying components updates button programmatically:
  updatesEnabled: false,
  // Log only changes of type `reaction`
  // (only affects top-level messages in console, not inside groups)
  logFilter: change => change.type === 'reaction',
});
```

### Usage

```js
import { setLogEnabled, setUpdatesEnabled, setGraphEnabled } from 'mobx-react-devtools';

setLogEnabled(true); // same as configureDevtool({ logEnabled: true });
```

### About log groups

Note that if logging is enabled, MobX actions and reactions will appear as collapsible groups inside the browsers console.
Mind that any log statements that are printed during these (re)actions will appear inside those groups as well, so that you can exactly trace when they are triggered.
