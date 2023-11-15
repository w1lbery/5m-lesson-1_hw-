import { useState } from "react"


const CreatePostPage = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const handleSubmit = (e) => {
      e.preventDefault()

		const postData = {
			title: title,
         body: body,
		};

		fetch('https://dummyjson.com/posts', {
			method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(postData),
		})
			.then((res) => {
				if (res.ok === 201) {
					console.log("Post created successfully");
					setTitle('');
					setBody('');
				} else {
					console.log("Something went wrong");
					setTitle('');
					setBody('');
				}
			})
			.catch((err) => {
				console.log("Error: " + err);
			})

   }


	return (
		<div>
			<h2>Create Post</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					style={{marginRight:"15px",}}
				/>
				<textarea
					placeholder="Body"
					value={body}
					onChange={(e) => setBody(e.target.value)}
					style={{width:"150px", height:"16px", marginRight:"15px"}}
				/>
				<button type="submit">Create Post</button>
			</form>
		</div>
	)
}

export default CreatePostPage	