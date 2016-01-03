import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";

let mockTweets =[
  { id: 1, name: 'Carmen Liu', body: 'My #FirstTweet'},
  { id: 2, name: 'Carmen Liu', body: 'My #SecondTweet'},
  { id: 3, name: 'Carmen Liu', body: 'My #ThirdTweet'},
];

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = { tweetsList: mockTweets };
  }

  addTweet(tweetToAdd) {
    //mockTweets.unshift({...})
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id:Date.now(), name: 'God Carmen', body: tweetToAdd});
    this.setState({tweetList: newTweetsList});
  }
  render() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={mockTweets}/>
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    // <h1>Hello React</h1>,
    document.getElementById('react')
  )
};

$(documentReady);
