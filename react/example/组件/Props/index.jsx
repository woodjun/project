import { Component } from "react";
import PropTypes from 'prop-types'

export default class Person extends Component {
    // 传入参数类型限制
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.string
    }
    // 给传入参数默认值
    static defaultProps = {
        name: 'li',
        age: 15 
    }
    render() {
        const {name, age, sex} = this.props
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{sex}</li>
                <li>年龄：{age}</li>
            </ul>
        )
    }
}