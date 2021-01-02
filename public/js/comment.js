const initial = () => {
    document.querySelector('.newComment').style.display = "none";
}

initial();

const writeCommentBtn = (event) => {
    event.preventDefault();

    document.querySelector('.newComment').style.display = "block";

}

const newCommentHandler = async (event) => {
    event.preventDefault();
    
    const post_id = document.querySelector('.saveComment').getAttribute('post-id');
    const comment = document.querySelector('#comment').value.trim();
    console.log(post_id, comment);

    if (comment) {
        const response = await fetch(`/api/posts/${post_id}/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id }),
            headers: {
            'Content-Type': 'application/json',
            },
        });
    
        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to create comment');
        }
    }
    initial();
};

document
    .querySelector('.writeComment')
    .addEventListener('click', writeCommentBtn);

document
    .querySelector('.saveComment')
    .addEventListener('click', newCommentHandler);

