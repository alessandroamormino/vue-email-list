const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: [],
        emailList: [],
      }
    }, 
    created(){
        for(let i=0; i<10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                if(res.data.success){
                    this.emails.push(res.data.response);
                }
            });
        }
    },
    methods: {
        getTenRandomEmail(){

            if(this.emails.length == 10){
                this.emailList = [...this.emails];
            }
        
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                    if(res.data.success){
                        this.emails.push(res.data.response);
                    }
                });
            }

            this.emails = [];

        }
    }, 

  }).mount('#app')