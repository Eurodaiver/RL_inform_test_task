<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense mandatory>
        <v-list-item-group>
          <v-list-item v-on:click="selected = 0">
            <v-list-item-action>
              <v-icon>mdi-contacts</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Пользователи</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-on:click="selected = 1">
            <v-list-item-action>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Роли</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block  v-on:click="selected = 2">
            <v-icon>mdi-help-circle</v-icon>Help
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">RL-inform Users</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search users"
        class="hidden-sm-and-down"
        v-model="stext"
        v-on:keyup.enter="search(stext)"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-text v-if="login!= ''" class="mr-3">Hello, {{login}}!</v-text>
      <v-btn v-if="!!accessKey" icon @click="logout()" class="ml-3">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <userpanel v-if="selected == 0" class="fill-height"></userpanel>
      <rolepanel v-if="selected == 1" class="fill-height"></rolepanel>
      <helppanel v-if="selected == 2" class="fill-height"></helppanel>
    </v-main>

    <v-dialog v-model="loginDialog" persistent max-width="320">
      <v-card>
        <v-card-title class="headline align-center">
          <v-icon class="mr-3">mdi-account-key</v-icon>Please Log In
        </v-card-title>
        <v-form ref="form" v-model="valid" lazy-validation>
          <!-- <v-card-text>After authorization, you will get access for 1 hour.</v-card-text> -->
          <v-container class="px-5">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  id="email"
                  v-model="login"
                  :counter="30"
                  :rules="loginrules"
                  label="Login"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  id="password"
                  v-model="password"
                  :rules="passwordrules"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPass = !showPass"
                  :type="showPass ? 'text' : 'password'"
                  label="Password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="tryToLogIn()">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
// import axios from "axios";
import userpanel from "./components/Users";
import rolepanel from "./components/Roles";
import helppanel from "./components/Help";

export default {
  components: {
    userpanel,
    rolepanel,
    helppanel
  },
  props: {
    source: String
  },
  data: () => ({
    accessKey: "",
    drawer: null,
    userList: null,
    stext: "",
    loginDialog: true,
    login: "",
    password: "",
    showPass: false,
    valid: true,
    selected: 3,
    loginrules: [
      //правила для валидации инпутов
      value => !!value || "Required.",
      value => (value || "").length <= 30 || "Max 30 characters"
    ],
    passwordrules: [
      value => !!value || "Required.",
      value => (value || "").length <= 30 || "Max 30 symbols"
    ]
  }),
  methods: {
    search: function(stext) {
      console.log(stext);
      this.selected = 0;
    },
    tryToLogIn: function() {
      //тут отправляем данные пользователя на сервер и в ответ получаем ключ если данные верны и юзер есть
      //TODO: сделать шифрование пароля для отправки запроса на сервер

      //убеждаемся что форма валидна
      if (!this.$refs.form.validate()) {
        console.log("форма не валидна");
        return null;
      }
      this.$http
        .post(global.IP + "/api/Authorization/Auth", {
          userName: this.login,
          password: this.password
        })
        .then(response => {
          console.log("результат запроса ключа на сервер", response.data);
          this.accessKey = response.data.token;
          //добавляем в хранилище браузера если собираемся хранить вечно
          //localStorage.accessKey = this.accessKey;
          if (this.accessKey.length > 1) {
            // сохраняем в хранилище sessionStorage токен доступа
            sessionStorage.setItem("accessKey", this.accessKey);
            this.$http.defaults.headers.common["Authorization"] =
              "Bearer " + this.accessKey;
            console.log("accessKey", this.accessKey);
            //закрываем окно авторизации
            this.loginDialog = false;
            this.selected = 0;
          } else {
            sessionStorage.removeItem("accessKey");
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout: function() {
      sessionStorage.removeItem("accessKey");
      this.accessKey = null;
      this.login = "";
      this.password = "";
      this.loginDialog = true;
      this.selected = 3;
      window.location.reload();
    }
  },
  mounted: function() {
    //получаем ключ доступа пользователя из браузера и проверяем его валидность, если его нет или устарело - выводим окно авторизации пользователя
    if (sessionStorage.getItem("accessKey") != null) {
      this.accessKey = sessionStorage.getItem("accessKey");
      console.log("сессия", sessionStorage.getItem("accessKey"));
      this.loginDialog = false;
      this.selected = 0;
      //тут проверяем не устарел ли ключ и если устарел - выводим окно авторизации
    } else {
      //this.activePage = "beforeAuthorize";
      //показываем окно авторизации
      console.log("сессия", sessionStorage.getItem("accessKey"));
      this.loginDialog = true;
      this.selected = 3;
    }
  }
};
</script>
