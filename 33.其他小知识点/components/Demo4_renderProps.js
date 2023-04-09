import React, {Component} from 'react';

export default class Demo4RenderProps extends Component {
    render() {
        return (
            <div>
                <h3>我是Parent组件</h3>
                {/*<A>*/}
                {/*    <B/>*/}
                {/*</A>*/}
                {/*render不是固定的，其他也可以，建议使用render*/}
                <A render={(name)=><B name = {name}/>}/>
            </div>
        );
    }
}

/**
 * 子组件获取数据要使用：this.props.children
 * A/B父子关系的形成
 * 1、
 * <A>
 *   <B/>
 * </A>
 *
 * 2、
 * <A/>，然后A重切套B
 *
 * 3、
 * <A render={()=><B/>}/>
 */
class A extends Component{
    render() {
        return (
            <div>
                <h3>我是组件A</h3>
                {this.props.render('AAAAAA')}
            </div>
        )
    }
}
class B extends Component{
    render() {
        return (
            <div>
                <h3>我是组件B</h3>
                {/*<h3>{this.props.children}</h3>*/}
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}
