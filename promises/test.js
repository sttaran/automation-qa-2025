function fetchPostById(id) {
    return fetch(`https://jsonplaceho1lder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .catch((err) => {
            console.log("INNER Fetch error:", err.message);
            throw err;
        })
}

const id= 1

fetchPostById(id)
    .then((post) => {
        if (!post){
            throw new Error("Post not found");
        }

        if (post.id !== id) {
            throw new Error("Post ID mismatch");
        }

    })
    .catch((err) => {
        console.log("OUTER Fetch error:", err.message);
    })

