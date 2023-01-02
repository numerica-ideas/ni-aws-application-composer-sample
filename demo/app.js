const AWS = require("aws-sdk");
const uuid = require("uuid");

let tableName = process.env.TABLE_NAME;

let response;
let dynamoDB = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

async function lambdaHandler(event, context) {
  const { body } = event;
  var data = JSON.stringify(body);

  try {
    await dynamoDB
      .put({
        TableName: tableName,
        Item: { id: uuid.v4(), content: data },
      })
      .promise();
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "The data has been saved successfully",
      }),
    };
  } catch (error) {
    console.log("Errorrrrr", error);
    return {
      statusCode: 403,
      body: JSON.stringify({
        message: "Unable to save data",
      }),
    };
  }

  return response;
}

module.exports = { lambdaHandler };
