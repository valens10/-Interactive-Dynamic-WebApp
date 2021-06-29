
const usersScreen = document.getElementById('users-details')
const userPostsScreen = document.getElementById('posts-list')
const postUserName = document.getElementById('post-user')
const postSection = document.getElementById('posts-list')
async function getUsersList() {
    const users = await getUsersApi()

    users.forEach(user => {
        const userDetailsScreen = `<li>
              <p><span>Name:</span> <b>${user.name}</b></p>
              <p><span>Email:</span> <b>${user.email}</b></p>
              <br />
              <button onclick="getUserPosts('${user.id}','${user.name}')">Get User’s Posts</button>
              <hr class="solid" />
              <br />
            </li>`
        usersScreen.innerHTML += userDetailsScreen
    });
}

async function getUserPosts(userId, name) {
    const postsEndpoint = 'posts?userId=' + userId
    const posts = await getUserPostsApi(postsEndpoint)
    userPostsScreen.innerHTML = ''
    posts.forEach(post => {
        let postScreen = `<li>
                <p>
                   <b>Title: </b>${post.title}
                </p>
                <p>
                  
                  <b
                    >Body: </b
                  >${post.body}
                </p>
                <br/>
              </li>`
        userPostsScreen.innerHTML += postScreen
    })
    postUserName.innerHTML = `${name}'s post`
}
 getUsersList()