<template>
    <div id="app">
        <h2>
            <p>Vue To Do List</p>
            <p>Simple Todo List with adding and filter by diff status.</p>
        </h2>
        
        <createform ></createform>
        <div id="">
            <ul v-for="(item,index) in filteredTodoList" :key="index">
                <li>
                    <input type="checkbox" @click="checkboxOnclick(item)" /> {{item.content}}
                </li>
            </ul>
        </div>
        <div id="">
            <!-- <button @click="handleAll">All</button> -->
            <button @click="handleStatusUpdate('active')">Active</button>
            <button @click="handleStatusUpdate('completed')">Completed</button>
        </div>
    </div>
</template>

<script>
   import createform from  './components/CreateForm.vue'
    export default {
        name: 'app',
        components: { 
            createform    
        },
        data: function () {
            return {
                status:String,
                inputtingText: ""
            }
        },
        computed:{
            filteredTodoList:function(){
               return this.$store.getters.filteredTodoList;           
            },
            todoList:function(){
                return this.$store.getters.todoList;   
            }
        },
        methods:{
            handleStatusUpdate:function(status){
                this.$store.commit("currentFilterValue",status)
            },
            checkboxOnclick:function(item){
                item.status ="completed"
            }
        }
    
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
