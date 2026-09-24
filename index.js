const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const itemEl = document.getElementById("item")
let postList =''


for(let i =0;i<posts.length;i++){
    let poster = posts[i]
    postList +=` 
    <div class="header-item">
                    <img src="${poster.avatar}" alt="vangogh avatar" class="user-avatar">
                    <ul class="section-list">
                        <li class="bold-list">${poster.name}</li>
                        <li>${poster.location}</li>
                    </ul>
                </div>
                <img src="${poster.post}" alt="vangogh post" class="main-img" data-id="${poster.name}">
                <div class="footer-item">
                    <img src="images/icon-heart.png" alt=" heart icon for likes" class="icon" data-id="${poster.name}">
                    <img src="images/icon-comment.png" alt="comment icon for comments" class="icon">
                    <img src="images/icon-dm.png" alt="share icon for dirct message" class="icon">
                    <p class="bold" id="likes-${poster.name}">${poster.likes} likes</p>
                    <p><span class="bold"> ${poster.username}</span> ${poster.comment}</p>

                </div>
                `
}
itemEl.innerHTML=postList

itemEl.addEventListener("dblclick",function(event){
    let clickedName= event.target.dataset.id
    console.log(clickedName)
    for(let i =0;i<posts.length;i++){
        let poster = posts[i]
         if(clickedName === poster.name){
          let updatedLikesNumber= ++poster.likes 
        //    const likesEl =  document.querySelector(`p[data-id="${clickedName}"]`)
        const likesEl=document.getElementById(`likes-${clickedName}`)
           likesEl.textContent = `${updatedLikesNumber} likes`

  }
    
    
    }
  
  
})