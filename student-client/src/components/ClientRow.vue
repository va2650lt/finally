<template>
  <tr class="client-row"  v-bind:class="'present-' + client.present">    
    <td>{{ client.name }}</td>
    <td>{{ client.email }}</td>
    <td>{{ client.phone }}</td>
    <td>{{ client.issue }}</td>
    <td v-show="edit">
        <img class="delete-icon" v-on:click="deleteClient(client)" src="@/assets/delete.png">
    </td>
  </tr>
</template>

<script>

export default {
    name: 'ClientTable',
    props: {
        client: Object,
        edit: Boolean
    },
    methods: {
        checked(client) {
            this.$emit('client-present', client)       
        }, 
        deleteClient(client) {
            if (confirm(`Delete ${client.name}?`)) {
                this.$emit('delete-client', client)
            }
        }
    }
}
</script>

<style>

.present-true {
    color: gray;
    font-style: italic;
}

.present-false {
    font-weight: bold;
}

</style>


