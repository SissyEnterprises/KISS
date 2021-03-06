<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>General</v-card-title>
          <v-card-text>
            <p>Perfectly harmless settings.</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>Schedule</v-card-title>
          <v-card-text>
            <p>
              Here you can set up which days and hours you will be available for
              tasks and classes. We recommend spending at least 1 hour per day
              and not skipping any days as the path to learning is through
              repetition.
            </p>
            <v-row>
              <v-col v-for="day in schedule.days" :key="day">
                <v-checkbox
                  v-model="schedule[day].enabled"
                  :label="day.charAt(0).toUpperCase() + day.slice(1)"
                ></v-checkbox>
                <v-select
                  v-model="schedule[day].from"
                  :disabled="!schedule[day].enabled"
                  label="From"
                  outlined
                  :items="fromToOptions"
                ></v-select>
                <v-select
                  v-model="schedule[day].to"
                  :disabled="!schedule[day].enabled"
                  label="To"
                  outlined
                  :items="fromToOptions"
                  :rules="[
                    (val) =>
                      parseInt(val.split(':')[0]) * 60 +
                        parseInt(val.split(':')[1]) >
                      parseInt(schedule[day].from.split(':')[0]) * 60 +
                        parseInt(schedule[day].from.split(':')[1])
                        ? true
                        : $t('You can\'t stop before you start!'),
                  ]"
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Theme</v-card-title>
          <v-card-text>
            <p>
              In case something looks weird, we develop primarily for the dark
              theme because it looks sexier and is better for your eyes. Always
              use dark mode when possible!
            </p>
            <v-switch
              v-model="theme"
              :label="$vuetify.theme.dark ? 'Dark' : 'Light'"
              color="primary"
              @change="changeTheme"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      theme: this.$store.getters['general/themeDark'],
      fromToOptions: [
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
      ],
      schedule: {
        days: [
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
          'sunday',
        ],
        monday: {
          enabled: true,
          from: '9:00',
          to: '18:00',
        },
        tuesday: {
          enabled: true,
          from: '9:00',
          to: '18:00',
        },
        wednesday: {
          enabled: true,
          from: '9:00',
          to: '18:00',
        },
        thursday: {
          enabled: true,
          from: '9:00',
          to: '18:00',
        },
        friday: {
          enabled: true,
          from: '9:00',
          to: '18:00',
        },
        saturday: {
          enabled: true,
          from: '9:00',
          to: '18:00',
        },
        sunday: {
          enabled: true,
          from: '9:00',
          to: '18:00',
        },
      },
    }
  },
  mounted() {
    this.theme = this.$store.getters['general/themeDark']
    this.$vuetify.theme.dark = this.$store.getters['general/themeDark']
  },
  methods: {
    changeTheme(state) {
      if (state) {
        this.$store.commit('general/setThemeDark', true)
        this.$vuetify.theme.dark = this.$store.getters['general/themeDark']
      } else {
        this.$store.commit('general/setThemeDark', false)
        this.$vuetify.theme.dark = this.$store.getters['general/themeDark']
      }
    },
  },
}
</script>
