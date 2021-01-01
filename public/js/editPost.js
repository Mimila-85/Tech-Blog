const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('delete-id')) {
        const id = event.target.getAttribute('delete-id');

        const response = await fetch(`/api/edit-post/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

const updatePost = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('update-id')){
        const id = event.target.getAttribute('update-id');
        const title = document.querySelector('.title').value.trim();
        const content = document.querySelector('.content').value.trim();

        console.log(id, title, content);

        const response = await fetch(`/api/edit-post/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

            if (response.ok) {
                document.location.replace('/profile');
            } else {
                alert('Failed to update post');
            }
    }
};

document
    .querySelector('.deletePostBtn')
    .addEventListener('click', delButtonHandler);


document
    .querySelector('.updatePostBtn')
    .addEventListener('submit', updatePost);
  