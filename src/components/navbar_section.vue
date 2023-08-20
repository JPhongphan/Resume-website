<template>
    <div class="navbar">
        <img class="logo" src="../assets/image/P.png" alt="">
        <div class="nav-menu">
            <a href="#">Home</a>
            <a href="#Education">Education</a>
            <a href="#Skill">Skill</a>
            <a href="#Project">Projects</a>
            <a href="#Contact">Contact</a>
        </div>
        <font-awesome-icon class="ham-bar" :icon="['fas', 'bars']" @click="toggleMenu()" />
    </div>
    <div class="full-memu">
        <a href="#" @click="toggleMenu()">Home</a>
        <a href="#Education" @click="toggleMenu()">Education</a>
        <a href="#Skill" @click="toggleMenu()">Skill</a>
        <a href="#Project" @click="toggleMenu()">Projects</a>
        <a href="#Contact" @click="toggleMenu()">Contact</a>
    </div>
</template>
<script>
export default {
    methods: {
        toggleMenu() {
            const fullMenuElement = document.querySelector('.full-memu');
            const topValueNum = fullMenuElement.style.top;

            if (topValueNum == '-100%') {
                fullMenuElement.style.top = '0%';

            } else {
                fullMenuElement.style.top = '-100%';
            }
        },
    },
}
</script>
<style>
.logo{
    margin: 10px 0px;
    width: 150px;
}
.navbar {
    z-index: 9999;
    width: 100%;
    min-height: 4vh;
    background-color: rgba(255, 255, 255, 0.966);
    border: 1px solid #f3f3f3;
    justify-content: space-between;
    align-items: center;
    padding: 0 28px;
    display: flex;
    position: fixed;
    top: 0;
    bottom: auto;
}

.navbar a {
    padding: 25px 15px;
    margin: 0px 5px;
    color: #333;
    font-size: 16;
    font-weight: 400;
    border-bottom: 1px solid white;
    transition: 0.5s ease;
}

.navbar a:hover {
    border-bottom: 1px solid #333;
}

.nav-menu {
    display: flex;

}

.ham-bar {
    cursor: pointer;
    display: none;
}

.ham-bar:hover {
    animation: rotateHamBar 0.5s 1;
}

@keyframes rotateHamBar {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
}

.full-memu {
    transition: 0.5s ease; 
    top: -100%;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(240, 240, 240, 0.979);
    display: none;
    position: fixed;
    z-index: 1000;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row-gap: 50px;
}

.full-memu a {
    color: #333;
}
.full-memu a:hover {
    font-weight: 600;
}
</style>