import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {
    addPerson = () => {
        const person = {
            id: nanoid(),
            name: this.nameNode.value,
            age: this.ageNode.value * 1
        }
        this.props.addPerson(person)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h1>我是Person组件，上方求和为{this.props.count}</h1>
                <input ref={c => this.nameNode = c} placeholder='请输入姓名' />&nbsp;
                <input ref={c => this.ageNode = c} placeholder='请输入年龄' />&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul style={{fontSize: '18px'}}>
                    {
                        this.props.persons.map((item) => {
                            return (
                                <li key={item.id}>{item.name}---{item.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        count: state.count,
        persons: state.persons
    }),
    {
        addPerson: createAddPersonAction
    }
)(Person)
