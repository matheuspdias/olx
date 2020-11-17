const initialState = {
    token: '',
    name: 'Visitante',
    phone : '',
    city: ''    
};

const UserReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_TOKEN':
            return { ...state, token:action.payload.token }
        break;
        case 'SET_NAME':
            return { ...state, name:action.payload.name }
        break;
        case 'SET_PHONE':
            return { ...state, phone:action.payload.phone }
        break;
        case 'SET_CITY':
            return { ...state, city:action.payload.city }
        break;
    }

    return state;
};

export default UserReducer;