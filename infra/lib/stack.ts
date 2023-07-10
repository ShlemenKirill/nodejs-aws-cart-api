import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambdaNodejs from 'aws-cdk-lib/aws-lambda-nodejs';

export class CartServiceStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFunction = new lambdaNodejs.NodejsFunction(
      this,
      'NestJsLambda',
      {
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
