<template>
    <div id="whole-box">
        <v-toolbar 
            dense 
            prominent
            id="tune-toolbar">
            <v-container  
                fill-height 
                fluid>
                <v-icon size="24" color="#999999">mdi-tune</v-icon>
                <p id="filter-title">FILTROS</p>
                <v-spacer></v-spacer>
                <v-btn min-width="48" height="48" color="#FFFFFF">
                    <v-icon size="20" color="#666666" v-on:click="closeTuneMenu()">mdi-close</v-icon> 
                </v-btn>
            </v-container>
        </v-toolbar>
        <p id="tutorial">Utilize os filtros abaixo para refinar os resultados da tabela,
                         clique no botão APLICAR para salvar as alterações.</p>
        <div class="partition"></div>
        <div class="selects">
            <v-select
            label="  TODAS AS DATAS DE INCLUSÃO"
            height="46"
            prepend-inner-icon="mdi-calendar-range"
            ></v-select>
            <v-select
            label="  TODAS AS DATAS DE ALTERAÇÃO"
            height="46"
            prepend-inner-icon="mdi-calendar-range"
            ></v-select>
            <v-select
            label="  ATIVOS E INATIVOS"
            height="46"
            prepend-inner-icon="mdi-music-note-whole-dotted"
            ></v-select>
            <v-btn width="432" height="67" disabled>APLICAR</v-btn>
        </div>
    </div>
</template>

<style scoped>
    #whole-box {
        top: 0;
        right: 0;
        position: absolute;
        width: 480px;
        height: 100%;
        padding: 0;
        background-color: #F5F5F5;
        z-index: 2;
    }

    #tune-toolbar {
        top:0;
        padding: 0;
    }

    #filter-title {
        font-family: Audiowide;
        font-size: 16px;
        color: #333333;
        margin-left: 16px;
    }

    #tutorial {
        font-family: Roboto;
        font-style: italic;
        color: #666666;
        margin-top: 40px;
        margin-left: 24px;
        margin-right: 24px;
        margin-bottom: 16px;
    }

    .partition {
        width: 24px;
        height: 4px;
        margin-left: 24px;
        margin-bottom: 40px;
        background-color: #E9E9E9;
    }

    .selects {
        font-family: Roboto;
        font-weight: 500;
        font-size: 16px;
        margin-left: 24px;
        margin-right: 24px;
    }

</style>

<script>
export default {
    name: 'FilterMenu',

    methods: {
        closeTuneMenu() {
            this.$root.$emit('fadeScreen', 'false');
            window.location.reload();
        }
    }
}
</script>