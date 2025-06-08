const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: String,
    password: String,
    name: String
});

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    done: Boolean
});

const UserModel = mongoose.model('users',Users);
const TodoModel = mongoose.model('todos',Todos);

module.exports={
    UserModel : UserModel,
    TodoModel : Todomodel
}