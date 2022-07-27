const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      autentikasi: true
    },
    children: [
      {
        path: '',
        component: () => import('pages/admin/home/DataBuku.vue')
      },
      {
        path: 'tambahbuku',
        component: () => import('pages/admin/home/InputDataBuku')
      },
      {
        path: 'datatransaksi',
        component: () => import('pages/admin/transaksi/DataTransaksi')
      }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout'),
    meta: {
      autentikasi: true
    },
    children: [
      {
        path: '',
        component: () => import('pages/pembeli/DataBuku/DataBuku')
      },
      {
        path: 'datatransaksi',
        component: () => import('pages/pembeli/Transaksi/DataTransaksi')
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout'),
    children: [
      {
        path: 'auth/login',
        component: () => import('pages/users/LoginPage')
      },
      {
        path: 'auth/registrasi',
        component: () => import('pages/users/RegistrasiPage')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
