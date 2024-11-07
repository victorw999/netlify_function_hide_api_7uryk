exports.handler = async function (event, context) {
  const value = process.env.HOOAH;
  const { TOGGL_API, HOOAH } = process.env

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: `token-hider.js: \n Value is ${value}. \n TOGGL_API: ${TOGGL_API}, \n HOOAH:${HOOAH}` }),
  };
};
