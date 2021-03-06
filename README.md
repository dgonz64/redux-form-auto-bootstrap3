# redux-form-auto-bootstrap3

`redux-form-auto-bootstrap3` allows your React application to automatically generate forms and validation code using [ReduxForm](https://github.com/erikras/redux-form/) for state management and [Bootstrap 3](https://getbootstrap.com/docs/3.3/) for component rendering.

It extends [redux-form-auto](https://github.com/dgonz64/redux-form-auto) and the API is identical ([documentation](https://dgonz64.github.io/redux-form-auto/)).

## Play with the demo

[Demo](https://dgonz64.github.io/redux-form-auto-bootstrap3/demo/)

## Installation

    $ npm install redux-form-auto-bootstrap3 --save

## Usage

Just like `redux-form-auto` except you import this one. You are also in charge of importing `bootstrap`.

```javascript
    import { Schema } from 'redux-form-auto-bootstrap3'

    const client = new Schema('client', {
      name: {
        type: 'string',
        required: true,
        max: 32
      },
      age: {
        type: 'number'
      }
    })

    const MyForm = ({ onSubmit }) =>
      <Autoform
        schema={client}
        onSubmit={onSubmit}
      />
```

## [Documentation](https://dgonz64.github.io/redux-form-auto/)
