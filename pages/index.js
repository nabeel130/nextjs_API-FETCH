import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = ( props ) => {

  const { posts } = props;

  return (
    <div>
      <Layout>
      <div className="container">
        { posts.map (post => (
        <div className="card border-primary mb-3" key={post.id}>
          <div className="card-header">{post.title}</div>
          <div className="card-body">
            <p className="card-text">{ post.body }</p>
          </div>
        </div>
        ))}
      </div>
      </Layout>
    </div>
  )
}

Index.getInitialProps = async (context) => {

  // console.warn(context);
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await data.json();

  return {
    posts: result
  }
};

export default Index;