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

  formattedTweets(tweetsList) {
    let formattedList = tweetsList.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    });
    return {
      tweetsList: tweetsList
    };
  }
  addTweet(tweetToAdd) {
    $.post("/tweets", {body: tweetToAdd})
    .success(savedTweet =>{
      let newTweetsList = this.state.tweetsList;
      newTweetsList.unshift(savedTweet);
      this.setState(this.formattedTweets(newTweetsList));
    })
    .error(error => console.log(error));
    //mockTweets.unshift({...})
    // let newTweetsList = this.state.tweetsList;
    // newTweetsList.unshift({id:Date.now(), name: 'God Carmen', body: tweetToAdd});
    // this.setState({tweetList: newTweetsList});
  }

  componentDidMount() {
    $.ajax("/tweets")
    .success(data => this.setState(this.formattedTweets(data)))
    .error(error => console.log(error));
  }
  render() {
    return(
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');

  if(reactNode) {
    ReactDOM.render(<Main />, reactNode )
  }
};

$(documentReady);
