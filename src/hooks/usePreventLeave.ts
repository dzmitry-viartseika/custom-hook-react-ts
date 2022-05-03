export const usePreventLeave = () => {
    const listener = (event: any) => {
        event.preventDefault();
        event.returnValue = '';
    }
    const disablePrevent = () => {
        window.removeEventListener('beforeunload', listener);
    }

    const enablePrevent = () => {
        window.addEventListener('beforeunload', listener);
    }

    return {
        enablePrevent,
        disablePrevent,
    }
}
