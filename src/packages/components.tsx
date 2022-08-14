import { defineComponent, inject, VNodeRef, ref } from 'vue'
import type { Ref } from 'vue'
import { ComponentInfo, BaseData } from '../interface'
import { elementsStore } from '../store/elements'
import emitter from '../utils/bus'
import { ElDivider } from 'element-plus'

export default defineComponent({
    setup() {
        // 获取 store
        let elements = elementsStore()

        // 获取组件列表
        let components: ComponentInfo = inject('components')
        const componentList: Array<BaseData> = components.componentList

        // 获取画布ref
        let contentRef: Ref<any> = ref()
        emitter.on("event", e => {
            contentRef = e as Ref<any>
        })
        
        // 获取当前拖拽元素
        let currentElement: BaseData

        // 开始拖拽
        const dragstart = (e, component) => {
            // 绑定事件
            contentRef.value.addEventListener('dragener', dragenter)
            contentRef.value.addEventListener('dragover', dragover)
            contentRef.value.addEventListener('dragleave', dragleave)
            contentRef.value.addEventListener('drop', drop)

            currentElement = component
        }

        // 拖拽进入
        const dragenter = (e) => {
            e.dataTransfer.dropEffect = 'move'
        }

        // 拖拽经过
        const dragover = (e) => {
            e.preventDefault()
        } 

        // 拖拽离开
        const dragleave = (e) => {
            e.dataTransfer.dropEffect = 'none'
        }

        // 松开
        const drop = (e) => {
            elements.addElement({
                top: e.offsetY,
                left: e.offsetX,
                key: currentElement.key,
                label: currentElement.label,
                color: '#333'
            })
            currentElement = null
        } 

        // 生成模板
        return () => (
            <div class="component-box">
                <h3>组件列表</h3>   
                <ElDivider></ElDivider>
                <div class="component-list">
                    {
                        componentList.map(item => (
                            <div
                                class="component-item"
                                draggable
                                onDragstart={e => dragstart(e, item)}
                            >
                                <i class={'iconfont icon-' + item.key}></i>
                                <p>{ item.label }</p>
                            </div>
                        ))
                    }
                </div >
            </div>
        )
    }
})