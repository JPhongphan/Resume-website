<template>
    <section id="Project">
        <div class="main-container" style="flex-direction: column; justify-content: flex-start; grid-row-gap: 0px;">
            <div class="sub-container" style="display: flex; flex-direction: row; grid-column-gap: 20px;">
                <div style="display: flex; flex-direction: column;">
                    <h2 class="topic-header">My Projects</h2>
                    <p>The entire project is for educational purposes, including practicing the use of tools and frameworks, with a focus on the Front-End Web application.</p>
                    <a class="a_link" style="display: flex; flex-direction: row; align-items: center; gap: 8px; margin-bottom: 10px;"
                        href="https://github.com/JPhongphan" target="_blank">
                        <p>View all of my projects</p>
                        <font-awesome-icon style="font-size: 15px;" :icon="['fas', 'arrow-up-right-from-square']" />
                    </a>
                </div>
                <img class="img-header-project" style="width: 18%; transform: rotate(20deg); margin-bottom: 20px;"
                    src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" alt="">
            </div>
            <div class="sub-container">
                <div class="project-container">
                    <div class="card-project" v-for="(project, index) in projects" :key="index">
                        <img  style=""
                            :src="project.img" alt="">
                        <h3>{{ project.name }}</h3>
                        <p>{{ project.descrip }}</p>
                        <a class="a_link"
                            style="display: flex; flex-direction: row; align-items: center; gap: 8px; justify-content: flex-start;"
                            :href="project.url" target="_blank">
                            <p>Click to Website</p>
                            <font-awesome-icon class="icon-link-left" :icon="['fas', 'greater-than']" />
                        </a>
                    </div>
                </div>
                <div class="sub-container">
                    <div class="warning">
                        <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'circle-exclamation']" />
                        <p style="margin: 0px 10px;">"All of these projects were created for educational purposes only."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            projects: {
                project1: {
                    name: 'Fake Store API',
                    img: 'https://sv1.picz.in.th/images/2023/07/29/M6Ycs1.png',
                    url: 'https://phongphan-fake-api-store.vercel.app/',
                    descrip: 'This website is dedicated to displaying product information from the Fake Store API.',
                },
                project2: {
                    name: 'PokeDex',
                    img: 'https://sv1.picz.in.th/images/2023/07/30/M6QRtR.png',
                    url: 'https://phongphan-pokedex.vercel.app/',
                    descrip: 'This website is about pre-evolution Pokémon data using information sourced from the PokeAPI',
                }
            }
        }
    }
}
</script>
<style>
@keyframes moveLeft {
    0% {
        transform: translate(0px, 0px);
    }

    50% {
        transform: translate(10px, 0px);
    }

    100% {
        transform: translate(0px, 0px, );
    }
}

.project-container {
    gap: 15px;
    display: flex;
    flex-direction: row;
    align-items:flex-flex-start;
    justify-content: flex-flex-start;
    width: 900px;
}

.card-project {
    width: 340px;
}

.a_link {
    font-weight: 600;
    color: var(--font-color);
}

.a_link p {
    font-weight: 600;
    margin: 0px;
}

.topic-header {
    color: var(--font-color);
    font-size: 35px !important;
}

.icon-link-left {
    font-size: 15px;
}

.card-project a:hover .icon-link-left {
    animation: moveLeft 1s infinite;
}
.warning{
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    padding: 0px 20px; 
    background-color: #EFEFEF; 
    width: 100%; 
    height: 50px; 
    margin-top: 50px; 
    border-left: 5px solid #bdbdbd; 
    border-radius: 10px;
}
</style>