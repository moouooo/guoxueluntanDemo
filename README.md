# guoxueluntan

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


一，踩过的坑
1.axios 
npm install --save axios vue-axios
vue中使用axios的方法Vue.axios.get(api).then((response) => {
  console.log(response.data)
})
 
this.axios.get(api).then((response) => {
  console.log(response.data)
})
 
this.$http.get(api).then((response) => {
  console.log(response.data)
})