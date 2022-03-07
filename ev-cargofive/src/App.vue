<template>
  <!-- (EN) Basic app content/ (ES) Contenido basico de la aplicacion-->
  <div id="app">
    <!-- (EN) Superior bar/ (ES) Barra superior -->
    <b-navbar id="navbar">
      <!-- (EN) Open sidebar button/ (ES) Boton para abrir barra lateral-->
      <p class="h1" @click="slideSidebar()">
        <b-icon :icon="icon_sidebar"></b-icon>
      </p>

      <h3>APP NAME</h3>
    </b-navbar>

    <!-- (EN) Sidebar or menu / (ES) Barra lateral o menu-->
    <div id="sidebar" class="sidebar">

      <!-- (EN) User data / (ES) Datos de usuario -->
      <div id="user-info">
        <img src="user_img.png" alt="">
        <p>Name Lastname</p>
        <hr>
      </div>

      <!-- (EN) Menu / (ES) Menu-->
      <div id="menu" v-for="item in menu_list" :key="item.id">
        <div :class="item.class">
          <a href="">
            <b-icon :icon="item.icon"></b-icon>
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>

    <!-- (EN) Content / (ES) Contenido -->
    <div id="content">
      <router-view/>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    // (EN) Variables / (ES) Variables
    return {
      icon_sidebar: "list",
      menu_list: [
        { id: 0, icon: "house-fill", name: "Home", url: "#" , class: "element"},
        { id: 1, icon: "list-ul", name: "Seaports", url: "#" , class: "element-active"}
      ]
    }
  },

  methods: {
    // (EN) Slide sidebar method / (ES) Metodo para deslizar barra lateral
    slideSidebar() {
      // (EN) Variables / (ES) Variables
      var width;
      var width_content;
      var padding;

      // (EN) Set button icon to open or close sidebar/ (ES) Establecer icono de boton para abrir o cerrar barra lateral
      switch(this.icon_sidebar) {
        case "list":
          this.icon_sidebar = "x";
          width = "270px";
          width_content = "335px"
          padding = "20px";
          break;

        case "x":
          this.icon_sidebar = "list";
          width = "0px";
          width_content = "65px"
          padding = "0px";
          break;
      }

      // (EN) Adjust content margin/ (ES) Ajustar margen de contenido 
      document.getElementById("sidebar").style.width = width;
      document.getElementById("sidebar").style.padding = padding;
      document.getElementById("navbar").style.marginLeft = width;
      document.getElementById("content").style.marginLeft = width_content;
    },
  },
}
</script>

<style lang="scss">
  /* (EN) Import font / (ES) Importar fuente */
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');

  #app {
    font-family: 'Ubuntu', sans-serif;
  }

  /*  (EN) Navbar style/ (ES) Estilo de barra superior */
  .navbar {
    background-color: #3F826D !important;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  }

  .navbar p{
    margin: 0;
  }

  .navbar p, .navbar h3 {
    color: #F7F7FF;
  }

  .navbar h3 {
    margin-bottom: 3px;
    margin-left: 20px;
    font-weight: bold;
  } 

  .navbar p:hover {
    cursor: pointer;
  }

  /*  (EN) Sidebar style / (ES) Estilo de barra lateral*/
  .sidebar {
    /*  (EN) Design / (ES) Disenio*/
    height: 100%;
    width: 0;
    background-color: #545E75;
    
    /*  (EN) Position / (ES) Posicion */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    overflow-x: hidden;
    transition: 0.5s;
  }

    #user-info {
    text-align: center;
  }

  #user-info img {
    width: 220px;
    border-radius: 100%;
  }

  #user-info p {
    margin-top: 10px;
    font-size: 20px;
    color: #F7F7FF;
  }

  #menu {
    width: 100%;
  }

  .element, .element-active {
    width: 100%;
    padding: 5px;
    border-radius: 20px;
    margin-bottom: 5px;
    transition: 0.2s;
  }

  .element:hover {
    background-color: #5f6b86;
  }

  .element-active {
    background-color: #3F826D;
  }

  .element-active a {
    font-weight: bold;
  }

  #menu .b-icon  {
    margin-left: 5px;
  }

  #menu a {
    text-decoration: none;
    color: #F7F7FF;
    font-size: 17px;
  }

  /*  (EN) Content style / (ES) Estilo de contenido*/
  #content {
    margin-left: 65px;
    margin-right: 65px;
  }

  #content, #navbar {
    transition: margin-left 0.5s;
  }



  

  
</style>
