<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <span class="text-h5 text-weight-light q-pa-md">
            <span class="text-blue-grey-14">Data Transaksi</span>
          </span>
          <q-space/>
          <q-input dense debounce="300" color="primary" label="Search" v-model="filter">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'kodetr',
    required: true,
    label: 'Kode Transaksi',
    align: 'left',
    field: row => row.kodetr,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'namapembeli',
    align: 'center',
    label: 'Nama Pembeli',
    field: 'namapembeli',
    sortable: true
  },
  {
    name: 'judulbuku',
    align: 'center',
    label: 'Judul Buku',
    field: 'judulbuku',
    sortable: true
  },
  {
    name: 'harga',
    align: 'center',
    label: 'Harga Buku',
    field: 'harga'
  },
  {
    name: 'jumlah',
    align: 'center',
    label: 'Jumlah Buku',
    field: 'jumlahbuku'
  },
  {
    name: 'total',
    align: 'center',
    label: 'Total',
    field: 'total'
  }
]

const originalRows = [
  {
    kodetr: 'Trans-001',
    namapembeli: 'Suci Rahayu',
    judulbuku: 'Pemrograman 3',
    harga: '250000',
    jumlah: '2',
    total: '5000000'
  },
  {
    kodetr: 'Trans-002',
    namapembeli: 'Nadia Kiting',
    judulbuku: 'Pemrograman C++',
    harga: '50000',
    jumlah: '1',
    total: '50000'
  }

]

export default {
  data () {
    const loading = ref(false)
    const filter = ref('')
    const rowCount = ref(10)
    const rows = ref([...originalRows])

    return {
      columns,
      rows,

      loading,
      filter,
      rowCount

    }
  }
}
</script>
