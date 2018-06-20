# is-online-component

![npm](https://img.shields.io/npm/dt/is-online-component.svg) [![Build Status](https://travis-ci.org/Leocardoso94/is-online-component.svg?branch=master)](https://travis-ci.org/Leocardoso94/is-online-component) [![](https://data.jsdelivr.com/v1/package/npm/is-online-component/badge)](https://www.jsdelivr.com/package/npm/is-online-component)

> A simple react componet that detect online and offline changes

> Live demo [here](https://codesandbox.io/s/4ry12w6509)

![](https://raw.githubusercontent.com/leocardoso94/is-online-component/master/docs/gif.gif)

## Usage

```bash
$ npm install is-online-component
# OR
$ yarn add is-online-component
```

```jsx
import React from 'react';
import IsOnline from 'is-online-component ';

const handleChange = (isOnline) => {
  console.log(isOnline);
};

const App = () => (
  <div>
    <IsOnline
      OnlineComponent={<h1>online</h1>}
      OfflineComponent={<h1>offline</h1>}
      onChange={handleChange}
    />
  </div>
);

export default App;
```

[View demo here](https://codesandbox.io/s/4ry12w6509)
[![Edit is-online-component](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4ry12w6509)

## Props

Following `props` are used while initialization

| Prop Name             | Type              | Description                                                                                    |
| --------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| OnlineComponent `(optional)` | React.Component or String | the component that will be renderized when browser is online                                                                    |
| OfflineComponent `(optional)`    | React.Component or String | the component that will be renderized when browser is offline                                                                        |
| onChange `(optional)`   | Function  | function that will be called when the navigator be online or offline |


