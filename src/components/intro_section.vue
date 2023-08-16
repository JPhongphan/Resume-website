<template>
    <section id="Intro">
        <div class="main-container" style="flex-direction: column; grid-column-row: 0px;">
            <div class="" style="display: flex; flex-direction: row;">
                <div class="sub-container">
                    <div class="intro-section">
                        <div class="img-person"
                            style="width: 180px; height: 180px; background: var(--font-color); border-radius: 100px;" />
                        <h2>🎉 Hello my name is Phonphan Prangmas</h2>
                        <h1>Front End Developer</h1>
                        <p>"If you are looking for a team member for development, <br>I am confident that you have found the right person."</p>
                        <button class="button-style" @click="scrollToContact">Contact Me</button>
                    </div>
                </div>
                <div class="img-intro" style="display: flex; align-items: center; background-color: rgb(255, 255, 255);">
                    <img style="width: 250px;"
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Ski_trail_rating_symbol_black_circle.png"
                        alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        scrollToContact() {
            const contactSection = document.getElementById("Contact");
            if (contactSection) {
                // ใช้คำสั่ง scrollTo ในการเลื่อนไปยังส่วนที่มี ID เป็น "contact"
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
}
</script>
<style>
.intro-section {
    text-align: start;
}

.button-style {
    cursor: pointer;
    position: relative;
    margin: 20px 0px;
    color: white;
    padding: 20px 45px;
    font-size: 16px;
    font-weight: 600;
    border: 2px solid var(--font-color);
    border-radius: 15px;
    box-shadow: 1px 5px rgb(134, 134, 134);
    background: var(--font-color);
    transform: translate(0px, -10px);
    transition: 0.5s ease;
}

.button-style:hover {
    background: white;
    color: #333;
    transform: translate(0px, 0px);
    transition: 0.5s ease;
    box-shadow: none;
}

.main-container h1 {
    font-size: 48px;
    margin: 10px 0px;
}

.main-container h2 {
    font-size: 18px;
    margin: 0px 0px;
}

.img-person {
    display: none;
}

.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25vh 5vh;
    width: 100%;
    height: max-content;
    border: 1px solid white;
    gap: 20px;
}

.sub-container {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(255, 255, 255);
}</style>