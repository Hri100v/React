import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Button } from './Button';

describe('Button Component', () => {
    test('render Button', () => {
        const { getByTestId } = render(<Button />);
        const button = getByTestId('button');
        expect(button).toBeTruthy();
    });

    test('test click', async () => {
        await act(async () => {
            const jestClickHandling = jest.fn(() => {});
            const { getByTestId } = render(<Button handlingClick={jestClickHandling} />);
            const button = getByTestId('button');
            await fireEvent.click(button);
            expect(jestClickHandling).toHaveBeenCalledTimes(1);
        });
    });
});
