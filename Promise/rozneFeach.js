fetch("https://jsonplaceholder.typicode.com/users")
	.then(resp => resp.json())
	.then(resp => {
		console.log(resp[0]);
	});

fetch("https://jsonplaceholder.typicode.com/users")
	.then(resp => resp.json())
	.then(resp => {
		console.log(resp[0].username);
		console.log(resp[0].address);
	});


fetch("https://jsonplaceholder.typicode.com/users")
	.then(resp => resp.json())
	.then(resp => {
		const user = resp[0]
		for (const key in user) {
			console.log(key + " - " + user[key])
		}
	});

fetch("https://jsonplaceholder.typicode.com/users")
	.then(resp => resp.json())
	.then(resp => {
		const user = resp[0].address
		for (const key in user) {
			console.log(key + " - " + user[key])
		}
	});


fetch("https://jsonplaceholder.typicode.com/users")
	.then(resp => resp.json())
	.then(resp => {
		resp.forEach((i) => {
			for (const key in i) {
				console.log(i[key])
			}
		})
	});
