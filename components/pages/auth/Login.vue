<template>
    <v-card flat >
      <v-card-text align="center" justify="center">
        <v-avatar size="150" class="mb-6">
          <img  src="@@/static/images/otherteam/chelsea.png" min-width="100" min-height="100" />
        </v-avatar>
        <h2>Log in</h2><br/>
        <h3>
          Don't have an account yet? 
          <span>
            <v-btn text @click="changeModal()" class="text-md-body-2 primary--text" small>Join us</v-btn>
          </span>
        </h3>
        <v-col cols="12" md="12"/>
        <h3>Logging in with social is easy and means no extra password to remember.</h3>
        <v-col cols="12" md="12"/>
        <v-btn large min-width="400" min-height="60" dark color="light-blue darken-4" @click="loginSocial('facebook')">
          <v-icon dark left size="24px">mdi-facebook</v-icon>
          LOG IN WITH FACEBOOK
        </v-btn>
        <v-col cols="12" md="12"/>
        <v-btn large min-width="400" min-height="60"  color="red" @click="loginSocial('google')">
          <v-icon dark size="24px"> mdi-google </v-icon>
          LOG IN WITH GOOGLE
        </v-btn>
        <v-col cols="12" md="12"/>
        <v-btn large min-width="400" min-height="60"  color="black" @click="loginSocial('apple')">
          <v-icon dark size="24px"> mdi-apple </v-icon>
          LOG IN WITH APPLE
        </v-btn>
        
        <v-col cols="12" md="12"/>
        <v-col cols="12" md="12">
          <v-divider />
          {{'OR'}}
          <v-divider />
        </v-col>
        <v-form ref="form" >
          <v-card outlined align="center" justify="center">
            <v-card-text>
              <h1 class="primary--text font-weight-medium mt-5 mb-5">Log In With Email</h1>

              <v-text-field 
                v-model="user.email"
                label="Email"
                single-line
                hide-details="auto"
                :rules="[$validator.required, $validator.email]"
                >
              </v-text-field>
              <v-text-field 
                v-model="user.password"
                label="Password"
                single-line
                hide-details="auto"
                :rules="[$validator.required, $validator.password]"
              >
              </v-text-field><br/>
              <v-btn text color="primary" @click="handleForgotPasswordDialog()">Forgot password?</v-btn> <br/>
              <v-btn class="ma-2" large min-width="400" min-height="60"  color="blue" outlined  @click="loginWithCredentials()">
                LOG IN
              </v-btn>
            </v-card-text>
          </v-card>
        </v-form>
      </v-card-text>
    </v-card>
</template>


<script>

import ForgotPassword from './ForgotPassword.vue'
export default {
  components: { ForgotPassword },
  props: {
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  watch: {

  },
  methods: {
    loginSocial (type) {
      if(!this.$refs.form.validate()) {
        return
      }
      console.log(type)
    },
    loginWithCredentials () {
      if(!this.$refs.form.validate()) {
        return
      }
      
    },
    changeModal () {
      this.$emit('join')
    },
    handleForgotPasswordDialog () {
      this.$emit('forgot')
    }
  }
}
</script>
