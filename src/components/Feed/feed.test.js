import { render, screen } from '@testing-library/react';

import Feed from '.';

describe('Feed component', () => {
    test('Rendering title', () => {
        render(<Feed />);
        
        const title = screen.getByText("Últimas Postagens");
        expect(title).toBeInTheDocument();
    })
});