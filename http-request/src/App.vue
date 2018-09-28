<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                	<label>Title</label>
					        <input class="form-control" type="text" v-model="comment.title">
                </div>
                <div class="form-group">
                	<label>Content</label>
					        <input class="form-control" type="text" v-model="comment.content">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
            	<hr>
            	<button class="btn btn-primary" @click="fetchData">Get data</button>
            	<ul class="list-group" >
            		<li class="list-group-item" v-for="(c, index) in comments" :key="index">
            			{{c.title}} -- {{c.content}}
            		</li>

            	</ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    	data(){
    		return {
    			comment:{
    				title:'',
    				content:''
    			},
    			comments:[]
    		}
    	},
    	methods:{
    		// submit/fetchData可以利用NodeJs教程中的11.course-basicNodeJs-express-datalist的commentData操作
    		//
    		submit(){
          // Post提交数据
         // this.$http.post('').then(response=>{},error=>{});
    		  /* 	this.$http.post('',this.comment)
            .then(response=>{
              console.log(response);
            },error=>{
              console.log(error);
            }); */
            // 利用resource方式进行数据存储操作
            // this.resource.save({},this.comment); 
               this.resource.saveAlt(this.comment);
    		},
    		fetchData(){
          // Get获取数据     
          // this.$http.get('').then(response=>{},error=>{}).then(data=>{}) ;    
    			 /* this.$http.get('')
    			.then(response=>{
    				return response.json();
    				 console.log(response.json())
    			},error=>{
    				console.log(error)
    			}).then(data=>{
    				//console.log(data)
    				const resultArray = [];
    				for(let key in data){
    					resultArray.push(data[key]);
    				}
    				this.comments = resultArray;
          });  */
        this.resource.getData().then(response=>{
          return response.json();
        }).then(data=>{
            const resultArray = [];
            for(let key in data){
            resultArray.push(data[key]);
            }
            this.comments = resultArray;
          });           
        },        
      },
      created(){
            const customActions = {
                saveAlt:{method:'POST',url:''},
                getData:{method:'GET'}
            };

            this.resource = this.$resource('',{},customActions);
            // console.log(this.resource);
        }
    }
</script>

<style>
</style>
