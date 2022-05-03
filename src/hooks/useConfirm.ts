
type IParamsUseConfirm = () => void;

export const useConfirm = (message: string, callback: IParamsUseConfirm) => {
    if (typeof callback !== 'function') return //

    const confirmAction = () => {
        if (confirm(message)) {
            callback();
        }
    }

    return confirmAction;
}
