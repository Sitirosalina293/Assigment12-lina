export default function Posts(props) {
  return (
    <h3 class="tag">Posts</h3>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {
          props.posts?.map(posts => (
            <tr key={posts.id}>
              <td>{posts.id}</td>
              <td>{posts.title}</td>
              <td>{posts.body}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    );
}
export async function getServerSideProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: { posts }
  }
}
