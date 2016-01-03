import Greet from './greet';
class Main extends React.Component{
  render() {
    return(
      // <h2> Hello There</h2>;
        <Greet />
    );
  }
}

let documentReady = () => {
  React.render(
    <Main />,
    // <h1>Hello React</h1>,
    document.getElementById('react')
  )
};

$(documentReady);
