export const formatAmount = (amount: number): string => (amount / 100).toFixed(2);
export const convertDateString = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
};
