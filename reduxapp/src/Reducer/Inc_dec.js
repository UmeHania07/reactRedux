
//mere pass bhut sare multiple reducer hosakhty hn but mai in sab ko apne ROOT Reducer mai import krna h "Index2.js"
const initialState = 0;

const Inc_dec = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;

        case "DECREMENT":
            return state - 1;
            
        default: return state;
    }
}

export default Inc_dec
