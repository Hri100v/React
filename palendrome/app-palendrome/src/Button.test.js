import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { Button, subtract, clickHandling } from './Button';

describe('Button Component', () => {

    test('render Button', () => {
        const { getByTestId } = render(<Button />);
        const button = getByTestId('button');
        expect(button).toBeTruthy();
    });

    // test('check click event', () => {
    //     console.log(2112);
    //     console.log(Button().prototype);
    // });

    test('test subtract', () => {
        const tempSubtract = jest.fn(subtract);
        expect(tempSubtract(4, 2)).toBe(2);
    });

    // test('test click', async () => {
    //     await act(async () => {
    //         const jestClickHandling = jest.fn(clickHandling);
    //         // const jestClickHandling = jest.spyOn(Button.prototype, 'setText');
    //         const { getByTestId } = render(<Button />);
    //         const button = getByTestId('button');
    //         await fireEvent.click(button);
    //         expect(jestClickHandling).toHaveBeenCalledTimes(1);
    //     });
    // });

    test('test click #2', async () => {
        await act(async () => {
            const jestClickHandling = jest.fn(clickHandling);
            // const jestClickHandling = jest.spyOn(Button.prototype, 'setText');
            const { getByTestId } = render(<Button handlingClick={jestClickHandling} />);
            const button = getByTestId('button');
            await fireEvent.click(button);
            expect(jestClickHandling).toHaveBeenCalledTimes(1);
        });
    });

    // test('check click event', async () => {
    //     await act(() => {
    //         // async

    //         console.log(2112);
    //         // console.log(Button.WrappedComponent.prototype);
    //         // console.log(JSON.stringify(Button.WrappedComponent.prototype));
    //         // console.log(JSON.stringify(Button));
    //         console.log(Button);

    //         // const spyClickFunction = jest.spyOn(
    //         //     Button.WrappedComponent.prototype,
    //         //     'setText'
    //         // );
    //         // const { getByTestId } = render(<Button />);
    //         // const button = getByTestId('button');
    //         // await fireEvent.click(button);
    //         // expect(spyClickFunction).toHaveBeenCalledTimes(1);
    //     });
    // });

});
