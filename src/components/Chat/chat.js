import { mapGetters, mapActions } from 'vuex'
import { SET_MESSAGE } from '../../store/mutation-types'

export default {
  name: 'chat', 
  computed: {
    ...mapGetters(['messages']), 
  }, 
  methods: {
    ...mapActions([SET_MESSAGE]), 
    send_message() {
      this.SET_MESSAGE(this.message) // this.messages.push(this.message)
      this.message = ""
    }
  }, 
  data() {
    return {
      channels: ["general", "random"], 
      message: ""
    }
  }
}