export default {
  name: 'message-list', 
  props: {
    'messages': {
      type: Array, // データの方を定義
      default: [], // デフォルト値を指定
      required: true // 必須な要素の指定
    }
  }
}