#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CartServiceStack } from "../lib/stack";

const app = new cdk.App();
new CartServiceStack(app, "CartServiceStack", {});
app.synth();
