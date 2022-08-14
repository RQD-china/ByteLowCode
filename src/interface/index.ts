// 组件渲染数据
export interface ComponentData {
    key: string,
    top: number,
    left: number
}

// 组件基础信息
export interface BaseData {
    key: string,
    label: number,
    render: Function
}

// 组件信息表
export interface ComponentInfo {
    componentList: Array<BaseData>,
    componentMap: {
        [key: string]: BaseData
    },
    register: Function
}

// 画布属性
export interface Canvas {
    bgColor: string,
    width: number,
    height: number,
    zoom: number
}

// 组件元素属性
export interface ElementItem {
    id: number,
    top: number,
    left: number,
    key: string,
    label: string,
    color: string
}

// 编辑数据
export interface EditData {
    canvas: Canvas,
    elements: {
        elements: Array<ElementItem> 
    }
}