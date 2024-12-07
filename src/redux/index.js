import { createStore } from "redux"

const init = { users: [] }

const counterReducer = (state=init, action) => {
    switch (action.type) {
        case "ADD":
            return {users: [...state.users, action.value]}
            break;
    
        default:
            break;
    }
}

export const store = createStore(counterReducer)