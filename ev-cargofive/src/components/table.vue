<template>
  <div class="seaports">
    <!-- (EN)  Filter by key word or letter / (ES) Filtrar por palabra o letra clave -->
    <b-input id="search" v-model="keyword" placeholder="Search..." v-on:keyup="setPagination()"></b-input>
    
    <!-- (EN) Seaports table/ (ES) Tabla de puertos maritimos -->
    <b-table 
        id="seaports-table"
        striped 
        hover 
        :items="table_content"
        :filter="keyword"
        :per-page="perPage"
        :current-page="currentPage">
    </b-table>

    <!-- (EN) Table pagination / (ES) Paginado de tabla-->
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="seaports-table"
        first-number
        last-number
    ></b-pagination>

  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        // (EN) Variables / (ES) Variables
        return {
            table_content: [],
            rows: 0,
            perPage: 10,
            currentPage: 1,
            keyword: null,
        }
    },

    mounted () {
        // (EN) Get data from API / (ES) Obtener datos desde la API
        axios.get("http://apitest.cargofive.com/api/ports").then((response) => {
            this.table_content =  response.data.data
            this.rows = this.table_content.length
        })
    },
    
    methods: {
        // (EN) Set pagination numbers / (ES) Ajustar numeros de paginado
        setPagination() {
            // (EN) Variables / (ES) Variables
            var rows1 = 0;
            var name = null;
            var country = null;
            var continent = null;

            for(var i = 0; i < this.table_content.length; i++) {
                // (EN) Set variables / (ES) Definir variables
                name = this.table_content[i].name;
                country = this.table_content[i].country;
                continent = this.table_content[i].continent;

                if(name.includes(this.keyword) || country.includes(this.keyword) || continent.includes(this.keyword)) {
                    rows1 += 1;
                }

                this.rows = rows1;
            }
        }
    }
}

</script>
5
<style>
    #page-title {
        font-weight: bold;
        margin: 10px 0 10px 0;
        color: #242527;
    }

    #search {
        border-radius: 20px;
        margin-bottom: 10px;
    }

    #seaports-table thead {
        background-color: #3F826D;
        color: #ffff;
        text-transform: uppercase;
        border-radius: 20px !important;

    }

    #seaports-table th:first-child {
        border-radius: 20px 0 0 0;
    }

    #seaports-table th:last-child {
        border-radius: 0 20px 0 0;
    }
    
    .pagination {
        justify-content: center;
    }

    .page-item .page-link {
        text-decoration: none;
        color: #242527 ;
    }

    .page-item .page-link:hover {
        color: #3F826D;
    }

    .page-item.active .page-link {
        background-color: #3F826D !important;
        border: 1px solid #3F826D !important;
    }
</style>