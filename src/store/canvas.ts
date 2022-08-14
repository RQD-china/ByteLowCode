import { defineStore } from 'pinia'
import canvas from '../packages/canvas'

export const canvasStore = defineStore('canvas', {
    state: () => {
        return {
            bgColor: "#fff",
            width: 1080,
            height: 800,
            zoom: 100
        }
    },
    getters: {
        
    },
    actions: {
        
    }
})