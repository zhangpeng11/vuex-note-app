<template>
  <div id="app">
    <toolbar></toobar>
    <nodelist></nodelist>
    <editor></editor>
  </div>
</template>

<script>
  import ToolBar from './ToolBar.vue'
  import NodeList form './NodeList.vue'
  import Editor from './Editor.vue'

  export default {
    components: {
      ToolBar,
      NodeList,
      Editor
    }
  }

</script>