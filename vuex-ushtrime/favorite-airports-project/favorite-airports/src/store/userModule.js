export default{
    namespaced: true,
    state(){
        return{
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    getters: {
        fullname(state) {
            return state.firstName + " " + state.lastName
        },
    }

}