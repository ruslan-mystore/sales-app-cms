import React from 'react'
import Cards from '../components/Cards'
import TopNavBar from '../components/TopNavBar'
import BottomNavBar from '../components/BottonNavBar'
import { connect } from 'unistore/react'
import actions from '../store/actions'

class FeedPage extends React.Component {
  componentDidMount() {
    window.onscroll = ev => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        this.props.highLightButtonFeed()
      }
    }
  }
  render() {
    return (
      <div className="feed-page">
        <TopNavBar />
        <Cards />
        {this.props.showBoarding ? (
          <BottomNavBar
            text="Let's go"
            buttonDisabled={this.props.showBoarding}
            location={this.props.location}
            buttonClick={this.props.hideBoarding}
          />
        ) : (
          <BottomNavBar
            text="Approve"
            buttonDisabled={this.props.buttonFeed}
            location={this.props.location}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ buttonFeed, showBoarding }) => ({
  buttonFeed,
  showBoarding,
})
export default connect(
  mapStateToProps,
  actions
)(FeedPage)
