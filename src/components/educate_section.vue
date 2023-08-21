<template>
    <section id="Education">
        <div class="main-container" data-aos="fade-up"  data-aos-offset="500" data-aos-duration="700">
            <div class="sub-container" style="display: flex; flex-direction: column; gap: 20px;">
                <div  style="display: flex; flex-direction: row; justify-content: center;">
                    <img id="img-congrad" style="width: 250px; margin: 0px 20px;" src="../assets/image/congrad.png" alt="">
                    <div>
                        <h2 class="topic-header">My Education</h2>
                        <ul>
                            <li><p><strong>Naresuan University</strong> March 2019 - June 2023</p>
                            <p>Bachelor of Science (Computer Science)</p></li>
                            <li><p><strong>Nakhonsawan School</strong> 2016 - 2018 </p> 
                            <p>Hight school (English-Mathematics Program)</p></li>
                        </ul>
                    </div>
                </div>
                <div style="display: flex; flex-direction: row; justify-content: flex-start;">
                    <div id="intern-container">
                        <h2 class="topic-header">Web Developer Internship</h2>
                        <p style="margin-left: 10px;"><strong>Code Impress It Solution Co., Ltd. (ADSIDEA)</strong> November 2022 - February 2023 </p>
                        <ul>
                            <li>Created a website template with WordPress based on the requirements of the Account Executive for presentation and sales to clients</li>
                            <li>Checked and improved the client's website to align with SEO standards</li>
                            <li>Assisted the development team in customizing the UI according to the client's requirements</li>
                        </ul>
                    </div>
                    <img id="img-intern" style="width: 35%;" src="../assets/image/intern.png" alt="">
                </div>
                <div class="intern-project">
                    <img id="line-img"  src="../assets/image/Line-logo.png" alt="">  
                    <div class="container-intern-project">
                        <p align="center" style="margin: 0;"><strong>" LINE Chatbot Adsidea Co-Operative "</strong></p>
                        <ul>
                            <li><p>LINE chatbot for internship students information dissemination</p></li>
                            <li><p>Enter information to apply for an internship and then send the data to the HR department's email.</p></li>
                        </ul>
                        <p align="center">( Internship Project )</p>
                    </div>
                    <img id="QR-img"   src="../assets/image/QR-Line.png" alt="">
                    <img id="QR-img-reponsive"   src="../assets/image/QR-Line.png" alt="">
                </div> 
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>

    #Education ul li{
        list-style:circle;

    }
    #Education ul{
        padding: 0px 0px 0px 30px;
    }
    #intern-container{
        width: 65%;
    }
    #line-img, #QR-img{
        width: 200px;
    }
    .intern-project{
        margin: 10px 0px; 
        display: flex; 
        flex-direction: row; 
        background-color: #f3f3f3; 
        border-radius: 20px;
    }
    .container-intern-project{
        padding: 10px;
        display: flex; 
        flex-direction: column; 
        justify-content: center;
    }
    #QR-img-reponsive{
        display: none;
    }
</style>