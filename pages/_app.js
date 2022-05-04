import "../styles/global.css";

// import React from 'react'

// class App extends React.Component {
//     // static propTypes = {
//     //     location: React.PropTypes.object.isRequired,
//     // };

//     // ...

//     componentDidUpdate(prevProps) {
//         if (this.props.location !== prevProps.location) {
//             this.onRouteChanged();
//         }
//     }

//     onRouteChanged() {
//         console.log("ROUTE CHANGED");
//     }

//     // ...
//     render() {
//       return <React.Component  />;
//     }
// }
// export default App;

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
