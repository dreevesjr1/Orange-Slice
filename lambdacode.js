import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

console.log("Item successfully saved.");

export const handler = async (event) => {

    console.log("Event received:");
    console.log(JSON.stringify(event));

    const body = JSON.parse(event.body);

    console.log("Table Name:", process.env.TABLE_NAME);
    console.log("Parsed Body:");
    console.log(body);

    await docClient.send(
        new PutCommand({
            TableName: process.env.TABLE_NAME,
            Item: {
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
                phone: body.phone,
                signupDate: new Date().toISOString()
            }
        })
    );

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            message: "Signup successful"
        })
    };
};
``