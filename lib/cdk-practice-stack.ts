import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import { CfnSubnet, CfnVPC } from 'aws-cdk-lib/lib/aws-ec2';
import { Vpc } from './resources/vpc';
import { Subnet } from './resources/subnet';

export class CdkPracticeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // VPC
    const vpc = new Vpc();
    vpc.createResources(this);

    // Subnet
    const subnet = new Subnet(vpc.vpc);
    subnet.createResources(this);
  }
}
