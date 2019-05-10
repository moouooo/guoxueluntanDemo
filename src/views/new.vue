<template>
    <div>
    <mt-field label="标题" placeholder="这是你的标题" v-model="username"></mt-field>
    <mt-field label="内容" placeholder="内容" type="textarea" rows="7" v-modal="introduction"></mt-field>

    <mt-picker :slots="slots" @change="onValuesChange" v-model="type></mt-picker>


    <mt-button type="primary">发表</mt-button>
    </div>
</template>

<script>
import { Picker } from 'mint-ui';

Vue.component(Picker.name, Picker);

export default {
    name:'new',
    // data:{},
    data(){
        return {
            popupVisible: false,
           
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },
    created() {
        // 获取数据
    },
    mounted:{
       
    },
    methods: {
         onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
    },
}

</script>

<style lang="less">
    .field-text{
        height:50px;
    }
</style>