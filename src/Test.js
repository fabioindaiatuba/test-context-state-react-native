import React , { createContext, useState, useEffect, useContext, useCallback } from 'react';

const TestContext = createContext();

export const TestProvider = ({ children }) => {
    const [ arrTest, setArrTest] = useState([]);
    const [ addTimer, setAddTimer] = useState();

    const onTimmer = useCallback(() => {
        console.info('CRIOU TIMMER');
        setAddTimer(
            setInterval(() => {
                addArrTest(value())
            }, 3000)
        )
    }, [addTimer]);

    const offTimmer = useCallback(() => {
        console.info('REMOVE TIMMER');
        clearInterval(addTimer);
    }, [addTimer]);

    const value = useCallback(() => {
        return { id: (arrTest.length + 1), value: "Automatic Add"}
    }, [arrTest]);

    const addArrTest = useCallback((obj) => {
        console.info(obj);
        setArrTest([...arrTest, obj]);
    }, [arrTest]);

    const clearArrTest = useCallback(() => {
        setArrTest([]);
    }, [arrTest]);

    return (
        <TestContext.Provider value={{ arrTest, addArrTest, clearArrTest, onTimmer, offTimmer }}>
            { children }
        </TestContext.Provider>
    )

}

export function useTest() {
    const context = useContext(TestContext);

    return context;
}