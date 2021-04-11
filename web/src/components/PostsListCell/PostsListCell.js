export const QUERY = gql`
  query PostsListQuery {
    posts {
      id
      url
      title
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <div key={post.id}>
      <h2 style={{ fontSize: 20 }}>{post.title}</h2>
      <p>
        <a href={post.url}>{post.url}</a>
      </p>
      <p>{post.description}</p>
    </div>
  ))
}
