import { computed, defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import { EditData, Canvas, ElementItem } from '../interface'
import type { PropType } from 'vue'
import Element from './element'
import './canvas.scss'
import emitter from '../utils/bus'

export default defineComponent({
    props: {
        modelValue: { type: Object as PropType<EditData> }
    },
    setup(props) {
        // 处理数据
        let data: EditData = props.modelValue
        let canvas: Canvas = data.canvas
        let elements: Array<ElementItem> = data.elements.elements
        console.log(canvas, elements);
        

        // 画布的样式
        const canvasStyle = computed(() => ({
            width: canvas.width + 'px',
            height: canvas.height + 'px',
            backgroundColor: canvas.bgColor,
            backgroundImage: 'linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, transparent 0), linear-gradient(1turn, rgba(60, 10, 30, .04) 3%, transparent 0)',
            backgroundSize: '20px 20px',
            backgroundPosition: '50%',
            backgroundRepeat: 'repeat'
        }))

        // 提供画布的 ref
        const contentRef: Ref<any> = ref()
        emitter.emit("event", contentRef)

        // 生成模板
        return () => (
            <div class="canvas-block">
                <div class="element-content" style={ canvasStyle.value } ref={ contentRef }>
                    {
                        (elements.map(item => 
                            <Element data={ item }></Element>
                        ))
                    }
                </div>
            </div>
        )
    }
})