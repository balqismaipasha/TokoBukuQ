<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
<!--                <div class="col-md-6 col-xs-12">-->
<!--                  <div class="row q-pt-md q-pb-md bg-teal-5">-->
<!--                    <div class="col-md-8 offset-2 col-xs-8">-->
<!--                      <q-img spinner-color="white" placeholder-src="assets/user.png" src="~assets/userwhite.png"></q-img>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
                <q-card-section class="text-blue-grey-14">
                  <div class="text-h4">
                    Registrasi
                  </div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">

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
                        v-model="form.namaLengkap"
                        label="Nama Lengkap"
                        hint="Nama Lengkap"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.email"
                        label="E-mail"
                        hint="E-mail"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.telp"
                        label="No Hp"
                        hint="No Hp"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        type="password"
                        v-model="form.password"
                        hint="Password"
                        label="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <div>
                        <q-btn label="Registrasi" type="submit" color="primary"/>
                        <q-btn label="Login" to="/auth/login" color="primary" flat class="q-ml-sm" />
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
  name: 'RegistrasiPage',
  data () {
    // const $q = useQuasar()

    const username = ref(null)
    const namaLengkap = ref(null)
    const email = ref(null)
    const telp = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      form: {
        username,
        namaLengkap,
        email,
        telp,
        password
      },
      accept
    }
  },
  methods: {
    onSubmit () {
      api.post('/user/registrasi', {
        userName: this.form.username,
        namaLengkap: this.form.namaLengkap,
        email: this.form.email,
        telp: this.form.telp,
        role: 2,
        password: this.form.password
      }).then(res => {
        console.log(res)

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
          this.$router.push('login')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
