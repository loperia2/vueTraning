import * as Vue from 'vue/dist/vue.esm-bundler.js'
import { resolveTransitionHooks } from 'vue/dist/vue.esm-bundler.js'
    
    const num = {
        props:[
            'number'
        ],
        template:`
            <button
            :class="getClass(number)"
            @click=click()
            >
            
                {{number}}
    
            </button>

        `,
        methods:{
            click(){
                this.$emit('choosen',this.number)
            },
            isEven(val){
                return val%2===0
            },
            getClass(val){
                return this.isEven(val) ? 'blue' :'red'
            },
        }
        
    }
    const app= Vue.createApp({
        components:{
            num
        },
        template:`
            
            <num
                v-for='number in numbers'
                :number='number'
                @choosen="addNumber"
            />
            <hr/>
            <num
                v-for='number in numberHistory'
                :number='number'
            />
            
        `,  
        
        data() {
            return {
          
                count:0,
                numbers:[1,2,3,4,5,6,7,8,9,10],
                numberHistory:[],
                value:['a'],
        
            }
        },
        methods:{
            addNumber(number){
                console.log('number',number)
                this.numberHistory.push(number)
                console.log(this.numberHistory)
            }        
        },
        computed:{
            
        }
    })
    
    app.mount('#app')