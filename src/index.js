import * as Vue from 'vue/dist/vue.esm-bundler.js'
    
    const app= Vue.createApp({
        
        template:`
            <button
                @click=increment
            >
                Arttır
            </button>
            <p>{{count}}</p>
            <input 
                :value='value'
                @input='input'
            />
            <p>{{value}}</p> 
            <div
                v-if=isEven()
            >
                Even
            </div>
            <div
                v-else
            >
                Odd
            </div>
            <div
                v-for='number in numbers'
                :class="getClass(number)"
            >
                {{number}}
                <span 
                    v-if=isEven(number)
                >
                    Even
                </span>
                <span 
                    v-else
                >Odd
                </span>
            
            </div>
            <br>
            <div
                v-for='evenNumber in evenList'
            >
                {{evenNumber}}
            </div>
        `,  
        
        data() {
            return {
          
                count:0,
                numbers:[1,2,3,4,5,6,7,8,9,10],
                value:'user'
        
            }
        },
        methods:{
            increment(){
                this.count+=1
            },
            isEven(val){
                return val%2===0
            },
            getClass(val){
                return this.isEven(val) ? 'blue' :'red'
            },
            input($event){
                this.value=$event.target.value   
            }
        },
        computed:{
            evenList(){
                return this.numbers.filter(num => this.isEven(num))
            }
        }
    })
    
    app.mount('#app')