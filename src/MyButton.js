import React from 'react'
import Button from '@mui/material/Button'

export const MyButton = ({ text, variant }) => {
  return (
    <Button variant={variant}>{text}</Button>
  )
}
