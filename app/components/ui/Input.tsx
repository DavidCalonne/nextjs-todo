import React from 'react'

export default function Input(props: any) {
  return (
    <input 
      type={props.type} 
      placeholder={props.placeholder} 
      value={props.value}
      onChange={props.onChange}
      className="ui-input"
    />
  )
}
