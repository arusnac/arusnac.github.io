import { useSelector } from 'react-redux';
import React, { useState } from 'react';

export const Selector = () => {
    const selector = useSelector((state) => state.window.value);
    return selector
}