import PostsListCell from 'src/components/PostsListCell'

const HomePage = () => {
  return (
    <div style={{ margin: '0 auto', maxWidth: 800 }}>
      <header style={{ display: 'flex' }}>
        <h1
          style={{
            border: '2px solid black',
            boxShadow: '3px 3px 0 black',
            padding: '4px 8px',
          }}
        >
          Tiny Projects
        </h1>
      </header>
      <PostsListCell />
    </div>
  )
}

export default HomePage
