
export const useConfirm = (message: string, callback: any): any => {
    if (typeof callback !== 'function') return //

    const confirmAction = () => {
        if (confirm(message)) {
            callback();
        }
    }

    return confirmAction;
}
