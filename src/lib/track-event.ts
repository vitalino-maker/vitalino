
export const trackServerEvent = async (eventName: string) => {
  try {
    await fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventName }),
    });
  } catch (error) {
    console.error('Failed to track server event:', error);
  }
};
