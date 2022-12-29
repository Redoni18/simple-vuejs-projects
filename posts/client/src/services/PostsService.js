/* eslint-disable space-before-function-paren */
import Api from '@/services/Api'

export default {
  fetchPosts() {
    // eslint-disable-next-line indent
    return Api().get('posts')
  }
}
