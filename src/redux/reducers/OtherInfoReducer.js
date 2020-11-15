import * as types from '../../constants'


const initialState = {
    shipPrice:'',
    discountPercent:'',
    address:'7 Dong Quan,Quan Hoa,Cau Giay',
    distance:1,
    note:''
}



const otherInforReducer = (state = initialState, actions) => {
    // console.log('action set users 111',actions)
    const newOtherInfo = {...state}
    switch (actions.type) {
        case types.SET_TEXT_NOTE:
            console.log('action',actions)
            newOtherInfo.note = actions.text
            return newOtherInfo;
            break;
        case types.SET_OTHER_INFOR_ACCOUNT:
            newOtherInfo.shipPrice = actions.shipPrice
            newOtherInfo.discountPercent = actions.discountPercent
            console.log('other info ',newOtherInfo)
            return newOtherInfo;
            break;
        default:
            return {...state}
    }
}


export default otherInforReducer