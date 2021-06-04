<template>
    <div class="label">
        <label :for="name"> {{name}} </label>
    </div>
    <input 
        :id="name"
        :value="value"
        @input="input"
        :type="type"
    
    />
    <div 
        class="error">
        {{error}}
    </div>
</template>
<script>
export default {
    emits:['update'],
    props:{
        type:{
            type:String,
            default:'text'
        },
        name:{
            type: String,
            required: true
        },
        rules:{
            //required: boolean
            //min :number
            type:Object,
            default:{

            }
        },
        value:{
            type: String,
            required: true
        },
        error:{
            type: String,
            required: true
        }
    },
    created(){
        this.$emit('update',{
                name: this.name.toLowerCase(),
                value:this.value,
                error:this.validate(this.value)
            })
    },
    methods:{
        input($event){
            this.$emit('update',{
                name: this.name.toLowerCase(),
                value:$event.target.value,
                error:this.validate($event.target.value)
            })
        },
        validate(value){
            if(this.rules.required && value.length === 0){
                return 'Value is required'
            }
            if(this.rules.required && value.length<this.rules.min){
                return `Need more than ${this.rules.min} characters`
            }
        }
    }
}
</script>
<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 150px;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}

</style>