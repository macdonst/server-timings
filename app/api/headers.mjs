// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */

/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const timings = {
    db: 0,
    webmention: 0,
    send: 0,
  };

  return {
    headers: {
      'Server-Timing': Object.keys(timings).map((key) => {
        return `${key};dur=${timings[key].toFixed(2)}`;
      }),
    },
    json: { server: "timings" }
  }
}
