import PRODUCTS from "../../data/dummy-data";


const initialState = {
    avaibleProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),

}
export const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case value:
            
            break;
    
        default:
            return state;
    }
}