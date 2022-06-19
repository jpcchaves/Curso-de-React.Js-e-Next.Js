import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  // loadPosts
  loadPosts = async () => {
    const urlPosts = "https://jsonplaceholder.typicode.com/posts";
    const urlPhotos = "https://jsonplaceholder.typicode.com/photos";
    const postsResponse = fetch(urlPosts);
    const photosResponse = fetch(urlPhotos);

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    // unindo dois arrays
    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url };
    });

    this.setState({ posts: postsAndPhotos });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div className="post-content">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
