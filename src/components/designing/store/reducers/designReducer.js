const initialState = {
    designs: [
        { id: 1, name: "One", tshirtColor: "black" },
        { id: 2, name: "Two", tshirtColor: "blue" }
    ]
}

const designReducer = (state = initialState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'SAVE_DESIGN':
            console.log('Design saved in Database', action.design);
    }
    return state;
}

export default designReducer;