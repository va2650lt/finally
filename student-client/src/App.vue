<template>
  <div id="app">
    
    <h1 class="m-2 p-2">Client Sign In</h1>

    <NewClientForm v-on:client-added="newClientAdded"></NewClientForm>
    <ClientTable
      v-bind:clients="clients" 
      v-on:client-present="clientArrivedOrLeft"
      v-on:delete-client="clientDeleted">
    </ClientTable>
    <ClientMessage v-bind:message="message" v-bind:name="name"></ClientMessage>

  </div>
</template>

<script>
import NewClientForm from './components/NewClientForm.vue'
import ClientTable from './components/ClientTable.vue'
import ClientMessage from './components/ClientMessage.vue'

export default {
  name: 'app',
  data() {
    return {
      clients: [],
      message: '',
      name: ''
    }
  },
  components: {
    NewClientForm,
    ClientTable,
    ClientMessage
  },
  mounted() {
    this.updateClients()
  },
  methods: {
    newClientAdded(client) {
        this.$client_api.addClient(client).then( client => {
        this.updateClients()   
      }).catch(err => {
        let msg = err.response.data.join(', ')
        alert('Error adding client.\n' + msg)
      })
    },
    clientArrivedOrLeft(client) {
      this.$client_api.updateClient(client).then( () => {
        this.message = client.present ? 'Welcome,' : 'Goodbye, '
        this.name = client.name  
        this.updateClients()
      })
    },
    clientDeleted(client) {
      this.$client_api.deleteClient(client.id).then( () => {
        this.updateClients()
      })
    },
    updateClients() {
      this.$client_api.getAllClients().then( clients => {
        this.clients = clients
    })
    }
  }
}
</script>

<style>


</style>