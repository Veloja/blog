// import { renderComment }  from './comment'
// const myModule = require('./comment')

import { helper } from './comment/index.js';
console.log(helper());

let blogs = []

const addBlogs = document.querySelector('.add-blogs')
const blogList = document.querySelector('.blog-list')

const submit = document.querySelector('.submit')
const save = document.querySelector('.save')

let btnId = '';
let title = '';
let text = '';
let btnItself = '';

var content = document.querySelector('link[rel="import"]');
let importovano = content.import
// console.log(renderComment())

function addBlog(e) {
	e.preventDefault()

	let title = document.querySelector('.blog-title').value
	let text = document.querySelector('.blog-text').value

	const blog = {
		title,
		text,
	}

	blogs.push(blog)
	addBlogs.reset()
	populateBlog(blogs, blogList)
}

function populateBlog(blogs) {
	// ovo je kad importujem html
	let element = content.querySelector('#blog-post')
	console.log(element)

	blogList.innerHTML = blogs.map((blog, id) => {
		return `
			<div class="blog" data-id=${id}>
				<h1 class="title">${blog.title}</h1>
				<h4 class="text">${blog.text}</h4>
				<div class="comment"></div>
				<button class="edit-blog" data-btnid=${id} >Edit</button>
			</div>
		`
	}).join('')

	let comment = document.querySelector('.comment')
	comment.innerHTML = content.innerHTML

	const editBlog = document.querySelectorAll('.edit-blog')
	const editBlogs = [...editBlog]

	editBlogs.map(blog => {
		blog.addEventListener('click', handleBlogEdit)
	})

}

function handleBlogEdit() {

	//this je btn
	btnId = this.getAttribute('data-btnid')
	btnItself = this;
	const parent = this.parentNode
	const blogNodes = parent.children
	const blogValues = [...blogNodes]

	//take title and text from clicked blog
	for(let i = 0; i < blogValues.length; i++) {
		if(blogValues[i].classList.contains('title')) {
			title = blogValues[i].innerHTML
		} else if(blogValues[i].classList.contains('text')) {
			text = blogValues[i].innerHTML
		}
	}

	//insert title and text from clicked blog to inputs
	document.querySelector('.blog-title').value = title
	document.querySelector('.blog-text').value = text

	// hide submit; show save
	save.classList.add('show-save');
	submit.classList.add('hide-submit');
}

function findBlogById() {

	const blogId = btnItself.parentNode
	const blogNodes = blogId.children
	const blogIdArr = [...blogNodes]

	var titleChanged = document.querySelector('.blog-title').value
	var textChanged = document.querySelector('.blog-text').value

	for(let i = 0; i < blogIdArr.length; i++) {
		if(blogIdArr[i].classList.contains('title')) {
			blogIdArr[i].innerHTML = titleChanged
		} else if(blogIdArr[i].classList.contains('text')) {
			blogIdArr[i].innerHTML = textChanged
		}
	}
	// show submit; hide save
	submit.classList.remove('hide-submit');
	save.classList.remove('show-save');

	addBlogs.reset()

}

addBlogs.addEventListener('submit', addBlog)
save.addEventListener('click', findBlogById)