<script setup lang="ts">
import TitleView from '@/components/TitleView/TitleView.vue'
import SectionTitle from '@/components/SectionTitle/SectionTitle.vue'
import { ref } from 'vue'
import type { DessertItem } from '@/types'

const desserts = ref<DessertItem[]>([
  {
    name: 'Frozen Yogurt',
    calories: 159
  },
  {
    name: 'Ice cream sandwich',
    calories: 237
  },
  {
    name: 'Eclair',
    calories: 262
  },
  {
    name: 'Cupcake',
    calories: 305
  },
  {
    name: 'Gingerbread',
    calories: 356
  },
  {
    name: 'Jelly bean',
    calories: 375
  },
  {
    name: 'Lollipop',
    calories: 392
  },
  {
    name: 'Honeycomb',
    calories: 408
  },
  {
    name: 'Donut',
    calories: 452
  },
  {
    name: 'KitKat',
    calories: 518
  }
])

const snackbar = ref<boolean>(false)
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-container>
        <v-row>
          <v-col cols="12">
            <TitleView title="Vuetify" :path="['Vuetify']"> </TitleView>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle title="CONTAINMENT"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Buttons</span>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn>elevated (default)</v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn variant="flat">flat</v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn variant="tonal">tonal</v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn variant="outlined">outlined</v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn variant="text">text</v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn variant="plain">plain</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Chips</span>
              <div class="text-center mt-8">
                <v-chip class="ma-2" label> Label </v-chip>

                <v-chip class="ma-2" color="pink" label text-color="white">
                  <v-icon start icon="mdi-label"></v-icon>
                  Tags
                </v-chip>

                <v-chip class="ma-2" color="primary" label>
                  <v-icon start icon="mdi-account-circle-outline"></v-icon>
                  John Leider
                </v-chip>

                <v-chip class="ma-2" closable color="cyan" label>
                  <v-icon start icon="mdi-twitter"></v-icon>
                  New Tweets
                </v-chip>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Tooltip</span>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn>
                      Start
                      <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn>
                      End
                      <v-tooltip activator="parent" location="end">Tooltip</v-tooltip>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn>
                      Top
                      <v-tooltip activator="parent" location="top">Tooltip</v-tooltip>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" lg="3">
                    <v-btn>
                      Bottom
                      <v-tooltip activator="parent" location="bottom">Tooltip</v-tooltip>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle title="NAVIGATION"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Breadcrumbs</span>
              <div class="text-center mt-8">
                <v-breadcrumbs bg-color="primary" :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Pagination</span>
              <div class="mt-8">
                <v-pagination :length="6"></v-pagination>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle title="FORM INPUTS & CONTROLS"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Text Field</span>
              <div class="mt-8">
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Regular" placeholder="Placeholder"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Solo"
                          variant="solo"
                          placeholder="Placeholder"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Filled"
                          placeholder="Placeholder"
                          variant="filled"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Outlined"
                          placeholder="Placeholder"
                          variant="outlined"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Plain"
                          placeholder="Placeholder"
                          variant="plain"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          label="Underlined"
                          placeholder="Placeholder"
                          variant="underlined"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6 h-100">
              <span class="text-h5">Autocompletes</span>
              <div class="text-center mt-8">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        label="Autocomplete"
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming'
                        ]"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-autocomplete
                        variant="outlined"
                        label="Autocomplete"
                        :items="[
                          'California',
                          'Colorado',
                          'Florida',
                          'Georgia',
                          'Texas',
                          'Wyoming'
                        ]"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle title="DATA & DISPLAY"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Table</span>
              <div class="mt-8">
                <v-table density="compact">
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th class="text-left">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.calories }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <SectionTitle title="FEEDBACK"></SectionTitle>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-card flat class="rounded-xl pa-6">
              <span class="text-h5">Alerts</span>
              <div class="mt-8">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-alert
                        type="success"
                        title="Alert title"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                      ></v-alert>
                    </v-col>
                    <v-col cols="12">
                      <v-alert
                        density="compact"
                        type="warning"
                        title="Alert title"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
                      ></v-alert>
                    </v-col>
                    <v-col cols="12">
                      <v-alert color="#2A3B4D" theme="dark" icon="mdi-firework" density="compact">
                        Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                        Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
                      </v-alert>
                    </v-col>
                    <v-col cols="12">
                      <v-alert color="#C51162" theme="dark" icon="mdi-material-design" border>
                        Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci
                        lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio
                        lacinia tincidunt.
                      </v-alert>
                    </v-col>
                    <v-col cols="12">
                      <v-alert color="primary" theme="dark" icon="mdi-vuetify" prominent>
                        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus
                        in, viverra quis, feugiat a, tellus. Proin viverra, ligula sit amet ultrices
                        semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.
                        Curabitur at lacus ac velit ornare lobortis.
                      </v-alert>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="6">
            <v-container>
              <v-row>
                <v-col cols="12" class="pt-0">
                  <v-card flat class="rounded-xl pa-6 h-100">
                    <span class="text-h5">Progress circular</span>
                    <div class="d-flex justify-space-between mt-8">
                      <v-progress-circular indeterminate color="primary"></v-progress-circular>

                      <v-progress-circular indeterminate color="red"></v-progress-circular>

                      <v-progress-circular indeterminate color="purple"></v-progress-circular>

                      <v-progress-circular indeterminate color="green"></v-progress-circular>

                      <v-progress-circular indeterminate color="amber"></v-progress-circular>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card flat class="rounded-xl pa-6 h-100">
                    <span class="text-h5">Progress linear</span>
                    <div class="mt-8">
                      <v-progress-linear indeterminate color="yellow-darken-2"></v-progress-linear>
                      <br />
                      <v-progress-linear indeterminate color="green"></v-progress-linear>
                      <br />
                      <v-progress-linear indeterminate color="teal"></v-progress-linear>
                      <br />
                      <v-progress-linear indeterminate color="cyan"></v-progress-linear>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-card flat class="rounded-xl pa-6 h-100">
                    <span class="text-h5">Snackbars</span>
                    <div class="mt-8">
                      <v-btn color="red-darken-2" @click="snackbar = true"> Open Snackbar </v-btn>

                      <v-snackbar v-model="snackbar" multi-line>
                        I am a multi-line snackbar. I can have more than one line. This is another
                        line that is quite long.

                        <template v-slot:actions>
                          <v-btn color="red" variant="text" @click="snackbar = false">
                            Close
                          </v-btn>
                        </template>
                      </v-snackbar>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped></style>
