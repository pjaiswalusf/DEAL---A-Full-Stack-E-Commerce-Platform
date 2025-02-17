import umami from '@umami/node';

umami.init({
    websiteId: '1827be81-8c63-4a48-8613-5f4776351b30', // Your website id
    hostUrl: 'https://cloud.umami.is', // URL to your Umami instance
});

export const umamiTrackCheckoutSuccessEvent = async (payload: {
    [key: string]: string | number | Date
}) => {
    await umami.track('checkout_success', payload);
}