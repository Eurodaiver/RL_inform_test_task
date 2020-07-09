<template>
  <v-card class="d-flex pa-2 outlined tile" cols="auto">
    <v-row class="pa-3 d-flex">
      <v-col cols="md-12">
        <v-card-text>
          <p class="display-1 text--primary">Задание на разработку</p>
          <p>Сделать веб-приложение для администрирования пользователей.</p>

          <h3 class="pb-2">Возможности:</h3>
          <p class="pl-3">- Просматривать список пользователей (username, имя, роли) <v-icon class="green--text">mdi-check-circle-outline</v-icon></p>
          <p class="pl-3">- Создавать, редактировать и удалять пользователей <v-icon class="green--text">mdi-check-circle-outline</v-icon></p>

          <h3 class="pb-2">Свойства пользователя</h3>
          <p class="pl-3">- Логин (задаётся при создании и не изменяется) <v-icon class="green--text">mdi-check-circle-outline</v-icon></p>
          <p class="pl-3">- Имя<v-icon class="green--text">mdi-check-circle-outline </v-icon></p>
          <p class="pl-3">- Email<v-icon class="green--text">mdi-check-circle-outline </v-icon></p>
          <p class="pl-3">- Пароль<v-icon class="green--text">mdi-check-circle-outline </v-icon></p>
          <p class="pl-3">- Роли (несколько)<v-icon class="green--text">mdi-check-circle-outline </v-icon></p>
          <p>Список возможных ролей задан заранее (к примеру, Администратор, Редактор справочников, Заказчик).</p>

          <h3 class="pb-2">Требования к реализации:</h3>
          <p class="pl-3">- Приложение должно быть построено по принципу Single-page application, с обменом данными между фронтендом и бэкендом через REST API(строгое соблюдение стандарта REST необязательно) <v-icon class="green--text">mdi-check-circle-outline</v-icon></p>
          <p class="pl-3">- Желательна авторизация на основе jwt <v-icon class="green--text">mdi-check-circle-outline</v-icon></p>
          <p class="pl-3">- Бэкенд должен работать на .net Core и хранить данные в БД <v-icon class="green--text">mdi-check-circle-outline</v-icon></p>
          <p class="pl-3">- Для фронтенда можно использовать typescript или js любой версии и любые фреймворки/библиотеки <v-icon class="green--text">mdi-check-circle-outline</v-icon></p>
        </v-card-text>
        
      </v-col>     
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),

  methods: {},
  mounted: function() {

  }
};
</script>