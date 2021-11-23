<template>
  <v-navigation-drawer permanent app :mini-variant="miniVariant">
    <v-list nav :dense="miniVariant">
      <v-list-item
        link
        :to="localePath('profile')"
        :two-line="!miniVariant"
        color="pink darken-1"
      >
        <v-list-item-avatar
          v-if="!miniVariant"
          style="margin-right: 0 !important"
        >
          <!-- <v-icon>fas fa-home</v-icon>-->
          <v-img :src="profileAvatarUrl"></v-img>
        </v-list-item-avatar>
        <v-list-item-icon v-else>
          <!-- <v-icon>fas fa-home</v-icon>-->
          <v-img :src="profileAvatarUrl"></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-h5 text-center">{{
            profileName
          }}</v-list-item-title>
          <v-list-item-subtitle class="text-center"
            >Student</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list nav dense style="padding-top: 0 !important">
      <template v-for="item in items">
        <v-list-item
          v-if="!item.sub"
          :key="item.to"
          color="pink darken-1"
          link
          :to="localePath(item.to)"
        >
          <v-tooltip v-if="miniVariant" right>
            <template #activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </template>
            <span>{{ $t(item.title) }}</span>
          </v-tooltip>
          <v-list-item-icon v-else>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
        </v-list-item>

        <v-list-group
          v-else
          :key="item.title"
          :prepend-icon="item.icon"
          color="pink darken-1"
          :value="
            item.sub.some((val) => $route.path.includes(localePath(val.to)))
          "
        >
          <template #activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(i, ix) in item.sub"
            :key="i.to + ix"
            link
            :to="localePath(i.to)"
          >
            <v-tooltip v-if="miniVariant" right>
              <template #activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>{{ i.icon }}</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ $t(i.title) }}</span>
            </v-tooltip>
            <v-list-item-icon v-else>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              v-if="!miniVariant"
              v-text="i.title"
            ></v-list-item-title>
            <v-list-item-title
              v-else
              v-text="i.title.substr(0, 2).toUpperCase()"
            ></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>

    <template #append>
      <v-list nav dense>
        <template v-if="$auth.loggedIn">
          <v-list-item color="pink darken-1" @click="logout">
            <v-tooltip v-if="miniVariant" right>
              <template #activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>fas fa-sign-out-alt</v-icon>
                </v-list-item-icon>
              </template>
              <span>{{ $t('Log out') }}</span>
            </v-tooltip>
            <v-list-item-icon v-else>
              <v-icon>fas fa-sign-out-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('Log out') }}</v-list-item-title>
          </v-list-item>
        </template>
        <v-list-item color="pink darken-1" @click="miniVariant = !miniVariant">
          <v-tooltip v-if="miniVariant" right>
            <template #activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-icon
                  >{{
                    miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'
                  }}
                </v-icon>
              </v-list-item-icon>
            </template>
            <span>{{ $t('Minimize') }}</span>
          </v-tooltip>
          <v-list-item-icon v-else>
            <v-icon
              >{{
                miniVariant ? 'fas fa-chevron-right' : 'fas fa-chevron-left'
              }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('Minimize') }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    profileAvatarUrl: false,
    profileName: '',
    miniVariant: true,
    items: [
      {
        title: 'School',
        to: 'school',
        icon: 'fas fa-university',
      },
      {
        title: 'Schedule',
        to: 'schedule',
        icon: 'fas fa-calendar',
      },
      {
        title: 'Progress tree',
        to: 'tree',
        icon: 'fab fa-pagelines',
      },
      {
        title: 'Classes',
        to: 'classes',
        icon: 'fas fa-leaf',
      },
      {
        title: 'Library',
        to: 'library',
        icon: 'fas fa-book',
      },
      {
        title: 'Detention',
        to: 'detention',
        icon: 'fas fa-sad-cry',
      },
      {
        title: 'Activities',
        icon: 'fas fa-dice-d20',
        sub: [
          {
            title: 'Videos',
            icon: 'fas fa-film',
            to: 'videos',
          },
          {
            title: 'Images',
            icon: 'fas fa-images',
            to: 'images',
          },
          {
            title: 'Erotica',
            icon: 'fas fa-book-open',
            to: 'erotica',
          },
          {
            title: 'Games',
            icon: 'fas fa-chess-queen',
            to: 'games',
          },
          {
            title: 'Hypnosis',
            icon: 'fas fa-hospital-symbol',
            to: 'hypnosis',
          },
          {
            title: 'Roulette',
            icon: 'fas fa-circle-notch',
            to: 'roulette',
          },
          {
            title: 'Dildo hero',
            icon: 'fas fa-pen',
            to: 'dildo-hero',
          },
        ],
      },
      {
        title: 'Inventory',
        to: 'inventory',
        icon: 'fas fa-toolbox',
      },
      {
        title: 'Information',
        to: 'information',
        icon: 'fas fa-exclamation-circle',
      },
    ],
  }),
  mounted() {
    if (this.$auth.loggedIn) {
      this.profileAvatarUrl = this.$auth.user.avatar
      this.profileName = this.$auth.user.name
    }
    setInterval(() => {
      if (this.$auth.loggedIn) {
        this.profileAvatarUrl = this.$auth.user.avatar
        this.profileName = this.$auth.user.name
      } else {
        this.profileAvatarUrl = ''
        this.profileName = ''
      }
    }, 1000)
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
  },
}
</script>
<i18n>
{
  "en": {
    "Home": "Home",
    "School": "School",
    "Schedule": "Schedule",
    "Classes": "Classes",
    "Library": "Library",
    "Media": "Media",
    "Images": "Images",
    "Videos": "Videos",
    "Audio": "Audio",
    "Activities": "Activities",
    "Virtual Reality": "Virtual Reality",
    "Hypnosis": "Hypnosis",
    "Third party": "Third party",
    "Minimize": "Minimize"
  }
}
</i18n>
