import { posts, post, createPost, updatePost, deletePost } from './posts'

describe('posts', () => {
  scenario('returns all posts', async (scenario) => {
    const result = await posts()

    expect(result.length).toEqual(Object.keys(scenario.post).length)
  })

  scenario('returns a single post', async (scenario) => {
    const result = await post({ id: scenario.post.one.id })

    expect(result).toEqual(scenario.post.one)
  })

  scenario('creates a post', async (scenario) => {
    const result = await createPost({
      input: { url: 'String', title: 'String', description: 'String' },
    })

    expect(result.url).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a post', async (scenario) => {
    const original = await post({ id: scenario.post.one.id })
    const result = await updatePost({
      id: original.id,
      input: { url: 'String2' },
    })

    expect(result.url).toEqual('String2')
  })

  scenario('deletes a post', async (scenario) => {
    const original = await deletePost({ id: scenario.post.one.id })
    const result = await post({ id: original.id })

    expect(result).toEqual(null)
  })
})
