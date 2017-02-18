<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>Notes | coligo</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!--All Note Button-->
        <div class"btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'all'" :class="{active: show === 'all'}">All Notes</button>
        </div>

        <!--Favorite Button-->
        <div class"btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'favorite'" :class="{active: show === 'favorite'}">All Notes</button>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes" class="list-group-item" href="#" :class="{active: activeNote(note)" @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0,30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import { updateActiveNote } from '../vuex/action'

  export default{
    data () {
      return {
        show = 'all'
      }
    },
    vuex: {
      getters: {
        notes: state => state.notes,
        avtiveNote: state => state.avtiveNote
      },
      actions: {
        updateActiveNote
      }
    },
    computed: {
      filteredNotes () {
        if (this.show === 'all'){
          return this.notes
        } else {
          return this.notes.filter(note => note.favorite)
        }
      }
    }
  }
</script>