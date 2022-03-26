import { render, screen } from '@testing-library/react';

import Header from '.';

describe('Header component', () => {
    test('Rendering title', () => {
        render(<Header />);

        const title = screen.getByText("mozelli blog");
        
        expect(title).toBeInTheDocument();
    });

    test('Rendering button', () => {
        render(<Header />);

        const button = screen.getByRole('button', { class: /buttonMenu/ });
        expect(button).toBeInTheDocument();
    })
})