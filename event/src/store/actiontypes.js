const actiontypes = () => {
    return {
        todoCatalog: {
            set: 'TODO_CATALOG_SET'
        },
        todo: {
            set: 'TODO_SET',
            clear: 'TODO_CLEAR'
        }
    }
}

export default actiontypes;