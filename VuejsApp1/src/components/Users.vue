<template>
  <v-card class="d-flex pa-2 outlined tile" cols="auto">
    <v-row class="pa-3 d-flex" justify="space-between">
      <v-col cols="4">
        <v-card-text>
          <p class="display-1 text--primary">Пользователи</p>
        </v-card-text>
        <v-list>
          <v-list-item-group v-model="selected">
            <v-list-item
              v-for="(item, i) in users"
              :key="i"
              v-on:click="getUserRoles(item.userName)"
              class="py-1"
            >
              <v-avatar color="teal" size="48" class="mr-2">
                <span class="white--text headline">{{item.userName[0]}}</span>
              </v-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.userName"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-btn class="mx-3" color="pink" dark fab center @click="dialog = !dialog">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col class="d-flex text-center">
        <v-scroll-y-transition mode="out-in">
          <div
            v-if="selected == null"
            class="title grey--text text--lighten-1 font-weight-light pa-5"
            style="align-self: center;"
          >Select a User</div>
          <v-card v-else :key="users[selected].id" class="pt-6 mx-auto" flat max-width="400">
            <v-card-text>
              <h3 class="headline mb-2">{{ users[selected].userName }}</h3>
              <div class="blue--text mb-2">{{ users[selected].email }}</div>
              <div class="blue--text subheading font-weight-bold">{{ users[selected].firstName }}</div>
            </v-card-text>
            <v-divider></v-divider>
            <v-row class="text-left" tag="v-card-text">
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="3">Логин:</v-col>
              <v-col cols="8">{{ users[selected].userName }}</v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="3">Имя:</v-col>
              <v-col cols="8">{{ users[selected].firstName }}</v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="3">Email:</v-col>
              <v-col cols="8">
                <a target="_blank">{{ users[selected].email }}</a>
              </v-col>
              <v-col class="text-right mr-4 mb-2" tag="strong" cols="3">Роли:</v-col>
              <v-col cols="8">
                <v-chip
                  v-for="(role,i) in users[selected].roles "
                  :key="i"
                  class="mb-1"
                  color="green"
                  text-color="white"
                  small
                >{{role}}</v-chip>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-btn dark class="orange darken-3 ma-3" @click="editdialog = !editdialog">РЕДАКТИРОВАТЬ</v-btn>
            <v-btn dark class="red darken-3 ma-3" @click.stop="deletedialog = true">УДАЛИТЬ</v-btn>
            <v-dialog v-model="deletedialog" max-width="320">
              <v-card>
                <v-card-title class="headline">Удалить пользователя {{users[selected].firstName}}?</v-card-title>
                <v-card-text>Данное действие необратимо удалит пользователя из системы.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="deletedialog = false">Отмена</v-btn>
                  <v-btn
                    color="red darken-1"
                    text
                    @click="deleteUser(users[selected].userName); deletedialog = false"
                  >OK</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
    <!-- диалог создания пользователя -->
    <v-dialog v-model="dialog" width="600px">
      <v-card>
        <v-card-title class="blue darken-2 white--text">Создать пользователя</v-card-title>
        <v-container>
          <v-row class="mx-4">
            <v-col cols="12">
              <v-text-field
                v-model="newUser.userName"
                prepend-icon="mdi-account"
                placeholder="Логин"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="newUser.firstName" prepend-icon="mdi-name" placeholder="Имя"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="newUser.email" prepend-icon="mdi-mail" placeholder="Email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="newUser.roles"
                prepend-icon="mdi-head-plus-outline"
                :items="roles"
                item-text="name"
                item-value="name"
                chips
                dense
                label="Роли"
                multiple
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">Отмена</v-btn>
          <v-btn text @click="saveUser(newUser); dialog = false">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
       <!-- диалог редактирования пользователя -->
    <v-dialog v-model="editdialog" width="600px">
      <v-card v-if="users[selected] != null">
        <v-card-title class="blue darken-2 white--text">Редактирование пользователя {{users[selected].userName}}</v-card-title>
        <v-container>
          <v-row class="mx-4">
            <v-col cols="12">
              <v-text-field v-model="users[selected].firstName" prepend-icon="mdi-name" placeholder="Имя"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="users[selected].email" prepend-icon="mdi-mail" placeholder="Email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="users[selected].roles"
                prepend-icon="mdi-head-plus-outline"
                :items="roles"
                item-text="name"
                item-value="name"
                chips
                dense
                label="Роли"
                multiple
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="editdialog = false">Отмена</v-btn>
          <v-btn text @click="saveUser(users[selected] ); editdialog = false">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    deletedialog: false,
    editdialog: false,
    active: [],
    avatar: null,
    open: [],
    users: [],
    selected: null,
    roles: [],
    newUser: { email: "", userName: "", firstName: "", roles: [] }
  }),

  methods: {
    saveUser: function(user) {
      console.log(user);
      this.$http
        .post(global.IP + "/api/Admin/CreateUser", user)
        .then(response => {
          // handle success
          console.log(response);
          this.loadUsers();
          this.getUserRoles(this.users[this.selected].userName);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    getUserRoles: function(userName) {
      this.$http
        .get(global.IP + "/api/Admin/GetUserRoles?username=" + userName)
        .then(response => {
          // handle success
          console.log(response);
          this.users[this.selected].roles = response.data;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    loadUsers: function() {
      // загрузка пользователей
      this.$http
        .get(global.IP + "/api/Admin/GetUsers")
        .then(response => {
          // handle success
          console.log(response);
          this.users = response.data;
          this.selected = 0;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    loadRoles: function() {
      //загрузка всех ролей
      this.$http
        .get(global.IP + "/api/Admin/GetRoles")
        .then(response => {
          // handle success
          console.log(response);
          this.roles = response.data;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    deleteUser: function(userName) {
      console.log(userName);
      this.$http
        .delete(global.IP + "/api/Admin/DeleteUser/" + userName)
        .then(response => {
          // handle success
          this.selected = null;
          this.loadUsers();
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.loadUsers();
    this.loadRoles();    
  }
};
</script>