<template>
    <div id="addTodoList">
            <input  type="text"  :value="inputtingText" @change="handleChange">
            <button @click = "handleAdd">
                Add
            </button>
    </div>
</template>

<script>
   
    export default {
        name: 'create-form',
        components: {     
        },
        data: function () {
            return{
                inputtingText:""
            }
        },
        computed:{
            
        },
        methods:{
             handleChange:function(event){
                this.inputtingText = event.target.value;
            },
            handleAdd:function(){
                this.$store.commit("todoListValue",this.inputtingText)
            }
        }
    }
</script>

<style>
    
 
</style>
