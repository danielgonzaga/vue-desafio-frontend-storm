<template>
    <v-footer 
        absolute 
        color="#333333" 
        height="47"
        class="footer">
        <v-container 
            fill-height 
            fluid>
            <v-layout 
                align-center>
                    <v-icon 
                        color="#FF8700" 
                        size="16">
                            mdi-radiobox-marked
                    </v-icon>
                    <p id="on-air">NO AR</p>
                    <v-icon 
                        color="#666666" 
                        id="tv-icon" 
                        size="16">
                            mdi-television
                    </v-icon>
                    <p class="general-text" id="meet-text-1">ENCONTRO</p>
                    <p class="general-text" id="meet-text-2">&nbsp;-&nbsp;</p>
                    <p class="general-text" id="meet-text-3">10:00</p>
                    <v-icon 
                        id="update-icon"
                        color="#666666"
                        size="16">
                            mdi-update
                    </v-icon>
                    <p class="general-text" id="update-text-1">Última atualização em</p>
                    <p class="general-text" id="update-text-2">10:28</p>
                    <v-spacer></v-spacer>
                    <p class="date-text-300">Quinta,</p>
                    <p class="date-text-500">{{ day }}</p>
                    <p class="date-text-300">de</p>
                    <p class="date-text-500">{{ month }}</p>
                    <p class="date-text-300">de</p>
                    <p class="date-text-500">{{ year }}</p>
                    <p id="time">// {{ timeNow }}</p>
            </v-layout>
        </v-container>
    </v-footer>
</template>

<style scoped>
    .footer {
        z-index: 0;
    }

    #on-air {
        font-family: Audiowide;
        font-size: 12px;
        color: #FF8700;
        margin-left: 6.61px;
    }

    #tv-icon {
        margin-left: 84.39px;
    }

    #update-icon {
        margin-left: 40.75px;
    }

    .general-text {
        font-family: Roboto;
        font-size: 14px;
        color: #E9E9E9;
    }

    #meet-text-1 {
        font-weight: 500;
        margin-left: 8px;
    }

    #meet-text-2 {
        font-weight: 300;
        font-style: italic;
        margin: 0px 5px;
    }

    #meet-text-3 {
        font-weight: 700;
    }

    #update-text-1 {
        font-style: italic;
        margin-left: 8px;
    }

    #update-text-2 {
        font-style: italic;
        font-weight: 500;
        margin-left: 3px;
    }

    .date-text-300 {
        font-family: Roboto;
        font-size: 14px;
        color: #E9E9E9;
        font-style: italic;
        font-weight: 300;
        margin: 0px 1.5px;
    }

    .date-text-500 {
        font-family: Roboto;
        font-size: 14px;
        color: #E9E9E9;
        font-style: italic;
        font-weight: 500;
        margin: 0px 1.5px;
    }

    #time {
        font-family: Audiowide;
        font-size: 24px;
        color: #FF8700;
        margin-left: 16px;
        height: 24px;
    }
</style>


<script>
export default {
    name: 'Footer',

    data: () => ({
        timeNow: "",
        day: "",
        month: "",
        year: ""
    }),
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        addZero(time) {
            if (time < 10) {
                time = "0" + time;
            }
            return time;
        },

        monthConvertion(month) {
            switch(month){
                case 1: this.month = "Janeiro";
                        break;
                case 2: this.month = "Fevereiro";
                        break;
                case 3: this.month = "Março";
                        break;
                case 4: this.month = "Abril";
                        break;
                case 5: this.month = "Maio";
                        break;
                case 6: this.month = "Junho";
                        break;
                case 7: this.month = "Julho";
                        break;
                case 8: this.month = "Agosto";
                        break;
                case 9: this.month = "Setembro";
                        break;
                case 10: this.month = "Outubro";
                         break;
                case 11: this.month = "Novembro";
                         break;
                case 12: this.month = "Dezembro";
                         break;
            }
        },

        getNow() {
            const now = new Date();
            const time = this.addZero(now.getHours()) + ":" + this.addZero(now.getMinutes()) + ":" + this.addZero(now.getSeconds());
            this.timeNow = time;
            this.day = now.getDate();
            this.monthConvertion(now.getMonth()+1);
            this.year = now.getFullYear();
        }
    },
};
</script>