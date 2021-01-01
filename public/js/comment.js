const initial = () => {
    document.querySelector('.newComment').style.display = "none";
}

const writeCommentBtn = (event) => {
    event.preventDefault();

    document.querySelector('.newComment').style.display = "block";

}
const newCommentHandler = async (event) => {
    event.preventDefault();

    document.querySelector('.newComment').style.display = "none";
    
    if (event.target.hasAttribute('post-id')){
        const post_id = event.target.getAttribute('post-id');
        const comment = document.querySelector('#comment').value.trim();
        
    
        if (comment) {
            const response = await fetch(`/api/comment`, {
                method: 'POST',
                body: JSON.stringify({ comment, post_id }),
                headers: {
                'Content-Type': 'application/json',
                },
            });
        
            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('Failed to create comment');
            }
        }
    }
};

document
    .querySelector('.writeComment')
    .addEventListener('click', writeCommentBtn);

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newCommentHandler);