<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah Data Buku" to="/admin/tambahbuku"/>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space/>
          <q-input dense debounce="300" color="primary" label="Search" v-model="filter">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodeBuku" :props="props">
              {{ props.row.kodeBuku }}
            </q-td>
            <q-td key="judulBuku" :props="props">{{ props.row.judulBuku }}</q-td>
            <q-td key="penerbit" :props="props">{{ props.row.penerbit }}</q-td>
            <q-td key="pengarang" :props="props">{{ props.row.pengarang }}</q-td>
            <q-td key="tahunTerbit" :props="props">{{ props.row.tahunTerbit }}</q-td>
            <q-td key="harga" :props="props">{{ props.row.hargaBuku }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodeBuku)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataBuku(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { api } from 'boot/axios'

const columns = [
  {
    name: 'kodeBuku',
    required: true,
    label: 'Kode Buku',
    align: 'left',
    field: row => row.kodeBuku,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'judulBuku', align: 'center', label: 'Judul Buku', field: 'judulBuku', sortable: true },
  { name: 'penerbit', align: 'center', label: 'Penerbit', field: 'penerbit', sortable: true },
  { name: 'pengarang', label: 'Pengarang', align: 'center', field: 'pengarang' },
  { name: 'tahunTerbit', label: 'Tahun Terbit', align: 'center', field: 'tahunTerbit' },
  { name: 'harga', label: 'Harga Buku', align: 'center', field: 'harga' },
  { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
  { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
]

export default {
  data () {
    const loading = ref(false)
    const filter = ref('')
    const rowCount = ref(10)
    const data = []

    return {
      columns,
      loading,
      filter,
      rowCount,
      data,
      urlGambar: null,
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getDataBuku () {
      api.get('/buku/databuku')
        .then((res) => {
          this.data = res.data.data
          console.log(res)
        })
    }
  },
  mounted () {
    this.getDataBuku()
  }
}
</script>
