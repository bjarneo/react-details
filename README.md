# React-Details

This is a `<details>` HTML wrapper - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

### Usage

```javascript
import Details from 'react-details';

function App() {
    return (
        <Details
            summaryContent={<span>React Details</span>}
            onToggle={console.log}
            open
        >
            <p>
                This is a HTML details wrapper. For more information please
                visit{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details">
                    MDN: details
                </a>
                .
            </p>
        </Details>
    );
}
```

### Visuals

![Visuals](/details.gif 'gif')

### Configuration

The `Details` component expects the following props.

| Parameter       | Default                     |                                                                                                                                         |
| :-------------- | :-------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| summaryContent  | undefined                   | The summary component, can be a string or react component                                                                               |
| open            | false                       | Should be open or not                                                                                                                   |
| onToggle        | A function `(toggle) => {}` | Returns the toggle value true or false                                                                                                  |
| styles          | Object                      | Possible to override the css class. Can pass css module object as well. Example: `{ details: styles.details, summary: styles.summary }` |
| children        | undefined                   | Whatever react component or string you would like                                                                                       |
| html attributes | undefined                   | You can pass whatever props you would like from this list https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes           |

### Test this repository

Simply by following these steps:

1. Clone the repository
2. Run `npm run demo`
3. Open index.html in your browser
