# AWS Application Composer Demo [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fnumerica-ideas%2Fni-aws-application-composer-sample&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://blog.numericaideas.com)

This project contains source code and supporting files for a serverless application that you can deploy with the [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html).

That is a simple app that saves data sent in a DynamoDb table. The particularity is we have built the `template.yml` file from **AWS Application Composer**.

The following article introduces it in a very friendly way: https://blog.numericaideas.com/aws-application-composer

## Stacks

- JavaScript
- NodeJS
- DynamoDB

## Deploy

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

## Run

After deployement done, SAM CLI will print out the stack's output, including the new application URL. You can use `curl` or open the URL from a browser.

```bash
curl -X POST https://xxxxxxxx.execute-api.us-east-1.amazonaws.com/Prod/demo
-H 'Content-Type: application/json'
-d '{"message":"Hey are you ok?"}'
```

## Author

[NI Network](https://www.numericaideas.com/)
