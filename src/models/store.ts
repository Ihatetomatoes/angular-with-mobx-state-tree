import { types, onSnapshot, getSnapshot, destroy } from "mobx-state-tree"
import { Player } from '../models/player'

export const Store = types.model("Store", {
    title: types.string,
    count: 0,
    players: types.optional(types.array(Player), []),
    enablePlayerEdit: false
}).actions(self => ({
    updateTitle(text){
        self.title = text
    },
    increment(){
        self.count = self.count + 1
    },
    decrement(){
        self.count = self.count - 1
    },
    addPlayer(player) {
        self.players.push(player)
    },
    removePlayer(player) {
        destroy(player)
    },
    togglePlayerEdit(){
        self.enablePlayerEdit = !self.enablePlayerEdit
    }
})).views(self => ({
    get playersCount(){
        return self.players.length;
    }
}))

const initialState = {
    title: 'Mobx State Tree with Angular',
    players: [{name: "Jack", age: 30}, {name: "Tom", age: 20}]
}

const store = Store.create(initialState)

export {
    store
};
  
window['store'] = store; // for demo