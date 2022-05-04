export const useNotification = (title: string, options?: any) => {
    if (!('Notification' in window)) return;

    const triggerNotification = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(title, options);
                }
                    return //
                })
        } else {
            new Notification(title, options);
        }
    }

    return triggerNotification;
}
