<template>
    <v-toolbar dense prominent color="#F5F5F5">
        <v-container fill-height fluid>
            <img id="logo" src="../assets/symbol.png">
            <div class="partition"></div>
            <v-btn id="button-security-persons">
                <v-icon class="security-person-icons" id="security-icon">mdi-security</v-icon>
                <v-icon class="security-person-icons" id="person-icon">mdi-account</v-icon>
            </v-btn>
            <div id="search-input">
                <v-text-field label="Pesquisar..." height="36" append-icon="mdi-magnify"></v-text-field>
            </div>
            <v-spacer></v-spacer>
            <v-btn v-on:click="tuneMenu()"  id="tune-button">
                <v-icon id="tune-icon">mdi-tune</v-icon>
            </v-btn>
            <v-btn id="add-user-button">
                <v-icon id="add-user-icon">mdi-account</v-icon>
                <p>INCLUIR USUÁRIO</p>
            </v-btn>
            <div class="partition"></div>
            <v-icon class="right-icons">mdi-home</v-icon>
            <v-icon class="right-icons">mdi-cog</v-icon>
            <v-icon class="right-icons">mdi-power</v-icon>
        </v-container>
    </v-toolbar>
</template>

<style scoped>

    p {
        font-family: Roboto;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.001px;
        color: #FFFFFF;
        margin-left: 8px;
    }

    #logo {
        margin-left: 40px;
    }


    #button-security-persons {
        width: 104px;
        height: 48px;
        margin-left: 24px;
        background-color: #FFFFFF;
        border-radius: 4px;
    }

    #security-icon {
        width: 52px;
        height: 48px;
        color: #666666;
    }

    #person-icon {
        width: 52px;
        height: 48px;
        color: #FFFFFF;
        background-image: linear-gradient(224.8deg, #FF8700, #D83367);
        border-radius: 4px;
    }

    #tune-button {
        min-width: 48px;
        height: 48px;
        color: #666666;
        background-color: #FFFFFF;
        border-radius: 4px;
    }

    #tune-icon {
        width: 20px;
        height: 20px;
    }

    #search-input {
        width: 298px;
        margin-left: 40px;
    }

    #add-user-button {
        width: 176px;
        height: 48px;
        border-radius: 4px;
        margin-left: 8px;
        background-color: #D83367;
    }

    #add-user-icon {
        width: 20px;
        height: 20px;
        color: #FFFFFF;
    }

    .v-text-field >>> label {
        font-size: 14px;
        font-weight: 300;
        font-style: italic;
        font-family: Roboto;
        color: #333333;
    }

    .partition {
        width: 2px;
        height: 24px;
        margin-left: 24px;
        background-color: #E9E9E9;
    }

    .right-icons {
        min-width: 24px;
        min-height: 24px;
        margin-left: 24px;
        color: #666666;
    }

</style>

<script>

export default {
    name: 'Menu',

    methods: {
        tuneMenu() {
            this.$root.$emit('fadeScreen', 'true');
        }
    }
}
</script>