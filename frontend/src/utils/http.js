const http = {
  get: async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.warn(error);
    }
  },
  post: async (url, data) => {
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      };
      const res = await fetch(url, options);
      const dataInJs = await res.json();
      return dataInJs;
    } catch (error) {
      console.warn(error);
    }
  },
};

export default http;
