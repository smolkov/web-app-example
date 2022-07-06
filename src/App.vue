<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <template #prepend>
        <v-list-item
          two-line
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Jane Smith"
          subtitle="Logged in"
        />
      </template>

      <v-divider />

      <v-list
        density="compact"
        nav
      >
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Dashboard"
          value="home"
          to="/"
          router
          exact
        />
        <v-list-item
          prepend-icon="mdi-tune-vertical"
          title="Settings"
          value="settings"
          to="/settings"
          router
          exact
        />
        <v-list-item
          prepend-icon="mdi-file-tree"
          title="File system"
          value="filesystem"
          to="/filesystem"
          router
          exact
        />
         <v-list-item
          prepend-icon="mdi-collage"
          title="Os"
          value="os"
          to="/os"
          router
          exact
        />
      </v-list><!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
};
</script>
