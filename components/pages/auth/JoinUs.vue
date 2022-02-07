<template>
  <v-card flat>
      <v-card-text align="center">
        <v-avatar size="150" class="mb-6">
          <img  src="@@/static/images/otherteam/chelsea.png" min-width="100" min-height="100" />
        </v-avatar>
        <h2>Create an account</h2>
        
        <v-col cols="12" md="12"/>
        <h3>Join now for free and be part of Chelsea’s global fan community. You'll be able to explore Chelsea's Official Supporters Club network and unlock new features on the 5th Stand – the official Chelsea app.</h3>
        <v-col cols="12" md="12"/>
        <h3>
          Already with us? 
          <span>
            <v-btn text @click="changeModal()" class="text-md-body-2 primary--text">Log in</v-btn>
          </span>
        </h3> <br/>
        <v-btn large min-width="400" min-height="60" dark color="light-blue darken-4" @click="signupSocial('facebook')">
          <v-icon dark left size="24px">mdi-facebook</v-icon>
          SIGN UP WITH FACEBOOK
        </v-btn>
        <v-col cols="12" md="12"/>
        <v-btn large min-width="400" min-height="60"  color="red" @click="signupSocial('google')">
          <v-icon dark size="24px"> mdi-google </v-icon>
          SIGN UP WITH GOOGLE
        </v-btn>
        <v-col cols="12" md="12"/>
        <v-btn large min-width="400" min-height="60"  color="black" @click="signupSocial('apple')">
          <v-icon dark size="24px"> mdi-apple </v-icon>
          SIGN UP WITH APPLE
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
              <h1 class="primary--text font-weight-medium mt-5 mb-5">Sign Up With Email</h1>

              <v-text-field 
                v-model="user.email"
                label="Email"
                single-line
                hide-details="auto"
                :rules="[$validator.required, $validator.email]"
                >
              </v-text-field><br/>
              <v-text-field 
                v-model="user.password"
                label="Password"
                single-line
                hide-details="auto"
                :rules="[$validator.required, $validator.password]"
              >
              </v-text-field><br/>
              
              <v-btn class="ma-2" large min-width="400" min-height="60"  color="blue" outlined  @click="signUpWithCredentials()">
                JOIN US
              </v-btn>
            </v-card-text>
          </v-card>
        </v-form>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
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
  methods: {
    signupSocial (type) {
      if(!this.$refs.form.validate()) {
        return
      }
      console.log(type)
    },
    signUpWithCredentials () {
      if(!this.$refs.form.validate()) {
        return
      }
      console.log('login', this.user)
    },
    changeModal () {
      this.$emit('login')
    }
  }

}
</script>

<style>

</style>