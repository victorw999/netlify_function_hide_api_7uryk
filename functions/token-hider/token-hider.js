exports.handler = async function (event, context) {
  const value = process.env.HOOAH;

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
  };
};
