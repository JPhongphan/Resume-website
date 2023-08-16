<template>
  <nav>
    <Navbar_comp />
  </nav>
  <div>
    <intro_section />
    <educate_section />
    <skill_section />
    <project_section />
    <contact_section />
  </div>
  <footer>
    <Footer_comp />
  </footer>
</template>
<script>
import intro_section from './components/intro_section.vue';
import educate_section from './components/educate_section.vue';
import skill_section from './components/skill_section.vue';
import project_section from './components/project_section.vue';
import contact_section from './components/contact_section.vue';
import Navbar_comp from './components/navbar_section.vue';
import Footer_comp from './components/footer_section.vue';

export default {
  components:{
    Navbar_comp:Navbar_comp,
    intro_section:intro_section,
    educate_section:educate_section,
    skill_section:skill_section,
    project_section:project_section,
    contact_section:contact_section,
    Footer_comp:Footer_comp,
  }
}
</script>
<style>
</style>