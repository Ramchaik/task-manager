const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/users');
const taskRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled.');
//   } else {
//     next();
//   }
// });

// Under Maintenance middleware
// app.use((req, res, next) => {
//   res.status(503).send('Site is currently down. Check back soon!');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
	console.log('Server is up at ' + port + '...');
});


const main = async () => {
	// const task = await Task.findById('5da5f49d748ea30a746f34b4');
	// await task.populate('owner').execPopulate()
	// console.log(task.owner)

	const user = await User.findById('5da5f499748ea30a746f34b2');
	await user.populate('tasks').execPopulate();

	console.log(user.tasks)
}

main();