function createTodoItem(title, descr, dueDate, priority) {
    return {
        title: title,
        description: descr,
        dueDate: dueDate.toJSON(),
        priority: priority, /*Eventually do a check to ensure it is either
         'low', 'medium', or 'high'; think about where to put it! 
         Could also be an unspecified value.*/
        done: false,
    }
}

export {
    createTodoItem,
};