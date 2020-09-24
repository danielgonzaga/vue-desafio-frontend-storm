<template>
    <v-container>
        <!--<v-data-table
            :headers="headers"
            :items="users"
            show-select
            single-select
            hide-default-footer
            id="users-table"
            @click:row="tableClick">
        </v-data-table>-->
        <table id="users-table">
            <tr>
                <th class="checkbox"></th>
                <th v-for="header in headers" :key="header.text" :class="{'text-left-table': header.text === 'EMAIL' || header.text === 'USUÁRIO', 'text-right-table': header.text === 'AÇÕES'}">{{ header.text }}</th>
            </tr>
            <tbody>
                <tr v-for="(item, index) in users" :key="item.user" v-on:click="tableClick(index)">
                    <td :class="{'line-white': selectedItem && clickedIndex == index}" class="checkbox"><v-checkbox></v-checkbox></td>
                    <td :class="{'line-white': selectedItem && clickedIndex == index}" class="text-left-table">{{ item.user }}</td>
                    <td :class="{'line-white': selectedItem && clickedIndex == index}" class="text-left-table">{{ item.email }}</td>
                    <td :class="{'line-white': selectedItem && clickedIndex == index}">{{ item.inclusionDate }}</td>
                    <td :class="{'line-white': selectedItem && clickedIndex == index}">{{ item.changeDate }}</td>
                    <td :class="{'line-white': selectedItem && clickedIndex == index}">{{ item.rules }}</td>
                    <td :class="{'line-white': selectedItem && clickedIndex == index}" class="status-text">{{ item.status }}</td>
                    <td v-if="!selectedItem" class="text-right-table">{{ item.actions }}</td>
                    <td v-else-if="selectedItem && clickedIndex == index" class="text-right-table line-white"><v-icon class="select-icon">mdi-delete</v-icon><v-icon class="select-icon">mdi-pencil</v-icon>{{ item.actions }}</td>
                    <td v-else class="text-right-table">{{ item.actions }}</td>
                </tr>
            </tbody>
        </table>
        <div id="page-buttons">
            <v-btn
                id="first-button"
                disabled
                width="85" 
                height="48">
                Primeiro
            </v-btn>
            <v-btn
                id="previous-button"
                disabled
                width="82"
                height="48">
                Anterior
            </v-btn>
            <v-btn 
                id="page-number">
                1
            </v-btn>
            <v-btn
                id="next-button"
                disabled
                width="84"
                height="48">
                Próximo
            </v-btn>
            <v-btn
                id="last-button"
                disabled
                width="73"
                height="48">
                Último
            </v-btn>
        </div>
    </v-container>
</template>

<style scoped>
    .status-text {
        font-weight: 500;
        color: #31BA1F;
    }

    .select-icon {
        margin-right: 16px;
    }

    .actions {
        width: 300px;
    }

    .text-left-table {
        text-align: left;
        padding-left: 50px;
    }

    .text-right-table {
        width: 20%;
        text-align: right;
        padding-right: 24px;
    }

    .line-white {
        background-color: #FFFFFF;
        color: rgb(239,239,239);
        border-bottom: 2px solid #D83367;
    }

    .checkbox {
        width: 80px;
        padding-left: 24px;
        margin-top: 0;
        margin-bottom: 0;
    }

    #users-table {
        width: 94.44%;
        text-align: center;
        font-family: Roboto;
        margin: 0 auto;
        margin-top: 24px;
        margin-bottom: 24px;
        border-spacing: 0;
        box-shadow: 5px 5px 8px rgba(0,0,0,0.08);
    }

    th {
        background-color: #FFFFFF;
        height: 46px;
        font-size: 12px;
        font-weight: 500;
    }

    tr {
        height: inherit;
        font-weight: 400;
        font-size: 14px;
    }

    td {
        height: 48px;
    }

    tr:nth-child(even) {
        background-color: #E9E9E9;
    }

    tr:nth-child(odd) {
        background-color: #F5F5F5;
    }

    #first-button {
        letter-spacing: 0.001px;
        color: #666666;
    }

    #previous-button {
        letter-spacing: 0.001px;
        margin-left: 8px;
        color: #666666;
    }

    #page-number {
        min-width: 48px;
        height: 48px;
        margin-left: 8px;
        margin-right: 8px;
        background-color: #D83367;
        color: white;
        font-weight: 500;
    }

    #next-button {
        letter-spacing: 0.001px;
        color: #666666;
    }

    #last-button {
        width: 73px;
        height: 48px;
        letter-spacing: 0.001px;
        margin-left: 8px;
        color: #666666;
    }

    .v-btn {
        text-transform: none;
    }

    #page-buttons {
        font-family: Roboto;
        display: flex;
        justify-content: center;
    }

</style>

<script>
    export default {
        name: 'Table',
        
        data () {
            return {
                selectedItem: false,
                clickedIndex: 0,
                headers: [
                { text: 'USUÁRIO', align: 'center', sortable: false, value: 'user' },
                { text: 'EMAIL', align: 'start', value: 'email' },
                { text: 'DATA DE INCLUSÃO', value: 'inclusionDate' },
                { text: 'DATA DE ALTERAÇÃO', value: 'changeDate' },
                { text: 'REGRAS', value: 'rules' },
                { text: 'STATUS', value: 'status' },
                { text: 'AÇÕES', value: 'actions' }
                ],
                users: [
                    {
                        user: 'ANPINA',
                        email: 'antonio.pina@tvglobo.com.br',
                        inclusionDate: '28/05/2019',
                        changeDate: '30/05/2019',
                        rules: '01',
                        status: 'ATIVO',
                        actions: '...'
                    },
                    {
                        user: 'CCHANG',
                        email: 'ciro.chang@tvglobo.com.br',
                        inclusionDate: '28/05/2019',
                        changeDate: '30/05/2019',
                        rules: '01',
                        status: 'ATIVO',
                        actions: '...'
                    },
                    {
                        user: 'TMARCAL',
                        email: 'thiago.marcal@tvglobo.com.br',
                        inclusionDate: '28/05/2019',
                        changeDate: '30/05/2019',
                        rules: '01',
                        status: 'ATIVO',
                        actions: '...'
                    },
                    {
                        user: 'ECGIANN',
                        email: 'ecgiannotto@tvglobo.com.br',
                        inclusionDate: '28/05/2019',
                        changeDate: '30/05/2019',
                        rules: '01',
                        status: 'ATIVO',
                        actions: '...'
                    },
                    {
                        user: 'YFERNAND',
                        email: 'yuri.vasquez@tvglobo.com.br',
                        inclusionDate: '28/05/2019',
                        changeDate: '30/05/2019',
                        rules: '02',
                        status: 'ATIVO',
                        actions: '...'
                    },
                    {
                        user: 'PLACERDA',
                        email: 'pedro.soares.lacerda@tvglobo.com.br',
                        inclusionDate: '28/05/2019',
                        changeDate: '30/05/2019',
                        rules: '02',
                        status: 'ATIVO',
                        actions: '...'
                    }
                ]
            }
        },
        methods: {
            tableClick(index) {
                if(!this.selectedItem) {
                    this.selectedItem = true;
                    this.clickedIndex = index;
                }
                else {
                    this.selectedItem = false;
                    this.clickedIndex = 0;
                }

            }
        }
    }
</script>