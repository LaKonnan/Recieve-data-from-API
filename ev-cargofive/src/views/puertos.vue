<template>
  <div class="seaports">
    <!-- (EN) Page title / (ES) Titulo de pagina -->
    <h1 id="page-title">SEAPORTS</h1>
    <hr>

    <!-- (EN) Seaports table / (ES) Tabla de puertos maritimos-->
    <table-content/>

  </div>
</template>

<script>
    export default {
        // (EN) Import table component / (ES) Importar componente de tabla 
        components: {
            'table-content': require('@/components/table.vue').default
        }
    }
</script>

<style>
    /* (EN) Page title style / (ES) Estilo de titulo de pagina */
    #page-title {
        font-weight: bold;
        margin: 10px 0 10px 0;
        color: #242527;
    }
</style>