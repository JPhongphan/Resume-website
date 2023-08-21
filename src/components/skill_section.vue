<template>
    <section id="Skill">
        <div class="main-container" style="border: #F7F7FA; flex-direction: column;">
            <h2 class="topic-header" data-aos="fade-down" data-aos-duration="700">My Skill</h2>
            <div class="sub-container" id="skill-sub-container">
                <div data-aos="fade-up" data-aos-duration="700" v-for="(skill, index) in skill_imgs " :key="index"  class="skill-card">
                    <img class="skill-img" :src="skill.img" alt="">
                    <p style="padding-top: 5px;">{{ skill.percent }}</p>
                </div>
            </div>
        </div>
        <div class="div-person">
            <img id="person" data-aos="fade-right" data-aos-duration="900" style="width: 140px;" src="../assets/image/person.png" alt="">
            <p style="margin-top: 30px; font-weight: 600;" data-aos="fade-up" data-aos-duration="900">" Ready to learn new skills to develop myself and stay abreast of changes. "</p>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            skill_imgs:{
                skill1:{
                    img:require('../assets/image/skill-html.png'),
                    percent:"Proficiency in HTML : 80%",
                },
                skill2:{
                    img:require('../assets/image/skill-css.png'),
                    percent:"Proficiency in CSS : 70%",
                },
                skill3:{
                    img:require('../assets/image/skill-js.png'),
                    percent:"Proficiency in JavaScript : 50%",
                },
                skill4:{
                    img:require('../assets/image/skill-vue.png'),
                    percent:"Proficiency in Vue : 30%",
                },
                skill5:{
                    img:require('../assets/image/skill-php.png'),
                    percent:"Proficiency in PHP : 30%",
                },
                skill6:{
                    img:require('../assets/image/skill-wp.png'),
                    percent:"Proficiency in WordPress : 50%",
                }
            }
        }
    },
}
</script>
<style>
    section#Skill{
        position: relative;
        background-color: #F7F7FA;
    }
    .div-person{
        display: flex;
        flex-direction: row;
        bottom: 0;
        position: absolute;
    }
    .skill-img{
        width: 100%;
    }
    .skill-card{
        width:250px;
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        flex-wrap: wrap;
        text-align: center; 
        background-color: white; 
        padding: 10px 10px 2px 10px; 
        border-radius: 10px; 
        box-shadow: 1px 2px 10px rgb(214, 214, 214);
        transition: 0.5s ease;
    }
    .skill-card:hover{
        box-shadow: none;
        transition: 0.5s ease;
    }
    .sub-container#skill-sub-container{
        background-color: #F7F7FA; 
        display: flex; 
        flex-direction: row; 
        justify-content: space-evenly; 
        grid-column-gap: 20px; 
        flex-wrap: wrap; 
        grid-row-gap: 20px;
    }
</style>