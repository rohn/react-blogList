var BlogPostsApp = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    };
  },
  componentDidMount: function() {
    var FEED_URL = this.props.url;
    var numberOfPosts = this.props.numberOfPosts;
    var keyId = 0;
    var prettyDate = function(pubDate) {
      var newDate = new Date(pubDate);
      var year = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return newDate.getDate().toString() + ' ' + year[newDate.getMonth()] + ' ' + newDate.getFullYear();
    };

    $.ajax({
      url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
      dataType: 'json',
      success: function(data) {
        if (this.isMounted()) {
          var retrievedPosts = [];
          if (data.responseData.feed && data.responseData.feed.entries) {
            $.each(data.responseData.feed.entries, function (i, e) {
              retrievedPosts.push({
                'id': keyId++,
                'title': e.title,
                'author': e.author,
                'link': e.link,
                'date': prettyDate(e.publishedDate)
              });
            });
          }
          this.setState({posts:retrievedPosts.slice(0,numberOfPosts)});
        }
      }.bind(this)
    });
  },
  render: function() {
    var eachPost = function(post) {
      return (
        <li key={post.id}>
          <div className="blogTitle"><a href={post.link}>{post.title}</a></div>
          <div className="blogDate">
            <time>{post.date}</time> by <span className="blogAuthor">{post.author}</span>
          </div>
        </li>
        );
    };
    return (
      <div>
        <ul>
          {this.state.posts.map(eachPost)}
        </ul>
      </div>
      );
  }
});

React.render(
  <BlogPostsApp url='http://css-tricks.com/feed' numberOfPosts='5' />,
  document.getElementById('blogPosts')
);