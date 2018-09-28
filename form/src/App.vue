<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="text" id="email" class="form-control" :input='userData.email' @input='userData.email=$event.target.value'>
                        {{userData.email}}
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy.trim="userData.pwd">
                                <!-- input中的.lazy修饰符相当于onblur事件 -->
                                <!-- input中的.trim去掉前后空格 中间空格合为一个 -->
                                <!-- input中的.number限制只能输入数字 -->
                                <!-- vue 中的.prevent 同来组织默认事件 -->
                                <p>{{userData.pwd}}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model.number="userData.age">
                                <p>{{userData.age}}</p>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="userData.message"></textarea>
                            <p style="white-space: pre">{{userData.message}} </p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="userData.sendmail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                   v-model="userData.sendmail"> Send Infomail
                        </label>                       
                        <p v-for="(item, index) in userData.sendmail" :key="index">{{item}} </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="userData.gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                 v-model="userData.gender"> Female
                    </label>
                    <p>{{userData.gender}} </p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="userData.selectedPriority">
                        <option v-for="(priority, index) in priorities" :key="index"
                         :value="priority.value"> {{priority.text}} </option>
                    </select>
                    <p>{{userData.selectedPriority}} </p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button class="btn btn-primary"
                    @click.prevent="submitted">Submit!</button>
                </div>
            </div>
        </form>
        <hr>   
    </div>
</template>

<script>
    export default {
      data:function(){
        return{
          userData:{
            email:'',
            pwd:'',
            age:'',
            message:'',
            sendmail:[],
            gender:'',
            selectedPriority:"M",            
          },
          priorities: [
            {text:'High',value:'H'}, 
            {text:'Medium',value:'M'},
            {text:'Low',value:'L'}
          ],
        }
      }
    }
</script>

<style>

</style>
