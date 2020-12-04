function CalMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMsg: []
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw'
      } else if (value <= 0) {
        this.winner = 'monster'
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //alert('A draw')
        this.winner = 'draw'
      } else if (value <= 0) {
        //alert('You win!!')
        this.winner = 'player'
      }
    }

  },
  computed: {
    monserHealthStyle() {
      if (this.monsterHealth < 0) {
        return { width: '0%' }
      } else {
        return { width: this.monsterHealth + '%' }
      }
    },
    playerHealthStyle() {
      if (this.playerHealth < 0) {
        return { width: '0%' }
      } else {
        return { width: this.playerHealth + '%' }
      }
    },
    useSpecialAttack() {
      return this.currentRound % 3 !== 0
    },
    attackClass() {
      return { 'log--player': this.logMsg.actionType === 'player', 'log--monster': this.logMsg.actionBy === 'monster' }
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++
      const attackValue = CalMinMax(12, 5)
      this.monsterHealth -= attackValue
      this.addLogMsg('player', 'attack', attackValue)
      this.attackPlayer()
    },
    attackPlayer() {
      const attackValue = CalMinMax(15, 8)
      this.playerHealth -= attackValue
      this.addLogMsg('monster', 'attack', attackValue)
    },
    specialAttackMonseter() {
      this.currentRound++
      const attackValue = CalMinMax(25, 5)
      this.monsterHealth -= attackValue
      this.addLogMsg('player', 'special attack', attackValue)
      this.attackPlayer()
    },
    healPlayer() {
      this.currentRound++
      const attackValue = CalMinMax(25, 8)
      if (this.playerHealth + attackValue > 100) {
        this.addLogMsg('player', 'heal', attackValue)
        this.playerHealth = 100
      } else {
        this.playerHealth += attackValue
        this.addLogMsg('player', 'heal', attackValue)
      }
      this.attackPlayer()
    },
    newGame() {
      this.monsterHealth = 100
      this.playerHealth = 100
      this.winner = null
      this.currentRound = 0
    },
    addLogMsg(who, what, value) {
      this.logMsg.push({
        actionBy: who,
        actionType: what,
        actionValue: value
      })
      console.log(this.logMsg)
    },
    surrender() {
      this.winner = 'monster';
    },
  }
})

app.mount('#game')