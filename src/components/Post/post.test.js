import { render, screen } from '@testing-library/react';

import Post from '.';

describe("Post component", () => {
    test("Rendering title", () => {
        render(<Post />);

        const title = screen.getByText("Título do Primeiro Post do Feed");
        expect(title).toBeInTheDocument();
    })
})