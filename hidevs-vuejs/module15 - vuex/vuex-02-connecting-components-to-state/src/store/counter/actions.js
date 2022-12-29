export default{
    increment(context){
        setTimeout(function(){
            context.commit('increment')
        }, 1000)
    },
    increase(context,payload){
        setTimeout(function(){
            context.commit('increase', payload)
        }, 1000)
    }
}