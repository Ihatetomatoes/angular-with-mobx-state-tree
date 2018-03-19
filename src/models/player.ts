import { types, getParent } from "mobx-state-tree"

export const Player = types.model('Player', {
    name: types.string,
    age: types. number
}).actions(self => ({
    add(player){
        getParent(self, 2).addPlayer(player)
    },
    remove(){
        getParent(self, 2).removePlayer(self)
    }
}))