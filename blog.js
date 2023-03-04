//Class for blog posts.

class BlogPost {

    constructor(title, date, post) {
        this.title = title;
        this.date = date;
        this.post = post;
    }

}

//form features stored in corresponsing variables
const pTitle = document.getElementById("ptitle");
const pDate = document.getElementById("pdate");
const pSum = document.getElementById("psum");

//submit button stored in submitBtn
const submitBtn = document.getElementById("submitBtn");


//grabbing all posts into an array called posts
posts = [];
posts = JSON.parse(localStorage.getItem('posts'));

//Loop through posts and append to ul
const listOfPosts = document.getElementById("listofposts");
if(posts == null) {

    
    }


else {

    for(i = 0; i < posts.length; i++) {
        //console.log(posts[i]);

        listOfPosts.insertAdjacentHTML('beforeend', `
        <li>
    
            <div class="posts">
    
                <h3>Title: ${posts[i].title}</h3>
                <h4>Date: ${posts[i].date}</h4>
                <p>${posts[i].post}</p>
            </div>
        
        
        
        
        `);

}
}

//Attaching event listener and handler to submitBtn

submitBtn.addEventListener("click", () => {

    //conditional that checks if any of the values are empty
    if(pTitle.value == "" || pDate.value == "" || pSum.value == "") {

        return;
    }
    else {



    

    let addedBlogPost = new BlogPost(pTitle.value, pDate.value, pSum.value);

    if(posts == null) {
        posts = [];
        posts.push(addedBlogPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        }
    else {
        posts.push(addedBlogPost);
        localStorage.setItem("posts", JSON.stringify(posts));
    }
    }
    //console.log(`Post Title: ${addedBlogPost.title}\nPost Date: ${addedBlogPost.date}\nBlog Summary: ${addedBlogPost.post}`);
});

//Declaring and initalizing a variable coresponding with the clear button
//then adding a listiner and handler
const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});