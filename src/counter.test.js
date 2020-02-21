import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Counter from './counter';

afterEach(cleanup);

describe('Counter', () => {
    it('初期値は０である', () => {
        const { getByTestId } = render(<Counter />);
        expect(getByTestId('result')).toHaveTextContent('0');
    });
    it('「＋」ボタンを押すと1つカウントアップする', () => {
        const { getByTestId, getByText } = render(<Counter />);
        fireEvent.click(getByText('+'));
        expect(getByTestId('result')).toHaveTextContent('1');
    });
    it('「-」ボタンを押すと1つカウントダウンする', () => {
        const { getByTestId, getByText } = render(<Counter />);
        fireEvent.click(getByText('-'));
        expect(getByTestId('result')).toHaveTextContent('-1');
    })
});