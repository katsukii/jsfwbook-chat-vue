import { mapGetters, mapActions } from 'vuex'
import { 
  GET_CHANNELS, 
  // SET_MESSAGE 
} from '../../store/mutation-types'
// コンポーネントをインポートする
import MessageList from '../MessageList'

export default {
  name: 'chat', 
  mounted() {
    this.GET_CHANNELS()
    // メッセージを取得
    this.GET_MESSAGES(this.$route.params.cname)
  }, 
  computed: {
    ...mapGetters(['messages', 'channels']), 
  }, 
  methods: {
    ...mapActions([
      // SET_MESSAGE, 
      GET_CHANNELS, 
      // GET_MESSAGESとPOST_MESSAGESをマッピング
      "GET_MESSAGES", 
      "POST_MESSAGES"
    ]), 
    send_message() {
      // this.SET_MESSAGE(this.message) // this.messages.push(this.message)
      // メッセージを送信
      this.POST_MESSAGES({"cname": this.$route.params.cname, "message": this.message})
      this.message = ""
    }
  },
  components: {
    'message-list': MessageList
  }, 
  data() {
    return {
      message: ""
    }
  }
}