'use server';

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '1601577177693933';
const FB_API_TOKEN = process.env.FACEBOOK_API_TOKEN || 'EAAIhZBi8cTrABPgCHs7oDjBebg7Xu7VZBeQa6CsnADMh8R59B5xSwCDpTsq4CdlJ1nuZBt1ZBP4z8yff9dfU9SLD1y61wvGlH4Y2ZAvzqgkGZBdRIysh8ZCZBo78AJ4GI5Eox0tnII6GUCeCYq3pTfUjB3QNHoDxuHTumRJDbqXnDtPyVqywLNG3CjeQOzeBhgZDZD';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const pageview = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', name, options);
  }
};

type UserData = {
    client_ip_address: string | undefined,
    client_user_agent: string | undefined,
};

export const serverEvent = async (eventName: string, userData: UserData) => {
    const { Sha256 } = await import('crypto');

    const eventData = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                action_source: 'website',
                user_data: {
                    client_ip_address: userData.client_ip_address,
                    client_user_agent: userData.client_user_agent,
                },
            },
        ],
    };

    try {
        const response = await fetch(
            `https://graph.facebook.com/v19.0/${FB_PIXEL_ID}/events?access_token=${FB_API_TOKEN}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData),
            }
        );

        const responseData = await response.json();
        if (!response.ok) {
            console.error('Facebook API Error:', responseData);
            return { success: false, error: responseData };
        }
        return { success: true, data: responseData };
    } catch (error) {
        console.error('Error sending server event to Facebook:', error);
        return { success: false, error };
    }
};