<template>
  <v-dialog
    v-model="dialog"
    persistent
    transition="dialog-bottom-transition"
    max-width="800"
  >
    <template v-slot:activator="{on, attrs}">
        <v-btn v-if="title === 'login' || title === 'join us'" text @click="handleDialog(title.toString())" >
          <span id="btn-auth"> {{title.toString().toUpperCase()}} </span>
        </v-btn>
    </template>
    <v-card v-if="dialog === true">
      <v-card-title align="center" justify="center">
        <v-btn v-if="forgotModal === true" color="primary" text class="mb-8" @click="handleDialog('login')">
          <v-icon color="primary" large>
            mdi-arrow-left
          </v-icon>
        </v-btn>
        <v-spacer />
        <v-col cols="12" md="1" >
          <v-btn text class="mb-8" @click="dialog = false" color="white" >
            <v-icon large color="primary" >
              mdi-close
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" md="12">
          <login v-if="loginModal === true" @join="handleDialog('join us')" @forgot="handleDialog('forgot')" />
          <join-us v-if="joinModal === true" @login="handleDialog('login')" />
          <forgot-password v-if="forgotModal === true" />
        </v-col>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
import ForgotPassword from './ForgotPassword.vue'
import JoinUs from './JoinUs.vue'
import Login from './Login.vue'
export default {
  components: { Login, JoinUs, ForgotPassword },
  props: {
    title: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      dialog: false,
      loginModal: false,
      joinModal: false,
      forgotModal: false,
      windowSize: {
        width: 0,
        height: 0
      }
    }
  },
  watch: {
  },
  mounted () {

  },
  methods: {
    handleDialog (type) {
      if (type === 'login') {
        this.loginModal = true
        this.joinModal = false
        this.dialog = true
        this.forgotModal = false
      } else if (type === 'join us') {
        this.joinModal = true
        this.loginModal = false
        this.forgotModal = false
        this.dialog = true
      } else if (type === 'forgot') {
        this.forgotModal = true
        this.dialog = true
        this.joinModal = false
        this.loginModal = false
      }
      
    }
  }
}
</script>
<style>
.v-dialog {
  margin-top: 5em;
}
#btn-auth:hover {
  color: rgb(0, 0, 202);
}
</style>