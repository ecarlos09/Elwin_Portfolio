export default fetchInit = () => ({
    type: "FETCH_INIT"
})

export default addName = e => ({
    type: "ADD_NAME",
    payload: e.target.name
})