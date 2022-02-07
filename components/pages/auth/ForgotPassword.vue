<template>
    <v-card flat>
      <v-card-text align="center" justify="center">
        <v-avatar size="150" class="mb-6">
          <img  src="@@/static/images/otherteam/chelsea.png" min-width="100" min-height="100" />
        </v-avatar>
        <h2>Forgot your password? </h2><br/>
        <v-col cols="12" md="12"/>
        <h3>Enter your email and we will help you to reset your password.</h3>
        <v-col cols="12" md="12"/>
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
              </v-text-field> <br/>
              <v-btn outlined color="primary" min-width="200" @click="resetPassword()">
                RESET
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
        email: ''
      }
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    resetPassword ( ) {
      console.log('reset password')
    }
  }
}
</script>
