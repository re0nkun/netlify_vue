<template>
  <div>
    <Table :header="header" :items="items">
      <template v-slot:default="{item}">
        <td>{{item.id}}</td>
        <td>{{item.firstName}} {{item.lastName}}</td>
        <td>{{item.email}}</td>
      </template>
    </Table>
    
    <Menu>
      <template v-slot:activator="{on}">
        <button v-on:click="on">push</button>
      </template>
      <ul>
        <li>List1</li>
        <li>List2</li>
        <li>List3</li>
      </ul>
    </Menu>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <SaleGraph/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <SaleGraph/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <SaleGraph/>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
          <SaleGraph/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SaleGraph from '../components/SaleGraph'
import Menu from '../components/Menu'
import Table from '../components/Table'
export default {
  components: { SaleGraph, Menu, Table },
  data() {
    return {
      // header: ['ID','FIRSTNAME','LASTNAME','EMAIL'],
      header: ['ID','NAME','EMAIL'],
      items: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com'
        },        
        {
          id: 2,
          firstName: 'Kevin',
          lastName: 'Wood',
          email: 'kevin@example.com'
        },       
        {
          id: 3,
          firstName: 'Harry',
          lastName: 'Bosch',
          email: 'harry@test.com'
        },
      ]
    }
  }
  // mounted() {
  //   console.log(this.$vuetify.breakpoint)
  // }
}
</script>
