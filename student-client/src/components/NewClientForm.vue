<template>
<div>
  <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </div>

        <div class="card add-client m-2 p-2">
            <form>
                <h4 class="card-title">Add new client</h4>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" class="form-control" v-model.trim="newClientName">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" class="form-control" v-model.trim="newEmail">
                </div>
                <div class="form-group">
                    <label for="phone">EPhone</label>
                    <input id="phone" class="form-control" v-model.trim="newPhone">
                </div>
                <div class="form-group">
                    <label for="issue">Issue</label>
                    <input id="issue" class="form-control" v-model.trim="newIssue">
                </div>
                <button class="btn btn-primary" v-on:click.prevent="addClient">Add</button>
            </form>
        </div>
</div>
</template>

<script>

export default {
    name: 'NewClientForm',
    data() {
        return {
            newClientName: '',
            newEmail: '',
            newPhone: '',
            newIssue: '',
            errors: []
        }
    },
    methods: {
        addClient() {
            this.errors = []
            if (this.newClientName && this.newEmail) {
                let client = { name: this.newClientName, email: this.email, phone: phone, issue: issue }
                this.$emit('client-added', client)
                this.newClientName = ''
                this.newEmail = ''
                this.newPhone = ''
                this.newIssue = ''
            } else {
                this.errors.push('Name and Email are required.')
            }
        }
    }
}

</script>

<style>
    /* Write any styles for elements in this component here  */
</style>


 