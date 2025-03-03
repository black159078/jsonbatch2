import {defineConfig} from 'vite';

export default defineConfig({
    publicDir:'../public',
    root:'./src',
    build:{
        outDir:'../dist'
    },
    server:{
        watch:{
            usePooling:true
        }
    }
});