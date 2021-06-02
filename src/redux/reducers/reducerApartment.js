import {apartmentData} from '../../fakeData/fakeData'
const initialState = {
	apartmentDetail: [],
	apartmentList: apartmentData
}

const apartmentReducer = (state=initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_APARTMENT_DETAIL': {
			const newState = {
        ...state,
        apartmentDetail: [action.payload],
      };
			return newState;
		}
		// case 'REMOVE_APARTMENT_DETAIL': {
		// 	return state
		// }
		default: {
			return  state
			}
	}
}
export default apartmentReducer;