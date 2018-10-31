let blogs = []

const addBlogs = document.querySelector('.add-blogs')
const blogList = document.querySelector('.blog-list')

function addBlog(e) {
	e.preventDefault()

	const title = document.querySelector('.blog-title').value
	const text = document.querySelector('.blog-text').value

	const blog = {
		title,
		text,
		id: Date.now()
	}

	blogs.push(blog)

	addBlogs.reset()

	populateBlog(blogs, blogList)

}


function populateBlog(blogs, blogsList) {

	blogList.innerHTML = blogs.map(blog => {
		return `
			<div class="blog">
				<h1>${blog.title}</h1>
				<h4>${blog.text}</h4>
				<button class="edit-blog">Edit</button>
			</div>
		`
	}).join('')

	const editBlog = document.querySelectorAll('.edit-blog')
	const editBlogs = Array.from(editBlog)

	editBlogs &&
	editBlogs.map(blog => {
		blog.addEventListener('click', handleBlogEdit)
	})

}

// Handle edit blog

function handleBlogEdit() {
	console.log('cao cao');
}

addBlogs.addEventListener('submit', addBlog)