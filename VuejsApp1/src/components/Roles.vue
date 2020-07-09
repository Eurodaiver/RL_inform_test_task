<template>
  <v-card class="d-flex pa-2 outlined tile" cols="auto">
    <v-row class="pa-4 d-flex" justify="space-between">
      <v-col cols="4">
        <v-card-text>
          <p class="display-1 text--primary">Роли</p>
        </v-card-text>
        <v-list>
          <v-list-item-group v-model="selected">
            <v-list-item v-for="(item, i) in roles" :key="i" class="py-1">
              <v-avatar color="indigo" size="48" class="mr-2" tile>
                <span class="white--text headline">{{item.name[0]}}</span>
              </v-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col class="d-flex text-center">
        <v-scroll-y-transition mode="out-in">
          <div
            v-if="selected == null"
            class="title grey--text text--lighten-1 font-weight-light ma-5"
            style="align-self: center;" 
          >Select a Role</div>
          <v-card v-else :key="roles[selected].id" class="pt-6 mx-auto" flat max-width="400">
            <v-card-text>
              <v-avatar v-if="avatar" size="88">
                <v-img :src="`https://avataaars.io/${avatar}`" class="mb-6"></v-img>
              </v-avatar>
              <h3 class="headline mb-2">{{ roles[selected].name }}</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-row class="text-left" tag="v-card-text">
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="5">ID:</v-col>
              <v-col>{{ roles[selected].id }}</v-col>

            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    roles: [],
    selected: null
  }),

  methods: {},
  mounted: function() {
    axios
      .get(global.IP + "/api/Admin/GetRoles")
      .then(response=> {
        // handle success
        console.log(response);
        this.roles = response.data;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
};
</script>