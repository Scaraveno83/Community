import React from 'react'
import {render, screen} from '@testing-library/react'
import NeonButton from '../../components/NeonButton'

describe('NeonButton', () => {
  it('renders children', () => {
    render(<NeonButton>Test</NeonButton>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
