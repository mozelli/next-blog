import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home component', () => {
    test("Verify if the Header component was rendered.", () => {
        render(<Home />);
    })
})