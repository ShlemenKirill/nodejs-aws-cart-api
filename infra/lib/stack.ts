import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { config as dotenvConfig } from 'dotenv';
import * as process from 'process';
dotenvConfig();

export class CartServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sharedLambdaProps: Partial<NodejsFunctionProps> = {
      runtime: lambda.Runtime.NODEJS_18_X,
      environment: {
        PRODUCT_AWS_REGION: process.env.PRODUCT_AWS_REGION!,
        DB_HOST: process.env.DB_HOST!,
        DB_NAME: process.env.DB_NAME!,
        DB_PASSWORD: process.env.DB_PASSWORD!,
        DB_USER: process.env.DB_USER!,
      },
    };

    const lambdaFunction = new lambdaNodejs.NodejsFunction(
      this,
      'NestJsLambda',
      {
        ...sharedLambdaProps,
        entry: 'dist/src/main.js',
        handler: 'handler',
        memorySize: 1024,
        timeout: cdk.Duration.seconds(30),
      },
    );

    const api = new apigateway.LambdaRestApi(this, 'NestJsApi', {
      handler: lambdaFunction,
    });

    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url ?? '',
    });
  }
}
