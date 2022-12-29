function getRandomVlaue(min, max){
    return attackValue = Math.floor(Math.random() * (max-min)) + min
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        }
    },
    computed: {
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },
        enableSpecialAttack() {
            return this.currentRound % 3 !== 0
        },
        disableHealth(){
            return this.playerHealth >= 100;
        }
    },
    watch: {
        playerHealth(value){
            if(value <=0 && this.monsterHealth <= 0){
                this.winner = "Draw"
            }else if(value <= 0){
                this.winner = "monster"
            }
        },
        monsterHealth(value){
            if(value <=0 && this.playerHealth <= 0){
                this.winner = "Draw"
            }else if(value <= 0){
                this.winner = "player"
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomVlaue(5, 12)
            this.monsterHealth -= attackValue
            this.attackPlayer();
            this.addLogMessaged('Player','Attack',attackValue)
        },
        attackPlayer(){
            const attackValue = getRandomVlaue(8, 15)
            this.playerHealth -= attackValue
            this.addLogMessaged('Monster','Attack',attackValue)
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomVlaue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
            this.addLogMessaged('Player','Special Attack',attackValue)
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomVlaue(8, 20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.addLogMessaged('Player','heal',healValue)
        },
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        playerSurrender() {
            this.winner = 'monster'
        },
        addLogMessaged(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
})

app.mount('#app')