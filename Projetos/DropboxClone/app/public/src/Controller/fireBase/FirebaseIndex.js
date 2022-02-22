import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js'

const firebaseConfig = {
    apiKey: 'AIzaSyCCPGp5FEx_aaRP52Bgfb4FGAIbb9mrcNw',
    authDomain: 'dropboxclone-portifolio.firebaseapp.com',
    databaseURL: 'https://dropboxclone-portifolio-default-rtdb.firebaseio.com',
    projectId: 'dropboxclone-portifolio',
    storageBucket: 'dropboxclone-portifolio.appspot.com',
    messagingSenderId: '609798564398',
    appId: '1:609798564398:web:2ae20545edfd12fc024dbf',
    measurementId: 'G-PKJ8DYRMYY'
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
