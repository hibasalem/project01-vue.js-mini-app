import { createApp } from 'vue';
import App from './App.vue';

import Card from './components/UI/Card.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDia from './components/UI/BaseDia.vue';

const app = createApp(App);

app.component('card', Card);
app.component('base-button', BaseButton);
app.component('base-dia', BaseDia);

app.mount('#app');
