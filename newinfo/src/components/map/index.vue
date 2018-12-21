<template>
    <div :class="[{'map-fill': fillState},'amap-page-container']">
      <i class="fill el-icon-rank" @click="fillClick"></i>
      <el-amap ref="map" vid="amapDemo" :amap-manager="AMapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
      </el-amap>
    </div>
  </template>

  <script>
    /* eslint-disable */
    import { AMapManager } from 'vue-amap'
    export default {
      props: {
        placeData: {
          type: Object,
          default: {
            lat: "25.033098",
            lng: "103.238336",
            zoom: 5
          }
        }
      },
      data() {
        return {
          fillState: false,
          AMapManager,
          zoom: this.placeData.zoom,
          center: [this.placeData.lng, this.placeData.lat],
          events: {
            // init: (o) => {
            //   console.log(o.getCenter())
            //   console.log(this.$refs.map.$$getInstance())
            //   o.getCity(result => {
            //     console.log(result)
            //   })
            // },
            // 'moveend': () => {
            // },
            // 'zoomchange': () => {
            // },
            // 'click': (e) => {
            //   alert('map clicked')
            // }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o)
              }
            }
          }]
        }
      },
      methods: {
        // getMap() {
        //   // amap vue component
        //   // console.log(amapManager._componentMap);
        //   // gaode map instance
        //   // console.log(amapManager._map);
        // }
        fillClick(){
          this.fillState = !this.fillState
        }
      }
    }
</script>
<style lang="less">
.amap-page-container{
  position: relative;
  width: 100%;
  height: 230px;
  transition: all .5s;
  box-shadow: 0 0 6px #cccccc;  
  .fill{
    position: absolute;
    bottom: 10px;
    right: 10px;
    transform: rotate(45deg);
    z-index: 1;
    font-size: 30px;
    color: rgba(0,0,0,.6);
  }
}
// 地图全屏
.map-fill{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
}
</style>
