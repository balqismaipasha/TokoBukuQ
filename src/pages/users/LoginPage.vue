<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-6 col-xs-12">
                  <div class="row q-pt-md q-pb-md bg-white">
                    <div class="col-md-8 offset-2 col-xs-8">
                      <q-img spinner-color="white" placeholder-src="assets/user.png" src="~assets/book.png"></q-img>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-xs-12 q-pt-md">
                  <div class="q-pa-md">
                    <div class="text-blue-grey-14 text-h4">Login</div>
                    <q-card-section class="text-blue-grey-14"></q-card-section>
                    <q-form
                      @submit="onSubmit"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="form.username"
                        label="Username"
                        hint="Name and surname"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="form.password"
                        label="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <div>
                        <q-btn label="Login" type="submit" color="primary"/>
                        <q-btn label="Registrasi" to="/auth/registrasi" color="primary" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { api } from 'boot/axios'

export default {
  name: 'LoginPage',

  data () {
    // const $q = useQuasar()

    const username = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      form: {
        username,
        password
      },
      accept

    }
  },
  methods: {
    onSubmit () {
      api.post('/user/login', {
        userName: this.form.username,
        password: this.form.password
      }).then(res => {
        console.log(res.data.data.role)

        if (res.data.error) {
          this.$q.notify({
            color: 'negative',
            message: res.data.msg,
            icon: 'ion-close'
          })
        } else {
          this.$q.notify({
            color: 'positive',
            message: res.data.msg,
            icon: 'ion-close'
          })

          if (res.data.data.role === 1) {
            // mengambil semua data yg lagi login
            this.$q.localStorage.set('datauser', res.data.data)
            this.$router.push('/')
          } else {
            this.$q.localStorage.set('datauser', res.data.data)
            this.$router.push('/pembeli')
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
