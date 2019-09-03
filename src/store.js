export default{
    strict :true,
    state: {
        // 应用的数据
        inputtingText:String,
        todoList: [
            {content:"吃蛋",status:"active" },
            {content:"睡觉",status:"active" },
            {content:"打豆豆",status:"completed" },
        ],
        currentFilter: 'active'
      },
    getters:{
        todoList:function(state){
            state.todoList.push ({
                content:state.inputtingText,
                status :"active"
            })
        },
        filteredTodoList:function(state){
            let filteredList =[]
            for (let index = 0; index < state.todoList.length; index++) {
               const element = state.todoList[index];
               if(element.status == state.currentFilter || state.currentFilter=="all"){
                   filteredList.push(element);
                }                   
            }
           return filteredList;
        }
    },
    mutations:{
        todoListValue:function(state){
            state.todoList.push ({
                content:state.inputtingText,
                status :"active"
            })
        },
        currentFilterValue:function(state,status){
            state.currentFilter=status
        }
        
    }

}