<template>
  <li>
    <h2>{{ username }} {{ isFavorite ? '(favorite)' : '' }}</h2>
    <button @click="toggelFavorite">{{ isFavorite ==='1' ? 'Hide' : 'Show' }} favorite</button>
    <button @click="toggleDetails">{{ toggleDetails ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phonNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:[ //자식 컴포넌트에서는 변경을 할 수 있음.(imutable)
  //   'username', 'phonNumber','emailAddress', 'isFavorite'
  // ],
  props:{
    id:{
      type: String,
      required : true
    },
    username : {
      type: String,
      required: true
    },
    phonNumber: {
      type: String,
      required: true
    },
    emailAddress : {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: true,
      // default: false
      // validate(value) {
      //   return value === '1' || value === '0'
      // }
    }
  },
  // emits: [ 'toggle-favorite'],
  emits: {
    'toggle-favorite' : function(id) {
      if(id) {
        return true
      } else {
        console.warn('Id is missing')
        return false
      }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      //friendIsFavorite: this.isFavorite 
      //props를 data로 새로 선언하여 변경가능하도록 함
      //그러나 $emit을 이용하여 부모 컴포넌트에서 변경하여 내려오도록 하였기 때문에 삭제
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggelFavorite() {
      this.$emit('toggle-favorite', this.id)
      //toggle-favorite : app단에서 설정된 함수가 porps로 내려온 함수
      //this.friendIsFavorite = !this.friendIsFavorite
    }
  }
};
</script>