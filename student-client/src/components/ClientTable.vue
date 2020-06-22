<template>
  <div>
    <div class="card client-list m-2 p-2">
        <h4 class="card-title">Clients</h4>

        <div class="edit-table-toggle form-check">
            <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable"> 
            <label for="edit-table" class="form-check-label">Edit table?</label>
        </div>

        <div id="client-table">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Issue</th>
                    <th v-show="editTable">Delete</th>
                </tr>
                <ClientRow
                    v-for="client in clients" v-bind:key="client.id" 
                    v-bind:client="client"
                    v-bind:edit="editTable"
                    v-on:delete-client="clientDeleted">
                </ClientRow>
            </table>
        </div>
    </div>
  </div>
</template>

<script>

import ClientRow from '@/components/ClientRow.vue'

export default {
    name: 'ClientTable',
    components: { ClientRow },
    data() {
        return {
            editTable: false
        }
    },
    props: {
        clients: Array
    },
    methods: {
        clientDeleted(client) {
            this.$emit('delete-client', client)
        }
    }
}
</script>

<style>

#client-table {
  max-height: 500px;
  overflow: scroll;
}



</style>


