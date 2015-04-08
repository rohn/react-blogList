# ReactJS - List of Blog Posts

A [ReactJS](https://facebook.github.io/react/) component for displaying a list of blog posts.

![](images/blogposts.png)


### Usage

Specify the blog's rss feed and the number of posts to display right in your HTML file:

```HTML
<div id="blogPosts" data-url='http://css-tricks.com/feed' data-posts='3'></div>
```

If you neglect to specify a blog or the number of posts to display, the component will default to the Smashing Magazine blog and 2 posts.

### Requirements

jQuery is used to make the ajax call, and you'll also want to be sure to include the ReactJS files

```HTML
  <script src="http://fb.me/react-0.13.1.js"></script>
  <script src="http://fb.me/JSXTransformer-0.13.1.js"></script>
  <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
```

Of course if you were to use this in production you'd want to precompile the JSX.

### License

Released under the MIT License.