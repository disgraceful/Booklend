import { Comment } from '@/model/Comment'
import { getComments } from "@/services/commentService"
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
    comments: Array<Comment>
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        comments: getComments()
    },
    getters: {
        getComments(state) {
            return state.comments;
        }
    }
})