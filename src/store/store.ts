import { Comment } from '@/model/Comment'
import { CommentData, Coords } from "@/model/CommentData"
import { addComment, getCommentById, getComments } from "@/services/commentService"
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'



const commentClass = '_comment-span';

// define your typings for the store state
export interface State {
    comments: Comment[],
    commentData: CommentData
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        comments: getComments(),
        commentData: new CommentData()
    },
    getters: {
        getComments(state) {
            return state.comments;
        },

        getCommentData(state) {
            return state.commentData;
        }
    },
    mutations: {
        setSelection(state, payload) {
            state.commentData.selection = payload;
        },

        setSelectedText(state, payload) {
            state.commentData.selectedText = payload;
        },

        setCommentShow(state, payload) {
            state.commentData.show = payload;
        },

        setCommentCoords(state, payload) {
            state.commentData.coords.x = payload.x;
            state.commentData.coords.y = payload.y;
        },

        setCommentActive(state, payload) {
            state.commentData.active = payload;
        },

        setCommentText(state, payload) {
            state.commentData.commentText = payload;
        }

    },
    actions: {
        initComments({ dispatch }) {
            const comments = getComments();
            console.log(comments);

            comments.forEach((comment) => {
                const potentialParents = document.querySelectorAll(comment.parentSelector);
                const parent = Array.from(potentialParents).find(parentEl => parentEl.innerHTML.includes(comment.selectedText));

                if (!parent) {
                    return;
                }

                console.log(parent);
                parent.innerHTML = comment.parentInnerHTML;
            });


            const commentSpans = document.querySelectorAll(`.${commentClass}`);
            comments.forEach(comment => {

                const commentSpan = Array.from(commentSpans).find((span) => span.id == comment.id);
                if (commentSpan) {
                    dispatch('setEventHandlers', { span: commentSpan, id: comment.id })
                }
            })
        },


        saveComment({ commit, dispatch }, payload) {
            commit('setCommentActive', false);
            commit('setCommentShow', false);

            const id = new Date().getTime() + '_';

            //paint bg yellow
            const newSpan = document.createElement('span');
            newSpan.id = id;
            newSpan.classList.add(commentClass)
            newSpan.style.backgroundColor = '#ffeb3b';
            this.getters.getCommentData.selection.surroundContents(newSpan);

            const parent = this.getters.getCommentData.selection.startContainer;
            const parentSelectorString = `${parent.localName}.${parent.classList[0]}`

            addComment(payload, id, parentSelectorString, this.getters.getCommentData.selectedText, parent.innerHTML);
            dispatch('setEventHandlers', { span: newSpan, id });
        },

        setEventHandlers({ commit }, { span, id }) {
            span.addEventListener('mouseover', (event: any) => {
                commit('setCommentShow', true);
                commit('setCommentText', getCommentById(id));
                commit('setCommentCoords', { x: event.clientX + 10, y: event.clientY + 10 })
            });

            span.addEventListener('mouseleave', () => {
                commit('setCommentShow', false);
                commit('setCommentText', '');
            });
        }
    }
})