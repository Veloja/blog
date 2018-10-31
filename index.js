const blogs = [
    {
        id: 1,
        title: 'Title 1',
        text: 'Text 1',
        comment: 'bla bla'
    },
    {
        id: 2,
        title: 'Title 2',
        text: 'Text 2',
        comment: 'bla bla 2'
    }, 
    {
        id: 3,
        title: 'Title 3',
        text: 'Text 3',
        comment: 'bla bla 3'
    }
]


function addBlog() {
    const addBlog = document.querySelector('.add-blog');

    addBlog.addEventListener('click', function() {
        let inputs = document.querySelectorAll('input');
        let inputsArr = Array.from(inputs)
        console.log(inputsArr)
        for(var i = 0; i < inputsArr.length; i++) {
            inputsArr[i].classList.add('show');
        }
    });
}

function showBlogs() {

    for(var i = 0; i < blogs.length; i++) { 

        let heading = document.createElement('h4');
        let text = document.createElement('p');
        let comment = document.createElement('p');
    
        let blogTitle = blogs[i].title;
        let blogText = blogs[i].text;

        heading.innerHTML = blogTitle;
        document.body.appendChild(heading)

        text.innerHTML = blogText;
        document.body.appendChild(text)
    }

}

showBlogs()
addBlog()