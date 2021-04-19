export default addName = e => ({
    type: "ADD_NAME",
    payload: {name: e.target.name}
})