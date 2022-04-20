import mongoose from "mongoose";

interface Todo_I {
    title: string;
    description: string;
}

interface TodoDocument extends mongoose.Document {
    title: string;
    description: string;
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

interface todoModelInteface extends mongoose.Model<TodoDocument> {
    set(x: Todo_I): TodoDocument;
}

todoSchema.statics.set = (x: Todo_I) => {
    return new Todo();
}

const Todo = mongoose.model<TodoDocument, todoModelInteface>(
    "Todo",
    todoSchema,
)

Todo.set({
    title: "Some Title",
    description: "Some Description"
});

export { Todo };