import { createStore } from 'redux';

const initialState = {
    isSectionProjectVisible: false,
    isSectionAboutVisible : false,
    isSectionAspirationVisible: false,
    isSectionContactVisible: false,
};



const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_PROJECTS':
            return {...state, isSectionProjectVisible: true};
        case 'HIDE_PROJECTS':
            return {...state, isSectionProjectVisible: false};
        case 'SHOW_ABOUT':
            return {...state, isSectionProjectVisible: true};
        case 'HIDE_ABOUT':
            return {...state, isSectionProjectVisible: false};
        case 'SHOW_ASPIRATIONS':
            return {...state, isSectionProjectVisible: true};
        case 'HIDE_ASPIRATIONS':
            return {...state, isSectionProjectVisible: false};
        case 'SHOW_CONTACT':
            return {...state, isSectionProjectVisible: true};
        case 'HIDE_CONTACT':
            return {...state, isSectionProjectVisible: false};
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;