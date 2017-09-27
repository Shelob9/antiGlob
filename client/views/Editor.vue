<template>
  <div>
    <label for="title">
		Title
	</label>
	  <input id="title" type="text" v-model="title" @change="postTitle" />
  </div>
</template>

<script>

import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {

  },
	computed:{
		...mapGetters([
				postTitle
		])
	},
	methods: {
		...mapMutations([
			postTitle
		])
	}
}
</script>
