import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

    const [Posts, setPosts] = useState([])
    const [Todos, setTodos] = useState([])
    const [Users, setUsers] = useState([])


    var posts = 'https://jsonplaceholder.typicode.com/posts'
    var todos = 'https://jsonplaceholder.typicode.com/todos'
    var users = 'https://jsonplaceholder.typicode.com/users'

    function GetPosts() {
        axios.get(posts).then((res) => { setPosts(res.data) })
    }

    function GetTodos() {
        axios.get(todos).then((res) => { setTodos(res.data) })
    }

    function GetUsers() {
        axios.get(users).then((res) => { setUsers(res.data) })
    }


    useEffect(() => {
        GetPosts()
        GetTodos()
        GetUsers()
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4 text-light">
                    <h2 >Posts</h2>
                    {Posts.map((item, index) => <div key={index}>
                        <div className="card my-2 text-light bg-dark">
                            <div className="card-header">
                                {item.id}
                                {item.title}
                            </div>
                            <div className="card-body">
                                {item.body}
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className="col-md-4 text-light">
                    <h2>Todos</h2>
                    {Todos.map((item, index) => <div key={index}>
                        <div className="card my-2 text-light bg-dark">
                            <div className="card-body">
                                {item.id}
                                <input type="checkbox" checked={item.completed} className='mx-2' />
                                {item.title}
                            </div>
                        </div>
                    </div>)}
                </div>
                <div className="col-md-4 text-light">
                    <h2>Users</h2>
                    {Users.map((item, index) => <div key={index}>
                        <div className="card my-2 bg-dark text-light">
                            <div className="card-header">
                                {item.id}
                                {item.username}
                            </div>
                            <div className="card-body">
                                {item.name}
                                {item.email}
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default App