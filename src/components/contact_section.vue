<template>
    <section id="Contact">
        <div class="main-container" style="flex-direction: column; justify-content: flex-start; grid-row-gap: 0px;">
            <div class="" style="display: flex; flex-direction: row; align-items: center; gap: 50px;">
                <img data-aos="zoom-out" data-aos-duration="700" src="https://sv1.picz.in.th/images/2023/08/11/MF8hX9.png" alt="" class="contact-img">
                <div class="sub-container">
                <h2 class="topic-header" data-aos="fade-left" data-aos-duration="700">Contact</h2>
                <p data-aos="fade-left" data-aos-duration="700">Come join the event together and then let me know by sending me a message.</p>
                <form data-aos="fade-left" data-aos-duration="700" class="contact-form" action="" style="display: flex; flex-direction: column;" @submit.prevent="sendEmail">
                    <label>Email Address</label>
                    <input type="email" name="email" id="email"  v-model="email" placeholder="example@gmail.com" required>
                    <label>Name</label>
                    <input type="text" name="name" id="name" v-model="name" placeholder="John Doe" required>
                    <label>Message</label>
                    <input id="message" name="message" v-model="message" placeholder="Contact message . . ." required>
                    <button type="submit">Submit</button>
                </form>
                <div class="icon-contact">
                    <a data-aos="fade-up" data-aos-duration="900" href="https://www.facebook.com/profile.php?id=100090657341253" target="_blank">
                        <div class="icon">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </div>
                    </a>
                    <a data-aos="fade-up" data-aos-duration="1100" href="https://www.twitch.tv/nuengphann" target="_blank">
                        <div class="icon">
                            <font-awesome-icon :icon="['fab', 'twitch']" style="font-size: 38px;"/>
                        </div>
                    </a>
                    <a data-aos="fade-up" data-aos-duration="1300" href="https://www.youtube.com/" target="_blank">
                        <div class="icon">
                            <font-awesome-icon :icon="['fab', 'youtube']" style="font-size: 38px;"/>
                        </div>
                    </a>
                    <a data-aos="fade-up" data-aos-duration="1500" href="https://github.com/JPhongphan" target="_blank">
                        <div class="icon">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
            sendEmail() {
            const mailtoLink = `mailto:phongphan.prm@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
            `Email: ${this.email}\nName: ${this.name}\nMessage: ${this.message}`
      )}`;
      window.location.href = mailtoLink;
    }
  }
}
</script>
<style>
    .contact-img{
        display: block;
        width: 300px;
        height: 300px;
       
    }
    .icon-contact .icon{
        cursor: pointer;
        display: flex; 
        align-items: center; 
        justify-content: center; 
        width: 60px; 
        height: 60px; 
        background-color: #333; 
        color: white; 
        font-size: 50px;  
        border-radius: 300px;
        transform: translate(0px, -10px);
        transition: 0.5s ease;
        box-shadow: 0.5px 5px rgb(134, 134, 134);
    }
    .icon-contact .icon:hover{
        background: white;
        color: #333;
        transform: translate(0px, 0px);
        transition: 0.5s ease;
        box-shadow: none;
    }
    #Contact .sub-container{
        display: flex; 
        flex-direction: column; 
        grid-column-gap: 20px; 
       
    }
    .icon-contact{
        display: flex; 
        flex-direction: row; 
        justify-content: center; 
        gap: 20px; 
        font-size: 38px;
    }
    .contact-form input{
        outline: none;
        border: 1px solid rgb(199, 199, 199);
        border-radius: 10px;
        margin-bottom: 10px 5px;
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }
    #message{
        padding: 10px 10px 35px 10px;
    }
    .contact-form label{
        margin-bottom: 5px;
        font-weight: 600;
    }
    .contact-form button{
        cursor: pointer;
        position: relative; 
        margin: 20px 0px 40px 0px;
        color: white;
        padding: 15px 0px;
        font-size: 16px;
        width: 100%;
        font-weight: 600;
        border: 2px solid var(--font-color);
        border-radius: 15px;
        box-shadow: 1px 5px rgb(134, 134, 134);
        background: var(--font-color);
        transform: translate(0px, -10px);
        transition: 0.5s ease;
    }
    .contact-form button:hover{
        background: white;
        color: #333;
        transform: translate(0px, 0px);
        transition: 0.5s ease;
        box-shadow: none;
    }
</style>