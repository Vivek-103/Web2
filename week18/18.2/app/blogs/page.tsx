import axios from 'axios'

interface ITodo {
  title: string
  completed: boolean
}

async function getBlogs() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
  return response.data
}

export default async function Blogs() {
  const blogs: ITodo[] = await getBlogs()

  return (
    <div>
      Learn cohort3.0
      {blogs.map((blog, index) => (
        <Todo
          key={index}
          title={blog.title}
          completed={blog.completed}
        />
      ))}
    </div>
  )
}

function Todo({ title, completed }: ITodo) {
  return (
    <div>
      {title} — {completed ? "done" : "not done"}
    </div>
  )
}
